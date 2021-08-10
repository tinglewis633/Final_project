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
      <div className="wholecard">
        <div className="card" onClick={eventDetail}>
          {eventprivate && (
            <div className="sold-out">
              <strong>Private</strong>
            </div>
          )}
          {!eventprivate && (
            <div className="sold-out">
              <strong>Public</strong>
            </div>
          )}

          <div className="card-header">
            <p>Name: {event_name}</p>
          </div>
          <div>
            <p>Date: {newDate}</p>
          </div>
          <div>
            <p>Description: {description}</p>
          </div>

          <div className="card-footer">
            <p>Host: @{name}</p>
          </div>

          {/* Do we still need these three lines?? by Lewis */}
          <Switch>
            <Route path="/events/:eventId" component={Event} />
          </Switch>
        </div>

        <div className="btns">
          {host_id === user_id && (
            <button onClick={deleteEvent}>
              <i class="far fa-trash-alt"></i>
            </button>
          )}
          <br></br>
          {host_id === user_id && (
            <button onClick={editEventForm}>
              <i class="far fa-edit"></i>
            </button>
          )}
          <br></br>
          <button onClick={eventDetail}>
            <i class="fas fa-info"></i>
          </button>
        </div>
      </div>
    );
  }
}
