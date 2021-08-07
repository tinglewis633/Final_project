import React, { useEffect, useState } from "react";
import axios from "axios";
import RequestListItem from "./RequestListItem";
export default function Activity(props) {

const [requests, setRequests]= useState({});

useEffect(()=> {
  axios.get("/api/requested").then((data)=>{
    setRequests((prev) => ({
      ...prev,  
      requests: data.data,
    }));
  })

}, [requests])  

  if (requests.requests === undefined) {
    return <h1>Loading...</h1>;
  } else {
    const parsedRequests = requests.requests.map((request) => (
      <RequestListItem key={request.id} request={request} />
    ));
   
    return <section>{parsedRequests}</section>;
  }
  
}
