import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

export default class Nav extends Component {
  render() {
    return (
      <div className="nav_wrapper">
        <div className="nav_content">
          <div>
            <h1>Portland Publishing "LOGO"</h1>
          </div>
          <ul>
            <Link to="/">
              <li className="">Create Post</li>
            </Link>
            <Link to="/posts">
              <li className="">All Posts</li>
            </Link>
          </ul>
        </div>
      </div>
    );
  }
}
