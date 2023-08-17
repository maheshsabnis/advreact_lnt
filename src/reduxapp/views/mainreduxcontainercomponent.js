import React from 'react'
import AddCategoryComponent from './addcategorycomponent';
import ListCategoriesComponent from './listcategoriescomponent';

import {  useSelector } from 'react-redux/es/hooks/useSelector';

const MainReduxComponent = () => {
    /* Subscribe to store to get the data from it */

    const cats = useSelector(state=>state.categories);
    /* Logic to filter */

  return (
    <div className='container'>
        <AddCategoryComponent></AddCategoryComponent>
        <hr/>
        <ListCategoriesComponent
          categories={cats}
        ></ListCategoriesComponent>
    </div>
  )
}

export default MainReduxComponent;
