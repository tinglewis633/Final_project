import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  useEffect(() => {
    axios.get("http://localhost:3002/api/data").then((res) => {
      console.log("GETTING DATA");
      console.log(res);
    });
  }, []);

  return <h1>hi</h1>;
}

export default App;
