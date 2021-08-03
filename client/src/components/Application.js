import React, { useEffect, useState } from "react";
import axios from "axios";

import NavBar from "./NavBar";
import PartyList from "./PartyList";
import PartyListItem from "./PartyListItem";
import Profile from "./Profile";
import Event from "./Event";
import "../styles/main.css";

export default function Application(props) {

  const [events, setEvents] = useState({});
  const [user, setUser] = useState({});
  const [event, setEvent] = useState({});

  useEffect(() => {
    Promise.all([
      axios.get("http://localhost:3002/api/events"),
      axios.get("http://localhost:3002/api/user/1"),
      axios.get("http://localhost:3002/api/event/1"),
    ]).then((data) => {
      setEvents((prev) => ({
        ...prev,
        events: data[0].data,
      }));
      setUser((prev) => ({
        ...prev,
        user: data[1].data,
      }));
      setEvent((prev) => ({
        ...prev,
        event: data[2].data,
      }));
    });
  }, []);

  return (
    <main>
      {/* <Profile user={user} /> */}
      <PartyList events={events} />
      {/* <Event event={event} /> */}
    </main>
  );
}
