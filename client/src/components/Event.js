import React from "react";

export default function Event(props) {
  if (props.event.event === undefined) {
    return <h1>Loading...</h1>;
  } else {
    const { name, host_id, description, population, price } = props.event.event;
    return (
      <div className="card">
        <p style={{ color: "white" }}>Name: {name}</p>
        <p style={{ color: "white" }}>Desc: {description}</p>
        <p style={{ color: "white" }}># of Attendants: {population}</p>
        <p style={{ color: "white" }}>Cost: ${price / 100}</p>
        <p style={{ color: "white" }}>Hosted By: {host_id}</p>
      </div>
    );
  }
}
