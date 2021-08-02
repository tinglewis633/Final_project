import React, { useEffect } from "react";
import axios from "axios";

import "../styles/partyCard.css";
export default function PartyListItem(props) {
  const { name, address, host_id } = props.event;
  return (
    <div className="card">
      <p style={{ color: "white" }}>Name: {name}</p>

      <p style={{ color: "white" }}>Address: {address}</p>

      <p style={{ color: "white" }}>Host: {host_id}</p>
    </div>
  );
}
