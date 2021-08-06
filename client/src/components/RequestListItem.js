import React, { useEffect } from "react";
import axios from "axios";



export default function RequestListItem(props) {
    
  const acceptRequest = (e) => {
    e.preventDefault();
    axios.post(`/api/requested/${id}`)
  };

  const declineRequest = (e) => {
    e.preventDefault();
    axios.post(`/api/requested/${id}`)
  };


  const {
    event_name,
    name,
    id,
    accepted
  } = props.request;


  return (
   
    <div>
       {!accepted && <div>
      <br/>
      <br/>
      <span><strong>New Request-:-  </strong>User:{name} requested to come to {event_name} event!</span>
      <br/>
    <button onClick={acceptRequest}>Accept</button>
        <button onClick={declineRequest}>Decline</button>
        </div>
    }
        
    </div>

  );
}
