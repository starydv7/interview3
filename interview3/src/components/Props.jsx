import React from 'react'
import { useState } from 'react'
import Child from './Child';

const Props = () => {
    const [name, setName] = useState("Pawan");
  return (
      <div>
          <Child name={name} />
          <button onClick={()=>setName("Yadav ji")}>Change Name</button>
    </div>
  )
}

export default Props