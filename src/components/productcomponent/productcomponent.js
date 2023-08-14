import React,{useState} from 'react'
import SelectComponent from '../reusablecomponents/selectcomponent';

import { DataContext } from '../datacontext';

const ProductComponent = () => {
 const [product, setProduct] = useState({
    ProductId:0,ProductName:'',CategoryName:'',Manufacturer:'', Price:0
 });
 
 const [products, setProducts] = useState([]);

 const categories = ['Electronics', 'Electrical', 'Home', 'Fashion'];

 const manufacturers = ['TATA', 'Bajaj', 'Philipse', 'HP'];
 
 const clear=()=>{
    setProduct({
        ProductId:0,ProductName:'',CategoryName:'',Manufacturer:'', Price:0
     });
 }

 const save=()=>{
    // an array will be mutated with new Product object pushed in it 
     setProducts([...products,product]);
 };

 const setCat=(val)=>{
    setProduct({...product, CategoryName:val});
 }

 const setMan=(val)=>{
    setProduct({...product, Manufacturer:val});
 }


return (
    <div className='container'>
        <h1>Product Form</h1>
        <div className='form-group'>
            <label>Product Id</label>
            <input type="text" className='form-control'
              value={product.ProductId}
              onChange={(evt)=>setProduct({...product, ProductId:parseInt(evt.target.value)})}
            />
        </div>
        <div className='form-group'>
            <label>Product Name</label>
            <input type="text" className='form-control'
              value={product.ProductName}
              onChange={(evt)=>setProduct({...product, ProductName:evt.target.value})}
            />
        </div>
        <div className='form-group'>
            <label>Category Name</label>
            <DataContext.Provider
             value={{categories,setCat}}>
                 <SelectComponent></SelectComponent>
            </DataContext.Provider>
           
            {/* <select className='form-control'
              value={product.CategoryName}
              onChange={(evt)=>setProduct({...product, CategoryName:evt.target.value})}
            >
                 <option>Select Category</option>
                {
                    categories.map((cat,idx)=>(
                        <option key={idx} value={cat}>{cat}</option>
                    ))
                }

            </select> */}
        </div>

        <div className='form-group'>
            <label>Manufacturer Name</label>
            <DataContext.Provider value={{manufacturers, setMan}}>
             <SelectComponent></SelectComponent>
            </DataContext.Provider>
            
            {/* <select className='form-control'
              value={product.Manufacturer}
              onChange={(evt)=>setProduct({...product, Manufacturer:evt.target.value})}
            >
                <option>Select Manufacturere</option>
                {
                    manufacturers.map((man,idx)=>(
                        <option key={idx} value={man}>{man}</option>
                    ))
                }
            </select> */}
        </div>

        <div className='form-group'>
            <label>Price</label>
            <input type="text" className='form-control'
              value={product.Price}
              onChange={(evt)=>setProduct({...product, Price:parseInt(evt.target.value)})}
            />
        </div>
        <div className='btn-group-lg'>
            <button className='btn btn-warning'
              onClick={clear}
            >Clear</button>
            <button className='btn btn-success'
             onClick={save}
            >Save</button>
        </div>
        <hr/>
        {
            JSON.stringify(products)
        }
    </div>
  )
}

export default ProductComponent;
