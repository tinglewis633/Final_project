import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import NavBar from "./NavBar";
import PartyList from "./PartyList";
import PartyListItem from "./PartyListItem";
import Profile from "./Profile";
import Login from "./Login";
import Event from "./Event";
import Addevent from "./Addevent";
import MyEvents from "./MyEvents";
import "../styles/main.css";

export default function Application(props) {
  const [events, setEvents] = useState({});
  const [user, setUser] = useState({});
  const [event, setEvent] = useState({});
  const [myEvents, setMyEvents] = useState({});
  const [cookie, setCookie] = useState({});

  // fetching data and set it to the state
  useEffect(() => {
    Promise.all([
      axios.get("/api/events"),
      axios.get("/api/event/1"),
      axios.get("/api/logged_in"),
      axios.get("/api/events/user"),
    ]).then((data) => {
      setEvents((prev) => ({
        ...prev,
        events: data[0].data,
      }));
      setUser((prev) => ({
        ...prev,
        user: data[2].data,
      }));
      setEvent((prev) => ({
        ...prev,
        event: data[1].data,
      }));
      setCookie((prev) => ({
        ...prev,
        cookie: data[2].data.logged_in,
      }));
      setMyEvents((prev) => ({
        ...prev,
        myEvents: data[3].data,
      }));
    });
  }, []);

  return (
    <div>
      <NavBar cookie={cookie} />

      <main>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <PartyList events={events} cookie={cookie} />
            </Route>
            <Route path="/profile">
              <Profile user={user} cookie={cookie} />
            </Route>
            <Route path="/add-event">
              <Addevent user={user} />
            </Route>
            <Route path="/myevents">
              <MyEvents events={myEvents} />
            </Route>
            <Route path="/login">
              <Login cookie={cookie} />
            </Route>
            <Route render={() => <Redirect to="/" />} />
          </Switch>
        </BrowserRouter>
      </main>

      {/* <div className="login">
        <Login cookie={cookie} />
      </div>
      <main>
        <Profile user={user} cookie={cookie} />
        <PartyList events={events} />
        <Event event={event} />
      </main> */}
    </div>
  );
}
