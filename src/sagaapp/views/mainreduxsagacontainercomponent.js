import React, { useCallback } from 'react'
import AddCategoryComponent from './addcategorycomponent';
import ListCategoriesComponent from './listcategoriescomponent';
 
import {  useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
import { getCategories } from '../actions';

const MainReduxSagaComponent = () => {
    /* Subscribe to store to get the data from it */

    const cats = useSelector(state=>state.categories);
  
    const dispatch = useDispatch();

    /* use the 'useCallback()' hook that will be once dispatching the action and then cache it, once the current component is reloaded, it will be again call once  */

    /* for reloading of the current component, the dispatch will change and hence the useCallback() will dispatch the getCategories() action once and will mutate data in store based on the action-reducer-middleware exection */
    const getRemoteData = useCallback(
      (state)=>dispatch(getCategories('Call initiated')), 
      [dispatch]
    );

  return (
    <div className='container'>
        <AddCategoryComponent></AddCategoryComponent>
        <hr/>
        <ListCategoriesComponent
          categories={cats}
          getData={getRemoteData}
        ></ListCategoriesComponent>
    </div>
  )
}

export default MainReduxSagaComponent;
