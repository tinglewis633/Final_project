import React from "react";
import axios from "axios";
import "../styles/request.css"

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
          <div>
            <h3 id="request-head">New Request </h3>
            {name} requested to come to {event_name}!
            <br/>
            <div className="options">
            <a onClick={acceptRequest}><i class="fas fa-check-square fa-2x"></i></a>

            <a onClick={declineRequest}><i class="fas fa-times fa-2x"></i></a>
            </div>
          </div>
          <br />
          {/* <button id="accept-btn" onClick={acceptRequest}>Accept</button> */}
         

          {/* <button id="decline-btn" onClick={declineRequest}>Decline</button> */}
        </div>
      )}
    </div>
  );
}
