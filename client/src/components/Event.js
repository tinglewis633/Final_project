import React from "react";
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
    const event = props.events.events.filter((event) => event.id == event_id);

    const {
      event_name,
      description,
      price,
      name,
      eventprivate,
      agerange,
      date,
      start_time,
      end_time,
      address,
    } = event[0];
    const newDate = date.slice(0, 10);
    const newStartTime = start_time.slice(12, 19);
    const newEndtTime = end_time.slice(12, 19);
    return (
      <div className="card">
        {eventprivate && <div className="sold-out">Private</div>}
        {!eventprivate && <div className="sold-out">Public</div>}
        <p style={{ color: "white" }}>Name: {event_name}</p>
        <p style={{ color: "white" }}>Date: {newDate}</p>
        <p style={{ color: "white" }}>Desc: {description}</p>
        {eventprivate && <p style={{ color: "white" }}>Cost: ${price}</p>}
        <p style={{ color: "white" }}>Age Range: ${agerange}</p>
        <p style={{ color: "white" }}>Date: ${date}</p>

        <p style={{ color: "white" }}>Start_time: {newStartTime}</p>
        <p style={{ color: "white" }}>End_time: {newEndtTime}</p>

        {!eventprivate && <p style={{ color: "white" }}>Address: {address}</p>}

        <p style={{ color: "white" }}>Hosted By: {name}</p>

        {eventprivate && <button onClick={requestEvent}>Request</button>}
        {!eventprivate && <button onClick={joinEvent}>Join</button>}
      </div>
    );
  }
}
