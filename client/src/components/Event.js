import React, { useEffect, useState } from "react";
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

  const [acceptedEvents, setAcceptedEvents] = useState([]);

  useEffect(() => {
    axios.get("/api/events/user/accepted").then((data) => {
      setAcceptedEvents((prev) => ({
        ...prev,
        acceptedEvents: data.data,
      }));
    });
  }, []);

  

  if (props.events.events === undefined) {
    return <h1>Loading...</h1>;
  } else {

    const event = props.events.events.filter((event)=> event.id = event_id);

    const {
      event_name,
      description,
      population,
      price,
      name,
      eventprivate,
    } = event[0]; 


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
