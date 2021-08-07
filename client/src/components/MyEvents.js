import React, { useEffect, useState } from "react";
import axios from "axios";
import PartyListItem from "./PartyListItem";

export default function PartyList(props) {

  const [ acceptedEvents, setAcceptedEvents ] = useState([]);
 
  useEffect(()=> {
    axios.get("/api/events/user/accepted").then((data) => {
    setAcceptedEvents((prev) => ({
      ...prev,  
      acceptedEvents: data.data,
    }));  
  })
    console.log("acceptedEvents:" ,acceptedEvents)
    

}, [])  


  if (props.events.myEvents === undefined) {
    return <h1>Loading...</h1>;
  } else {

    const parsedEvents = props.events.myEvents.map((event) => (
      <PartyListItem key={event.id} event={event} />
    ));

    // const parsedAcceptedEvents = acceptedEvents.map((event) => (
    //   <PartyListItem key={event.id} event={event} />
    // ));

    return <section>
      My Events: {parsedEvents}
      Accepted Events: 
    </section>;
  }
}
