import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from '../assets/portbookclub.png';
import lantern from '../assets/lantern.png'
import "./Nav.css";

export default class Nav extends Component {
  render() {
    return (
      <div className="nav_wrapper">
        <div className="nav_content">
          <Link to="/posts">
            <div className='logo_wrapper'>
              <img src={lantern} alt="logo" width='50px'/>
              <h1>Portland Book Club</h1>
            </div>
          </Link>
          <ul className="list">
            <Link to="/">
              <li className="list_item">Create Post</li>
            </Link>

            <Link to="/postlist">
              <li className="list_item">My Posts</li>
            </Link>
          </ul>
        </div>
      </div>
    );
  }
}
