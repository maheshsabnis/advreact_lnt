import React, { useEffect, useState } from 'react'

const MousemoveComponent = () => {
  const [x,setX] = useState(0);  
  const [y,setY] = useState(0);  

  const getPosition=(evt)=>{
     setX(evt.clientX);
     setY(evt.clientY);
     console.log(`x position = ${x} and y position = {y}`);
  };

  useEffect(()=>{
    /* Global Registered Event */
      window.addEventListener('mousemove', getPosition);  
      return ()=>{
        /* UnRegister the Global Event on UnMount  */
        window.removeEventListener('mousemove', getPosition);  
      }
  });



  return (
    <div className='container'>
      
         X Position =  : {x} && Y Position : {y}
          
    </div>
  )
}

export default MousemoveComponent
