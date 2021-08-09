import React from "react";
import PartyListItem from "./PartyListItem";

export default function PartyList(props) {
  if (props.events.events === undefined) {
    return <h1>Loading...</h1>;
  } else {
    const parsedEvents = props.events.events.map((event) => (
      <PartyListItem key={event.id} user={props.user.user} event={event} />
    ));

    return <section>{parsedEvents}</section>;
  }
}
