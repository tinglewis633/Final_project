import React from "react";

export default function Profile(props) {
 

  if (props.user.user === undefined) {
    return <h1>Loading...</h1>;
  } else {
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
  }
}
