import React from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import Profile from "./Profile";
import PartyList from "./PartyList";

import "../styles/nav.css"

export default function NavBar(props) {
  return (
    <HashRouter>
    <nav role="navigation">
  <div id="menuToggle">   
    <input type="checkbox" />
    <span></span>
    <span></span>
    <span></span>
    <ul id="menu">
      <a href="/events"><li>Feed</li></a>
      <a href="/login"><li>My Events</li></a>
      <a href="#"><li>Activity</li></a>
      <a href="/profile"><li>Profile</li></a>
      <a href="https://erikterwan.com/" target="_blank"><li>Show me more</li></a>
          </ul>
          
  </div>
      </nav>
      </HashRouter>
        )
}
