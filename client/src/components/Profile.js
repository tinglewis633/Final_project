import React, { useEffect } from "react";
import axios from "axios";

export default function Profile(props) {
  const logged_in = props.cookie.cookie;
  if (props.user.user === undefined) {
    return <h1>Loading...</h1>;
  } else if (logged_in) {
    let { date_of_birth, email, name } = props.user.user;

    if (date_of_birth !== undefined) {
      date_of_birth = date_of_birth.slice(0, 10);
    }

    return (
      <div className="card">
        <p style={{ color: "white" }}>Name: {name}</p>
        <p style={{ color: "white" }}>Email: {email}</p>
        <p style={{ color: "white" }}>date_of_birth: {date_of_birth}</p>
      </div>
    );
  } else {
    return (
      <div className="card">
        <p style={{ color: "white" }}>Please login first</p>
      </div>
    );
  }
}
