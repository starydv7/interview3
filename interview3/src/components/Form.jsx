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
        setData(newData)
        console.log("PsotData", newData);
    }

  return (
    <div>
      <form onSubmit={(e) => submit(e)}>
        <label>Name</label>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => handle(e)}
          id="name"
          value={data.name}
        />
        <br />
        <label>Avatar</label>
        <input
          type="url"
          placeholder="Image Url"
          onChange={(e) => handle(e)}
          id="image"
          value={data.image}
        />
        <br />
        <label>Data</label>
        <input
          type="date"
          placeholder="Date"
          onChange={(e) => handle(e)}
          id="date"
          value={data.date}
        />
        <br />
        <label>Title</label>
        <input
          type="text"
          placeholder="Title..."
          onChange={(e) => handle(e)}
          id="title"
          value={data.name}
        />
        <br />
        <label>Mobile</label>
        <input
          type="text"
          placeholder="Mobile..."
          onChange={(e) => handle(e)}
          id="mobile"
          value={data.mobile}
        />
        <br />
        <label>Email</label>
        <input
          type="text"
          placeholder="Email..."
          onChange={(e) => handle(e)}
          id="email"
          value={data.email}
        />

        <br />
        <input
          type="text"
          placeholder="Role..."
          onChange={(e) => handle(e)}
          id="role"
          value={data.role}
        />
        <button>Save Data to API</button>
      </form>
    </div>
  );
}

export default Form