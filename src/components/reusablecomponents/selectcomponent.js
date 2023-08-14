import React, {useContext} from 'react'

import { DataContext } from '../datacontext'


const SelectComponent = () => {
    
    /* 1. Subscribe to the context*/
  let consumer = useContext(DataContext);

  /* 2. Read Data and Dispatch Action Seperately */
   /* 2.a. Read data*/ 
  let dataSource = consumer[Object.keys(consumer)[0]]; // array

  /* 2.b. read dispatchb action */
  let event = consumer[Object.keys(consumer)[1]];
  

  /* lets create a fallback if the dataSource is invalid */

  if(dataSource === undefined || dataSource.length === 0) {
    return (
        <div className='alert alert-danger'>
            <strong>
                No data to show
            </strong>
        </div>
    )
  }
  return (
    <div className='contianer'>
        <select className='form-control'
          onChange={(evt)=>event(evt.target.value)}
        >
            <option>Select Data</option>
            {
                dataSource.map((record,index)=>(
                    <option key={index} value={record}>{record}</option>
                ))
            }
        </select>
    </div>
  )
}

export default SelectComponent
