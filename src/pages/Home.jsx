import React, { useEffect } from "react";
import axios from "axios";
import Link from "react-router-dom";

function Home() {
  async function fetchUsers() {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    console.log(data);
  }
  useEffect(() => {
    fetchUsers();
  }, []);
  return <h1>Home</h1>;
}

export default Home;
