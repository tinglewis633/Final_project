import React from "react";
import axios from "axios";
import { Switch, Route } from "react-router-dom";
import { useHistory } from "react-router";

import "../styles/partyCard.css";

export default function PartyListItem(props) {
  const history = useHistory();
  const editEventForm = (e) => {
    e.preventDefault();
    history.push(`/editevent/${id}`);
  };

  const eventDetail = (e) => {
    e.preventDefault();
    history.push(`/event/${id}`);
  };

  const deleteEvent = (e) => {
    e.preventDefault();
    axios.post(`/api/event/${id}`);
  };

  const {
    id,
    event_name,
    name,
    eventprivate,
    description,
    host_id,
    date,
  } = props.event;
  if (props.user === undefined) {
    return <h1>loading</h1>;
  } else {
    const user_id = props.user.id;
    const newDate = date.slice(0, 10);
    return (
      <div className="card">
        {eventprivate && <div className="sold-out">Private</div>}
        {!eventprivate && <div className="sold-out">Public</div>}

        <div className="card-header">
          <p style={{ color: "white" }}>Name: {event_name}</p>
        </div>
        <div>
          <p style={{ color: "white" }}>Date: {newDate}</p>
        </div>
        <div>
          <p style={{ color: "white" }}>Description: {description}</p>
        </div>

        <div className="card-footer">
          <p style={{ color: "white" }}>Host: @{name}</p>
        </div>
        <button onClick={eventDetail}>detail</button>

        {host_id === user_id && (
          <button onClick={editEventForm}>Edit Event</button>
        )}

        {host_id === user_id && (
          <button onClick={deleteEvent}>Delete Event</button>
        )}

        {/* Do we still need these three lines?? by Lewis */}
        <Switch>
          <Route path="/events/:eventId" component={Event} />
        </Switch>
      </div>
    );
  }
}
