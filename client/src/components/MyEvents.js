import React, { useEffect } from "react";
import axios from "axios";
import PartyListItem from "./PartyListItem";

export default function PartyList(props) {
 

  if (props.events.myEvents === undefined) {
    return <h1>Loading...</h1>;
  } else {
    const parsedEvents = props.events.myEvents.map((event) => (
      <PartyListItem key={event.id} event={event} />
    ));
    return <section>{parsedEvents}</section>;
  }
}
