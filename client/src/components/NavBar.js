import React from "react";

import "../styles/nav.css"

export default function NavBar(props) {
  return (
  <div id="menuToggle">   
    <input type="checkbox" />
    <span></span>
    <span></span>
    <span></span>
      <ul id="menu">
      <a href="/"><li>Feed</li></a>
      <a href="#"><li>My Events</li></a>
      <a href="#"><li>Activity</li></a>
      <a href="/login"><li>Profile</li></a>
    </ul>
    </div>
        )
}
