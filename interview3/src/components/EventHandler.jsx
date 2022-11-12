import React, { useState } from 'react'

const EventHandler = () => {
    const [num12, setNum1] = useState(0);
    const getInput = (e) => {
        console.log(e.target.value);

    }
    const addNum = (num1, num2) => {
        console.log(num1 + num2);
        setNum1(num1 + num2);
    }
  return (
      <div>
          <h3>{num12}</h3>
          <input placeholder='add something..'
              onChange={getInput} />
          <button onClick={()=>addNum(414,2541)}>Add Number </button>
    </div>
  )
}

export default EventHandler