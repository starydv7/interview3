import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Home = () => {
  const [data, setData] = useState([]);
  const getData =()=>{
      axios
        .get("https://apipawan3.herokuapp.com/users")
        .then((res) => {
          console.log(res.data);
          setData(res.data);
        });
  }
  useEffect(() => {
    getData();
  }, [])
  
  return (
    <div>Home</div>
  )
}

export default Home