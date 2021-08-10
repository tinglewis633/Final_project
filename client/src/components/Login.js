import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import "../styles/login.css";

export default function Login(props) {
  const logged_in = props.cookie?.cookie;

  const history = useHistory();

  useEffect(() => {
    if (logged_in) {
      history.push("/");
    }
  }, [logged_in, history]);

  if (logged_in === undefined || logged_in === false) {
    return (
      <div>
        <form method="POST" className="login-form" action="/login">
          <p className="login">Username:</p>
          <input
            className="login-input"
            name="username"
            required
            placeholder="Enter username"
          ></input>
          <p className="login">Password:</p>
          <input
            type="password"
            className="login-input"
            required
            name="password"
            placeholder="Enter password"
          ></input>
          <br></br>
          <button type="submit" className="login-btn">
            Login
          </button>
        </form>

        <h3 className="login-below">Don't have an account?, register below</h3>

        <form method="POST" className="register-form" action="/register">
          <p className="login">Email:</p>
          <input
            type="email"
            className="login-input"
            name="email"
            required
            placeholder="Enter email"
          ></input>
          <p className="login">Username:</p>
          <input
            className="login-input"
            name="username"
            required
            placeholder="Enter username"
          ></input>
          <p className="login">Password:</p>
          <input
            type="password"
            className="login-input"
            required
            name="password"
            placeholder="Enter password"
          ></input>
          <p className="login">Date of Birth:</p>
          <input
            className="login-input"
            name="date_of_birth"
            required
            placeholder="YYYY-MM-DD"
          ></input>
          <br></br>
          <button type="submit" className="login-btn">
            Register
          </button>
        </form>
      </div>
    );
  } else {
    return <div>You are logged in</div>;
  }
}
