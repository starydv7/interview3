import React from 'react';
import { useState } from 'react';
import axios from "axios";

const Form = () => {
    let details = { name: "", date: "", mobile: "", email: "", image: "", role: "" };
    const [data, setData] = useState({details});
    function submit(e) {
        e.preventDefault();
        axios
          .post("https://apipawan3.herokuapp.com/users", {
            name: data.name,
            date: data.date,
            mobile: data.mobile,
            email: data.email,
            image: data.image,
            role: data.role,
          })
          .then((res) => {
            console.log(res.data);
          });
  }
    function handle(e) {
        const newData = { ...data }
        newData[e.target.id] = e.target.value;
      setData(newData);
      // alert("data Successfully upload Thank You")
         console.log("PostData", newData);
  }
  

  return (
    <div className="maindiv">
      <div className='maindiv2'>
        <form onSubmit={(e) => submit(e)} className="form">
          <label>Name</label>
          <br />
          <input
            type="text"
            placeholder="Name"
            onChange={(e) => handle(e)}
            id="name"
            value={data.name}
          />
          <br />
          <br />
          <label>Avatar</label>
          <br />
          <input
            type="url"
            placeholder="Image Url"
            onChange={(e) => handle(e)}
            id="image"
            value={data.image}
          />
          <br />
          <label>Data</label>
          <br />
          <input
            type="date"
            placeholder="Date"
            onChange={(e) => handle(e)}
            id="date"
            value={data.date}
          />
          <br />
          <label>Title</label>
          <br />
          <input
            type="text"
            placeholder="Title..."
            onChange={(e) => handle(e)}
            id="title"
            value={data.name}
          />
          <br />
          <label>Mobile</label>
          <br />
          <input
            type="text"
            placeholder="Mobile..."
            onChange={(e) => handle(e)}
            id="mobile"
            value={data.mobile}
          />
          <br />
          <label>Email</label>
          <br />
          <input
            type="text"
            placeholder="Email..."
            onChange={(e) => handle(e)}
            id="email"
            value={data.email}
          />

          <br />
          <label>Role</label>
          <br />
          <input
            type="text"
            placeholder="Role..."
            onChange={(e) => handle(e)}
            id="role"
            value={data.role}
          />
          <br />
          <br />
          <button className="btntag">Save Data to API</button>
        </form>
      </div>
    </div>
  );
}

export default Form