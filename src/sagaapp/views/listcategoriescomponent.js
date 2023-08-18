import React, {useEffect} from 'react';

import { useDispatch, useSelector } from 'react-redux';
import {getCategories} from './../actions';

const ListCategoriesComponent = (props) => {

  /* Recived the cached callback execution from the parent */
   
  useEffect(()=>{
     props.getData({...props.categories});
  },[]);
  
  
  if(props.categories === undefined || props.categories.length === 0) {
    return (
        <div className='alert alert-danger'>
            <strong>
                No Data to Show
            </strong>
        </div>
      )
  }  
  return (
    <div className='container'>
       <h1>List of Categories</h1>
       <table className='table table-bordered table-striped'>
         <thead className='table-dark'>
             <tr>
                <th>Category Id</th>
                <th>Category Name</th>
                <th>Base Price</th>
             </tr>
         </thead>
         <tbody className='table-warning'>
            {
                props.categories.map((cat,index)=>(
                    <tr key={index}>
                        <td>{cat.CategoryId}</td>
                        <td>{cat.CategoryName}</td>
                        <td>{cat.BasePrice}</td>
                    </tr>
                ))
            }
         </tbody>
       </table>
    </div>
  )
}

export default ListCategoriesComponent
