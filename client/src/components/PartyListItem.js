import React, { useEffect } from "react";
import axios from "axios"

import "../styles/partyCard.css"
export default function PartyListItem(props) {

  return (
    <div class = "card">
      <p style={{ color: 'white' }}>Alex sweet 16</p>

      <div class="card-footer">
      <h5 style={{color:'white'}}>Tags: </h5>
      </div>
      
   </div>
    
  );
}