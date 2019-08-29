import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Button } from "semantic-ui-react";
import StockCards from "./StockCards";
//css
import landingPageImage from "../styles/landingPageImage.css";
const Header = props => {
  return (
    <div>
      <header className="header">
        <div className="triangle first" />
        <div className="triangle second" />

        <svg width="0" height="0">
          <defs>
            <clipPath id="cp" clipPathUnits="objectBoundingBox">
              <path d="M0.500, 0.945 L0.994, 0.090 L0.006, 0.090 L0.500, 0.945 L0.500, 0.650 L0.262, 0.238 L0.738, 0.237 L0.500, 0.650z" />
            </clipPath>
          </defs>
        </svg>

        <div className="text-box">
          <h1 className="heading-primary">
            <span className="heading-primary-main">Stockaid</span>
          </h1>
        </div>

        <Link to={`/signup`}>
          <a href="/signup" className="btn btn-white btn-animated">
            Sign Up
          </a>
        </Link>
      </header>

      <div className="mission">
        <h3>
          {" "}
          Our Mission is to educate and empower youth from ages 13 to 18 on how
          to build wealth on their own by becoming financially literate.
        </h3>
      </div>
    </div>
  );
};

export default withRouter(Header);
