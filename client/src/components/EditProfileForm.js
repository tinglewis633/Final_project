import axios from "axios";
import React, { useEffect,useRef,useState } from "react";
import { useHistory } from "react-router-dom";

//Add event form
export default function EditProfileForm(props) {

  
  
  const { date_of_birth:dateOfBirth, email, name } = props.user.user;

  const [userName, setUserName] = useState(name);
  const [userEmail, setUserEmail] = useState(email);
  const [userDateOfBirth, setUserDateOfBirth] = useState(dateOfBirth);

  
  const history = useHistory();
    
  // function stringifyFormData(fd) {
  //   const data = {};
  //   console.log("fd is:", fd);
  //   for (let key of fd.keys()) {
  //     data[key] = fd.get(key);
  //   }
  //   return JSON.stringify(data, null, 2);
  // }
  // const form = useRef(null);
  
  const handleSubmit = (e) => {
        // history.push("/profile")
    // })// axios.post("/api/editform").then(() =>
    // {
    // 

    e.preventDefault();
    const data = new FormData();
    data.append('name', "sakaaaasas");

    const formData = JSON.stringify(data);
    // console.log("data is: ", data)
    // console.log("FORMDDATA", formData)
    // console.log("value:", e.target.name.value);

    // const formVal = {
    //   username: userName,
    //   useremail: userEmail,
    //   dob: userDateOfBirth
    // }
  
    console.log(formData);
    console.log(data);


    axios({
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        // headers: {'content-type' : 'application/json'},
        method: 'post',
        url: '/api/editprofile',
      data: formData,
    })

    //  axios.post('/api/editprofile', {
    //     params: {
    //       ID: 12345
    //   }
    // })

    // const data = new FormData(form.current)
    // fetch('/api/editprofile', {
    //   method: 'POST',
    //   body: data,
    // })

    
    // fetch('/api/editprofile', {
    //   method: 'POST',
    //   body: formVal,
    // });
  }
  const onChangeName = (e) => {
    e.preventDefault();
    setUserName(e.target.value)
  }
  const onChangeEmail = (e) => {
    e.preventDefault();
    setUserEmail(e.target.value)
  }
  const onChangeDateOfBirth = (e) => {
    e.preventDefault();
    setUserDateOfBirth(e.target.value)
  }

 
  
  return (
   <form onSubmit={handleSubmit} > 
      <p>Name:</p>
      <input name="name" required placeholder="Enter name" onChange={onChangeName} value={userName} ></input>
      <p>Email</p>
      <input required name="email" placeholder="Enter email" onChange={onChangeEmail}value={userEmail}></input>

      <p>date of birth</p>
      <input name="dob" required placeholder="Enter date of birth" onChange={onChangeDateOfBirth} value={userDateOfBirth}></input>

      <button type="submit">    Save
      </button>
      </form>
  
  );
}
