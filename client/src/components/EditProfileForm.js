import React, { useState } from "react";

import "../styles/editprofile.css";

//Add event form
export default function EditProfileForm(props) {
  const { date_of_birth: dateOfBirth, email, name, id } = props.user.user;

  const [userName, setUserName] = useState(name);
  const [userEmail, setUserEmail] = useState(email);
  const [userDateOfBirth, setUserDateOfBirth] = useState(dateOfBirth);

  const newUserDateOfBirth = userDateOfBirth.slice(0, 10);

  const onChangeName = (e) => {
    e.preventDefault();
    setUserName(e.target.value);
  };
  const onChangeEmail = (e) => {
    e.preventDefault();
    setUserEmail(e.target.value);
  };
  const onChangeDateOfBirth = (e) => {
    e.preventDefault();
    setUserDateOfBirth(e.target.value);
  };

  return (
    <form method="POST" action={`/api/editprofile/${id}`}>
      <p>Name:</p>
      <input
        name="name"
        required
        placeholder="Enter name"
        onChange={onChangeName}
        value={userName}
      ></input>
      <p>Email</p>
      <input
        required
        name="email"
        placeholder="Enter email"
        onChange={onChangeEmail}
        value={userEmail}
      ></input>

      <p>date of birth</p>
      <input
        name="dob"
        required
        placeholder="Enter date of birth"
        onChange={onChangeDateOfBirth}
        value={newUserDateOfBirth}
      ></input>
      <br></br>
      <button className="edit-profile-form-btn" type="submit">
        {" "}
        Save changes
      </button>
    </form>
  );
}
