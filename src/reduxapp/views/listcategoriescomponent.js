import React from 'react'

const ListCategoriesComponent = (props) => {
  
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
