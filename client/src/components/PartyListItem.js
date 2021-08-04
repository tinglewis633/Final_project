import React from "react";

import "../styles/partyCard.css";

export default function PartyListItem(props) {
  
  const { name, price, username, eventPrivate, agerange, description } = props.event;

  return (

    <div className="card">
     
      {eventPrivate === false ? <div className="sold-out">🔒</div> : <div className="sold-out">🔓</div>}

      <div className='card-header'>
        <p style={{ color: "white" }}>Name: {name}</p>
        <p style={{ color: "white" }}>Price: ${price}</p>
      </div>

      <p style={{ color: "white" }}>access: {eventPrivate}</p>

      <div>
        <p style={{ color: "white" }}>Description: {description}</p>
        <p style={{ color: "white" }}>Age range: {agerange}</p>
      </div>

      <div className='card-footer'>
        <p style={{ color: "white" }}>Distance: 2.8km</p>
        <p style={{ color: "white" }}>Tags: #yuuheardd</p>
        <p style={{ color: "white" }}>@{username}</p>
      </div>

    </div>
  );
}
