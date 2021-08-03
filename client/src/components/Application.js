import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import NavBar from "./NavBar";
import PartyList from "./PartyList";
import PartyListItem from "./PartyListItem";
import Profile from "./Profile";
import Login from "./Login";
import Event from "./Event";
import "../styles/main.css";

export default function Application(props) {    
  const [events, setEvents] = useState({});
  const [user, setUser] = useState({});
  const [event, setEvent] = useState({});
  const [cookie, setCookie] = useState({});
  useEffect(() => {
    Promise.all([
      axios.get("/api/events"),
      axios.get("/api/event/1"),
      axios.get("/api/logged_in"),
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
    });
  }, []);

  return (


        <div>
    <BrowserRouter>
        <Switch>
          <Route path="/login">
            <Login cookie={cookie} />
          </Route>
          <Route path="/profile">
            <Profile user={user} />
          </Route>
          <Route path="/events">
            <PartyList events={events} />
          </Route>
        </Switch>
      </BrowserRouter>
    
       <div className="navbar">
        <NavBar events={events}/>
      </div>

      {/* <div className="login">
        <Login cookie={cookie} />
      </div>
      <main>
        <Profile user={user} />
        <PartyList events={events} />
        <Event event={event} />
      </main> */}

     
    </div>
  );
}
