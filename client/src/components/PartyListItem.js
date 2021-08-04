import React, { useEffect } from "react";
import axios from "axios";

import "../styles/partyCard.css";

export default function PartyListItem(props) {
  console.log("event", props.event.eventprivate);
  const {
    name,
    price,
    username,
    eventprivate,
    agerange,
    description,
  } = props.event;

  return (
    <div className="card">

      {eventprivate && <div className="sold-out">🔒</div>}
      {!eventprivate && <div className="sold-out">🔓</div>}

      <div className="card-header">
        <p style={{ color: "white" }}>Name: {name}</p>
        <p style={{ color: "white" }}>Price: ${price}</p>
      </div>

      <p style={{ color: "white" }}>access: 123{props.event.eventprivate}</p>

      <div>
        <p style={{ color: "white" }}>Description: {description}</p>
        <p style={{ color: "white" }}>Age range: {agerange}</p>
      </div>

      <div className="card-footer">
        <p style={{ color: "white" }}>Distance: 2.8km</p>
        <p style={{ color: "white" }}>Tags: #yuuheardd</p>
        <p style={{ color: "white" }}>@{username}</p>
      </div>
    </div>
  );
}
