import React, { useEffect, useState } from "react";
import axios from "axios";
import RequestListItem from "./RequestListItem";

import "../styles/activity.css";
export default function Activity(props) {
  const [requests, setRequests] = useState({});

  useEffect(() => {
    axios.get("/api/requested").then((data) => {
      const newData = data.data.filter((request) => request.accepted === null);

      setRequests((prev) => ({
        ...prev,
        requests: newData,
      }));
    });
  }, [requests]);

  if (requests.requests === undefined) {
    return <h1>Loading...</h1>;
  } else {
    const parsedRequests = requests.requests.map((request) => (
      <RequestListItem key={request.id} request={request} />
    ));

    return (
      <section>
        {parsedRequests}{" "}
        {parsedRequests.length === 0 && (
          <h3 className="activity-text">You have no new requests!</h3>
        )}
      </section>
    );
  }
}
