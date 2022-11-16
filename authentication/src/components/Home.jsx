import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Home = () => {
  const [data, setData] = useState([]);
  // const getData =()=>{
  //     axios
  //       .get("https://apipawan3.herokuapp.com/users")
  //       .then((res) => {
  //         console.log(res.data);
  //         setData(res.data);
  //       });
  // }
  const getData = () => {
    fetch("https://apipawan3.herokuapp.com/users")
    .then((res) => res.json())
      .then((result) => {
        setData(result);
    })
  }
  useEffect(() => {
    getData();
  }, [])
  
  return (
    <div>
      {data.map((item)=> {
        <div key={item.id}>
          <p>{item.name}</p>
        </div>;
         
      })}
    </div>
  )
}

export default Home