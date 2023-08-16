import React, { useState } from 'react'

import MousemoveComponent from './mousemovecomponent';

const ToggleComponent = () => {
  const [show,canShow] = useState(true); 
  return (
    <div className='container'>
       <h2>The Toggle Component</h2>
       <button className='btn btn-danger'
         onClick={()=>canShow(!show)}
       >Toggle</button>
       {
        show && <MousemoveComponent></MousemoveComponent> 
       }

       <div>
          <strong>
              Still in Toggle Component
          </strong>
       </div>
    </div>
  )
}

export default ToggleComponent
