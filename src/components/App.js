import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import LeaderBoard from "./LeaderBoard";
import Dashboard from "./Dashboard";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/leaderBoard" render={() => <LeaderBoard />} />
        <Route exact path="/leaderBoard" component={LeaderBoard} />

        <Route path="/dashboard" render={() => <Dashboard />} />
        <Route exact path="/dashboard" component={Dashboard} />

        <Route path="/login" render={() => <Login />} />
        <Route exact path="/login" component={Login} />

        <Route path="/" render={() => <Home />} />
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default withRouter(App);
