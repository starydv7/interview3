import React, {useState ,useEffect} from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
    const add = () => {
        setCount(count + 1);
        console.log(count);
    }
     const minus = () => {
       setCount(count - 1);
       console.log(count);
     };
    useEffect(() => {
      add();
      minus();
    },[]);
    
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={add}>Add</button>
      <button onClick={minus}>Minus</button>
    </div>
  );
}

export default Counter