import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//Add event form
export default function Editevent(props) {
  //setup form action url
  const params = useParams();
  const event_id = params.id;
  const url = `/api/events/${event_id}`;
  const event = props.events.events.filter((event)=> event.id = event_id);
  const {
    event_name,
    date,
    address,
    description,
    start_time,
    end_time,
    population,
    agerange,
    price,
    name,
    eventprivate,
  } = event[0];

  // cut the variables to correct form
  const newDate = date.slice(0, 10);
  const new_start_time =
    start_time.substring(0, 10) + " " + start_time.substring(11, 19);
  const new_end_time =
    end_time.substring(0, 10) + " " + end_time.substring(11, 19);

  //setting up state for all input values
  const [eventName, setEventName] = useState(event_name);
  const [dateInput, setDateInput] = useState(newDate);
  const [addressInput, setAddressInput] = useState(address);
  const [startTimeInput, setStarTimeInput] = useState(new_start_time);
  const [endTimeInput, setEndTimeInput] = useState(new_end_time);
  const [priceInput, setPriceInput] = useState(price);
  const [descriptionInput, setDescriptionInput] = useState(description);
  const [privateInput, setPrivateInput] = useState(eventprivate);
  const [ageRangeInput, setAgeRangeInput] = useState(agerange);

  //setting up onchange for all input
  const onChangeName = (e) => {
    setEventName(e.target.value);
  };

  const onChangeDate = (e) => {
    setDateInput(e.target.value);
  };

  const onChangeAddress = (e) => {
    setAddressInput(e.target.value);
  };

  const onChangeStartTime = (e) => {
    setStarTimeInput(e.target.value);
  };

  const onChangeEndTime = (e) => {
    setEndTimeInput(e.target.value);
  };

  const onChangePrice = (e) => {
    setPriceInput(e.target.value);
  };

  const onChangeDescription = (e) => {
    setDescriptionInput(e.target.value);
  };

  const onChangePrivate = (e) => {
    setPrivateInput(e.target.value);
  };

  const onChangeAgeRange = (e) => {
    setAgeRangeInput(e.target.value);
  };

  return (
    <form method="POST"  action={url}>
      <p>Event name:</p>
      <input
        name="name"
        required
        placeholder="Enter event name"
        value={eventName}
        onChange={onChangeName}
      ></input>
      <p>Date of the event:</p>
      <input
        required
        name="date"
        placeholder="YYYY-MM-DD"
        onChange={onChangeDate}
        value={dateInput}
      ></input>

      <p>Address</p>
      <input
        name="address"
        required
        placeholder="Enter address"
        onChange={onChangeAddress}
        value={addressInput}
      ></input>

      <p>Start time:</p>
      <input
        name="start_time"
        required
        placeholder="YYYY-MM-DD hr-min-sec"
        onChange={onChangeStartTime}
        value={startTimeInput}
      ></input>

      <p>End time:</p>
      <input
        name="end_time"
        required
        placeholder="YYYY-MM-DD hr-min-sec"
        onChange={onChangeEndTime}
        value={endTimeInput}
      ></input>

      <p>Price</p>
      <input
        required
        name="price"
        placeholder="Enter price"
        onChange={onChangePrice}
        value={priceInput}
      ></input>

      <p>description: </p>
      <input
        required
        name="description"
        placeholder="Describe ya event"
        onChange={onChangeDescription}
        value={descriptionInput}
      ></input>

      <p>is it private?</p>
      <input
        required
        name="eventPrivate"
        placeholder="Enter true or false"
        onChange={onChangePrivate}
        value={privateInput}
      ></input>

      <p>age range: </p>
      <input
        required
        name="agerange"
        placeholder="enter the age range"
        onChange={onChangeAgeRange}
        value={ageRangeInput}
      ></input>

      <button type="submit" className="input-btn">
        Save event changes
      </button>
    </form>
  );
}
