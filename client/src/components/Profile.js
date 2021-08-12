import React from "react";
import { useHistory } from "react-router-dom";
import "../styles/profile.css";

export default function Profile(props) {
  const history = useHistory();

  const goToProfileForm = (e) => {
    e.preventDefault();
    history.push("/editprofile");
  };

  if (props.user.user === undefined) {
    return <h1>Loading...</h1>;
  } else {
    let { date_of_birth, email, name } = props.user.user;

    if (date_of_birth !== undefined) {
      date_of_birth = date_of_birth.slice(0, 10);
    }
    const parsedDate = new Date(date_of_birth);

    return (
      <div>
      <div className="card profileCard">
        <p><i className="fas fa-user-circle fa-6x"></i></p>
        <p style={{ color: "white" }}>Name: {name}</p>
        <p style={{ color: "white" }}>Email: {email}</p>
        <p style={{ color: "white" }}>Date of Birth: {parsedDate.toDateString()}</p>
        <br/>
        </div>
        <button className="edit-profile-btn" onClick={goToProfileForm}>
          Edit Profile
        </button>
        </div>
    );
  }
}
