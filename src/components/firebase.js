import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyAvvpJnH_i9Lvib7iVoFfaZvcOPHqBD7VA",
  authDomain: "playstockaid-e42fe.firebaseapp.com",
  databaseURL: "https://playstockaid-e42fe.firebaseio.com",
  projectId: "playstockaid-e42fe",
  storageBucket: "",
  messagingSenderId: "422603790141",
  appId: "1:422603790141:web:8b1bd0cacb3144b9"
};
// Initialize Firebase

class Firebase {
  constructor() {
    firebase.initializeApp(firebaseConfig);
    this.auth = firebase.auth();
    this.db = firebase.firestore();
  }

  login(email, password) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    return this.auth.signOut();
  }

  async register(name, email, password) {
    await this.auth.createUserWithEmailAndPassword(email, password);
    return this.auth.currentUser.updateProfile({
      displayName: name
    });
  }

  addSchool(school) {
    if (!this.auth.currentUser) {
      return alert("Not authorized");
    }

    return this.db
      .doc(`users_codedamn_video/${this.auth.currentUser.uid}`)
      .set({
        school
      });
  }

  isInitialized() {
    return new Promise(resolve => {
      this.auth.onAuthStateChanged(resolve);
    });
  }

  getCurrentUsername() {
    return this.auth.currentUser && this.auth.currentUser.displayName;
  }

  async getCurrentUserSchool() {
    const school = await this.db
      .doc(`users_codedamn_video/${this.auth.currentUser.uid}`)
      .get();
    return school.get("school");
  }
}

export default new Firebase();
