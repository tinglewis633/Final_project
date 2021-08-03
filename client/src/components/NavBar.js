import React from "react";

export default function NavBar(props) {
  return (
    <form method="POST" className="login-form" action="/login">
      <p>Username:</p>
      <input
        className="username"
        name="username"
        required
        placeholder="Enter username"
      ></input>
      <p>Password:</p>
      <input
        type="password"
        className="password"
        required
        name="password"
        placeholder="Enter password"
      ></input>

      <button type="submit" className="input-btn">
        Login
      </button>
    </form>
  );
}
