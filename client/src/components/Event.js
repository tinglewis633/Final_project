import { React, useEffect, useState } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import "../styles/event.css";
export default function Event(props) {
  const params = useParams();
  const event_id = params.eventId;

  const history = useHistory();

  const [isAccepted, setIsAccepted] = useState(null);

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

  useEffect(() => {
    axios.get("/api/events/user/accepted")
      .then((data) => {
        console.log(data.data)
        for (const iterator of data.data) {
          console.log(iterator["events_id"] == event_id);

          if (iterator["events_id"] == event_id && iterator["accepted"] === true) {
            setIsAccepted(true);
          }
          // for (const key in iterator) {

          //   console.log(key)
          // }
        }
      })
  }, []);

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
    const parsedDate = new Date(newDate);
    const newStartTime = start_time.slice(12, 19);
    const newEndtTime = end_time.slice(12, 19);

    return (
      <div>
      <div className="card">
        {eventprivate && <div className="sold-out">Private</div>}
        {!eventprivate && <div className="sold-out">Public</div>}
        <p style={{ color: "white" }}>Name: {event_name}</p>
        <p style={{ color: "white" }}>Date: {parsedDate.toDateString()}</p>
        <p style={{ color: "white" }}>Desc: {description}</p>
        {eventprivate && <p style={{ color: "white" }}>Cost: ${price}</p>}
        <p style={{ color: "white" }}>Age Range: ${agerange}</p>

        <p style={{ color: "white" }}>Start time: {newStartTime}</p>
        <p style={{ color: "white" }}>End time: {newEndtTime}</p>

        {isAccepted && <p style={{ color: "white" }}>Address: {address}</p>}

        <p style={{ color: "white" }}>Hosted By: @{name}</p>        
        </div>
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
