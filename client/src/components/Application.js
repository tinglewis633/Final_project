import React, { useEffect } from "react";
import axios from "axios"

import NavBar from "./NavBar";
import { useEffect } from "react";

export default function Application(props) {

  return (
    <main>
    <h1>Hello, from react!</h1>
      <NavBar />
    </main>
    
  );
}