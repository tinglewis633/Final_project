import React, { useEffect, useState } from "react";
import axios from "axios";
import PartyListItem from "./PartyListItem";

export default function PartyList(props) {
  const [acceptedEvents, setAcceptedEvents] = useState([]);

  useEffect(() => {
    axios.get("/api/events/user/accepted").then((data) => {
      console.log("DATA",data)
      setAcceptedEvents((prev) => ({
     
        ...prev,
        acceptedEvents: data.data,
      }));
    });
    console.log("acceptedEvents:", acceptedEvents);
  }, []);

  if (props.events.myEvents === undefined || acceptedEvents === undefined) {
    return <h1>Loading1...</h1>;
  } else {
    const parsedEvents = props.events.myEvents.map((event) => (
      <PartyListItem key={event.id} user={props.user.user} event={event} />
    ));

   
      const parsedAcceptedEvents = acceptedEvents.acceptedEvents.map((event) => (
        <PartyListItem key={event.id} user={props.user.user} event={event} />
      ));
    

    

    return <section>
      My Events: {parsedEvents}
      Accepted Events: {parsedAcceptedEvents}
    </section>;
  }
}
