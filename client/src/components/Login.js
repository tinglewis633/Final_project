import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

export default function Login(props) {
  const logged_in = props.cookie?.cookie;

  const history = useHistory();

  useEffect(() => {
    if (logged_in) {
      history.push("/");
    }
  }, [logged_in]);

  if (logged_in === undefined || logged_in === false) {
    return (
      <div>
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

        <h2>Don't have an account?, register below</h2>

        <form method="POST" className="register-form" action="/register">
          <p>Email:</p>
          <input
            type="email"
            className="email"
            name="email"
            required
            placeholder="Enter email"
          ></input>
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
          <p>Date of Birth:</p>
          <input
            className="date_of_birth"
            name="date_of_birth"
            required
            placeholder="YYYY-MM-DD"
          ></input>
          <button type="submit" className="input-btn">
            Register
          </button>
        </form>
      </div>
    );
  } else {
    return <div>You are logged in</div>;
  }
}
