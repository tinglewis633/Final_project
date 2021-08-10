import React from "react";


import "../styles/nav.css";

export default function NavBar(props) {
  const logged_in = props.cookie?.cookie;

  if (logged_in) {
    return (
      <nav className="mainNav">
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
          <a href="/activity">
            <li>Activity</li>
          </a>
          <a
            href="/profile
        "
          >
            <li>Profile</li>
          </a>
          <form method="POST" className="logout-form" action="/logout">
            <button type="submit" className="myButton">
              Logout
            </button>
          </form>
        </ul>
        </div>
        <a href="/add-event"><i class="far fa-plus-square"></i></a>
        </nav>
    );
  } else {
    return <h1> </h1>;
  }
}
