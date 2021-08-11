import React, { useEffect, useState } from "react";
import axios from "axios";
import PartyListItem from "./PartyListItem";

import "../styles/myevents.css";

export default function PartyList(props) {
  const [acceptedEvents, setAcceptedEvents] = useState([]);

  useEffect(() => {
    axios.get("/api/events/user/accepted").then((data) => {
      setAcceptedEvents((prev) => ({
        ...prev,
        acceptedEvents: data.data,
      }));
    });
  }, []);

  if (
    props.events.myEvents === undefined ||
    acceptedEvents.acceptedEvents === undefined
  ) {
    return <h1>Loading1...</h1>;
  } else {
    const parsedEvents = props.events.myEvents.map((event) => (
      <PartyListItem key={event.id} user={props.user.user} event={event} />
    ));

    const parsedAcceptedEvents = acceptedEvents.acceptedEvents.map((event) => (
      <PartyListItem key={event.id} user={props.user.user} event={event} />
    ));

    return (
      <section>
        <div className="myevents-text">My Events</div>
        <br></br>
        {parsedEvents}{" "}
        {parsedEvents.length === 0 && (
          <h2 className="myevents-text" id="myevents-h2">
            You have not created any events!
          </h2>
        )}{" "}
        <a href="/add-event"></a>
        <div className="myevents-text">Accepted Events</div>
        <br></br>
        {parsedAcceptedEvents}{" "}
        {parsedAcceptedEvents.length === 0 && (
          <h3 id="myevents-text">You have not been accepted to any event!</h3>
        )}
      </section>
    );
  }
}
