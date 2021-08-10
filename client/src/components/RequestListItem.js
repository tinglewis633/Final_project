import React from "react";
import axios from "axios";
import "../styles/request.css";

export default function RequestListItem(props) {
  const acceptRequest = (e) => {
    e.preventDefault();
    axios.post(`/api/requested/${id}`);
  };

  const declineRequest = (e) => {
    e.preventDefault();
    axios.post(`/api/declined/${id}`);
  };

  const { event_name, name, id, accepted } = props.request;

  return (
    <div>
      {!accepted && (
        <div className="request">
          <br />
          <br />
          <span>
            <h3 id="request-head">New Request </h3>
            User:{name} requested to come to {event_name} event!
          </span>
          <br />
          <br></br>
          <button onClick={acceptRequest}>Accept</button>
          <button onClick={declineRequest}>Decline</button>
        </div>
      )}
    </div>
  );
}
