import React, { useEffect } from "react";
import axios from "axios";
import PartyListItem from "./PartyListItem";

export default function PartyList(props) {
  const logged_in = props.cookie.cookie;
  if (props.events.events === undefined) {
    return <h1>Loading1...</h1>;
  } else if (!logged_in) {
    return <div></div>;
  } else {
    const parsedEvents = props.events.events.map((event) => (
      <PartyListItem key={event.id} event={event} />
    ));
    return <section>{parsedEvents}</section>;
  }
}
