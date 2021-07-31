import React, { useEffect } from "react";
import axios from "axios"

import NavBar from "./NavBar";
import PartyList from "./PartyList";
import PartyListItem from "./PartyListItem";

export default function Application(props) {

  return (
    <main>
      <h1>Hello, from react!</h1>
      <PartyListItem />
      <PartyListItem />
      <PartyListItem />
      <PartyListItem />
      <NavBar />
    </main>
    
  );
}