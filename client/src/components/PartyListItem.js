import React, { useEffect } from "react";
import axios from "axios";
import { Link, Switch, Route } from "react-router-dom";
import { useHistory } from "react-router";

import "../styles/partyCard.css";

export default function PartyListItem(props) {
  const history = useHistory();

  const eventDetail = (e) => {
    e.preventDefault();
    history.push(`/event/${id}`);
  };

  const {
    id,
    name,
    price,
    username,
    eventprivate,
    agerange,
    description,
  } = props.event;

  return (
    <div onClick={eventDetail} className="card">
      
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

      <Switch>
        <Route path="/events/:eventId" component={Event} />
      </Switch>
    </div>
  );
}
