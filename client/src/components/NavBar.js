import React from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";

import Profile from "./Profile";
import PartyList from "./PartyList";

import "../styles/nav.css";

export default function NavBar(props) {
  const logged_in = props.cookie?.cookie;

  if (logged_in) {
    return (
      <div id="menuToggle">
        <input type="checkbox" />
        <span></span>
        <span></span>
        <span></span>
        <ul id="menu">
          <a href="/">
            <li>Feed</li>
          </a>
          <a href="/myevents">
            <li>My Events</li>
          </a>
          <a href="#">
            <li>Activity</li>
          </a>
          <a
            href="/profile
        "
          >
            <li>Profile</li>
          </a>
          <a href="/add-event">
            <li>+ (add event)</li>
          </a>
          <form method="POST" className="logout-form" action="/logout">
            <button type="submit" className="input-btn">
              Logout
            </button>
          </form>
        </ul>
      </div>
    );
  } else {
    return <h1></h1>;
  }
}
