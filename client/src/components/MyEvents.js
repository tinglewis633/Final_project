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
    return <h1>Loading...</h1>;
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
        {parsedEvents}{" "}
        {parsedEvents.length === 0 && (
          <h2 className="noevent-text">
            You have not created any events !
          </h2>
        )}{" "}
        <a href="/add-event"></a>
        <br />
        <br />
        <div className="myevents-text">Accepted Events</div>
        {parsedAcceptedEvents}{" "}
        {parsedAcceptedEvents.length === 0 && (
          <h2 className="noevent-text" id="myevents-text">You have not been accepted to any event !</h2>
        )}
      </section>
    );
  }
}
