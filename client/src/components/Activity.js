import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Activity(props) {
const [requests, setRequests]= useState({});

useEffect(()=> {
  axios.get("/api/requested").then((data)=>{
    setRequests((prev) => ({
      ...prev,  
      requests: data.data,
    }));
  })

}, [])

  // const params = useParams();
  // const event_id = params.eventId;
  // const requestEvent = (e) => {
  //   e.preventDefault();
  //   axios.post(`/api/event/${event_id}/request`);
  // };
  // console.log(props.events.events[event_id - 1]);
  // if (props.events.events === undefined) {
  //   return <h1>Loading...</h1>;
  // } else {
  //   const {
  //     name,
  //     description,
  //     population,
  //     price,
  //     host_id,
  //     eventprivate,
  //   } = props.events.events[event_id - 1];

    return (
      <div className="card">
        
      </div>
    );
  
}
