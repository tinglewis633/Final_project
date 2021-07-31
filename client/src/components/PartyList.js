import React, { useEffect } from "react";
import axios from "axios"
import PartyListItem from "./PartyListItem";

export default function PartyList(props) {
  for(let i = 0; i < 10; i++) {
    return (
      <ul>
        <PartyListItem />
      </ul>
    )
  }


  return 1;
  
}