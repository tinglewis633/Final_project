import React, { useEffect, useState } from "react";
import axios from "axios";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import NavBar from "./NavBar";
import PartyList from "./PartyList";
import Profile from "./Profile";
import Login from "./Login";
import Event from "./Event";
import Addevent from "./Addevent";
import MyEvents from "./MyEvents";
import Activity from "./Activity";
import Editevent from "./Editevent";
import EditProfileForm from "./EditProfileForm";
import ProtectedRoute from "./Protectedroute";

import "../styles/main.css";

export default function Application(props) {
  const [events, setEvents] = useState({});
  const [user, setUser] = useState({});
  const [event, setEvent] = useState({});
  const [myEvents, setMyEvents] = useState({});
  const [cookie, setCookie] = useState();

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
  }, [events]);

  return (
    <div>
      <NavBar cookie={cookie} />

      <main>
        <BrowserRouter>
          <Switch>
            <ProtectedRoute
              events={events}
              component={PartyList}
              cookie={cookie}
              user={user}
              exact
              path="/"
            >
              {/* <PartyList events={events} cookie={cookie} /> */}
            </ProtectedRoute>

            <ProtectedRoute
              events={events}
              component={Event}
              cookie={cookie}
              exact
              path="/event/:eventId"
            >
              {/* <PartyList events={events} cookie={cookie} /> */}
            </ProtectedRoute>

            <ProtectedRoute
              user={user}
              component={Profile}
              cookie={cookie}
              path="/profile"
            >
              {/* <Profile user={user} cookie={cookie} /> */}
            </ProtectedRoute>

            <ProtectedRoute
              cookie={cookie}
              user={user}
              component={Addevent}
              path="/add-event"
            >
              {/* <Addevent cookie={cookie} user={user} /> */}
            </ProtectedRoute>
            <ProtectedRoute
              cookie={cookie}
              events={myEvents}
              user={user}
              component={MyEvents}
              path="/myevents"
            >
              {/* <MyEvents cookie={cookie} events={myEvents} /> */}
            </ProtectedRoute>

            <ProtectedRoute
              cookie={cookie}
              events={myEvents}
              component={Activity}
              path="/activity"
            >
              {/* <MyEvents cookie={cookie} events={myEvents} /> */}
            </ProtectedRoute>

            <ProtectedRoute

              component={Editevent}
              events={events}
              path="/editevent/:id">
            </ProtectedRoute>
        <ProtectedRoute
              user={user}
              path="/editprofile"
              component={EditProfileForm}>

              {/* <MyEvents cookie={cookie} events={myEvents} /> */}
            </ProtectedRoute>

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
