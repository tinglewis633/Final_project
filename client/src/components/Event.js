import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Event(props) {
  const params = useParams();
  const event_id = params.eventId;

  const requestEvent = (e) => {
    e.preventDefault();
    axios.post(`/api/event/${event_id}/request`);
  };

  const joinEvent = (e) => {
    e.preventDefault();
    axios.post(`/api/event/${event_id}/join`);
  };



  if (props.events.events === undefined) {
    return <h1>Loading...</h1>;
  } else {
    const {
      event_name,
      description,
      population,
      price,
      name,
      eventprivate,
    } = props.events.events[event_id - 1];

    return (
      <div className="card">
        <p style={{ color: "white" }}>Name: {event_name}</p>
        <p style={{ color: "white" }}>Desc: {description}</p>
        <p style={{ color: "white" }}># of Attendants: {population}</p>
        <p style={{ color: "white" }}>Cost: ${price}</p>
        <p style={{ color: "white" }}>Hosted By: {name}</p>
        {eventprivate && <button onClick={requestEvent}>Request</button>}
        {!eventprivate && <button onClick={joinEvent}>Join</button>}
      </div>
    );
  }
}
