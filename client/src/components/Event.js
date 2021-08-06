import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Event(props) {
  const params = useParams();
  const event_id = params.eventId;
  console.log(props.events.events[event_id - 1]);
  if (props.events.events === undefined) {
    return <h1>Loading...</h1>;
  } else {
    const {
      name,
      description,
      population,
      price,
      host_id,
      eventprivate,
    } = props.events.events[event_id - 1];

    return (
      <div className="card">
        <p style={{ color: "white" }}>Name: {name}</p>
        <p style={{ color: "white" }}>Desc: {description}</p>
        <p style={{ color: "white" }}># of Attendants: {population}</p>
        <p style={{ color: "white" }}>Cost: ${price / 100}</p>
        <p style={{ color: "white" }}>Hosted By: {host_id}</p>
        {eventprivate && <button>Request</button>}
        {!eventprivate && <button>Join</button>}
      </div>
    );
  }
}
