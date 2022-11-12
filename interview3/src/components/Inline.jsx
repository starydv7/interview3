import React, {useEffect } from 'react'

const Inline = () => {
    useEffect(() => {
        let age = 25;
        let name = "Pawan";
        if (age > 26) {
            console.log("You are old");
        } else if(name === "Pawan" && age ===25) {
            console.log(`I am {age} years old`);
            console.log("Pawan is my Name");
            
        }
    
     
    }, [])
    
  return (
    <div></div>
  )
}

export default Inline