import React from "react";
import "../styles/eventform.css";
//Add event form
export default function Addevent(props) {
  const url = "/api/events/";
  
  return (
    <form method="POST" className="add-event-form" action={url}>
      <p>Event name:</p>
      <input name="name" required placeholder="Enter event name"></input>
      <p>Date of the event:</p>
      <input required name="date" type="date" placeholder="YYYY-MM-DD" id="add-event-date"></input>

      <p>Address:</p>
      <input name="address" required placeholder="Enter address"></input>

      <p>Start time:</p>
      <input
        name="start_time"
        required
        placeholder="YYYY-MM-DD hr:min:sec"
      ></input>

      <p>End time:</p>
      <input
        name="end_time"
        required
        placeholder="YYYY-MM-DD hr:min:sec"
      ></input>

      <p>Price:</p>
      <input required name="price" placeholder="$"></input>

      <p>Description: </p>
      <input
        required
        name="description"
        placeholder="Describe ya event"
      ></input>

      {/* <p>Is it private?</p>
      <input
        required
        name="eventPrivate"
        placeholder="Enter true or false"
      ></input> */}

      <p>Is it private?</p>
		<input id="checkme" className="check-box" name="eventPrivate" type='checkbox' />
    

      <p>Age Range: </p>
      <input required name="agerange" placeholder="enter the age range"></input>
      <br></br>
      <button type="submit" className="add-event">Add Event</button>
      <br />
      <br/>
      <br/>
      
    </form>
  );
}
