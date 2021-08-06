import React, { useEffect } from "react";

//Add event form
export default function Addevent(props) {
  
 

  return (
    <form method="POST" className="add-event-form" action="/api/events">
      <p>Event name:</p>
      <input name="name" required placeholder="Enter event name"></input>
      <p>Date of the event:</p>
      <input required name="date" placeholder="YYYY-MM-DD"></input>

      <p>Address</p>
      <input name="address" required placeholder="Enter address"></input>

      <p>Start time:</p>
      <input
        name="start_time"
        required
        placeholder="YYYY-MM-DD hr-min-sec"
      ></input>

      <p>End time:</p>
      <input
        name="end_time"
        required
        placeholder="YYYY-MM-DD hr-min-sec"
      ></input>

      <p>Price</p>
      <input required name="price" placeholder="Enter price"></input>

      <p>description: </p>
      <input
        required
        name="description"
        placeholder="Describe ya event"
      ></input>

      <p>is it private?</p>
      <input
        required
        name="eventPrivate"
        placeholder="Enter true or false"
      ></input>

      <p>age range: </p>
      <input
        required
        name="agerange"
        placeholder="enter the ange range"
      ></input>

      <button type="submit" className="input-btn">
        Add Event
      </button>
    </form>
  );
}
