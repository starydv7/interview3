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
    <>
      <div>
        {data.map((el) => (
          <div key={el.id} className="result">
            ID:{el.id}
            <p> Name:{el.name}</p>
            <p>Contact:{el.mobile}</p>
            <p>Role:{el.role}</p>
            <p>Email:{el.email}</p>
            <img src={el.image} alt="photos" style={{borderRadius:"10px",height:"100px",width:"100px"}} />
          </div>
        ))}
      </div>
    </>
  );
}

export default Home