import React from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import "../styles/event.css";
export default function Event(props) {
  const params = useParams();
  const event_id = params.eventId;

  const history = useHistory();

  const requestEvent = (e) => {
    e.preventDefault();
    axios.post(`/api/event/${event_id}/request`);
  };

  const joinEvent = (e) => {
    e.preventDefault();
    axios.post(`/api/event/${event_id}/join`).then(() => {
      history.push("/myevents");
    });
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

        <p style={{ color: "white" }}>Start_time: {newStartTime}</p>
        <p style={{ color: "white" }}>End_time: {newEndtTime}</p>

        {!eventprivate && <p style={{ color: "white" }}>Address: {address}</p>}

        <p style={{ color: "white" }}>Hosted By: {name}</p>
        <br></br>
        {eventprivate && (
          <button className="request-btn" onClick={requestEvent}>
            Request
          </button>
        )}
        {!eventprivate && (
          <button className="request-btn" onClick={joinEvent}>
            Join
          </button>
        )}
      </div>
    );
  }
}
