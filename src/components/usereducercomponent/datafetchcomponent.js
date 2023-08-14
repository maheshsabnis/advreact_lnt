import React,{useReducer, useEffect} from 'react'
import axios from 'axios';
/* Define a State */

let initalState = {
    records:[],
    currentState:'',
    error:''
};

/* Define a Reducer Function */
/* a JAVASCRIPT Pure function that accepts 
1. an initial State and 
2. the action being dispatch
    - dispatch is a complex type that has a property named 'type'
    - The 'type' property repreesnts the type of action that is dispatched
    - The 'payload' property of action, represents the data that is to be updated in state
an return the modified state (if any)
*/

function reducer(state, action){
  /* Write a logic that will handle the dispatched actions and accordingly update the state and return is  */

  switch(action.type){
    case 'DATE_FETCH_STARTED':
         return {...state, currentState:'call initiated', error:''};
         
    case 'DATA_FETCH_SUCCESSFUL':
        return {
            ...state,
            records: action.payload,
            currentState:'call is completed successfully', error:''
        };
    case 'DATA_FETCH_FAILED':
        return {
            ...state,
            currentState:'call is failed', error: `Some Error Occurred ${action.payload}`
        };          
    default:
        return state;      
  }
}



/* Create a Hook That will be using the useReducer to mnage the state updates */
const useAsyncStateUpdate=(url)=>{
    /* Define a useReducer hook type that will initialize the reducer and based on which the updates state will be fetched  */
    /* data: the state that being updated based on the action that is dispatched */
    const [data, dispatch] = useReducer(reducer,initalState);

    useEffect(()=>{
      dispatch({type: 'DATE_FETCH_STARTED'});
      
      /* make call */
      axios.get(url)
           .then((data)=>{
             /* Success Action */
             dispatch({type:'DATA_FETCH_SUCCESSFUL', payload:data});
           }).catch((error)=>{
            dispatch({type:'DATA_FETCH_FAILED', payload:error.messasge});
           }) 
    },[]);
    /* The Updated state will be returned based on useReducer */
    return data;


}
/* The Component */
const DataFetchComponent = () => {
  const state = useAsyncStateUpdate('https://catprdapi.azurewebsites.net/api/Category'); 
  if(state === undefined) {
    return (
        <div className='alert alert-danger'>
            <strong>
                No Data to Display
            </strong>
        </div>
    );
  }
  
  return (
    <div className='alert alert-warning'>
          {
            JSON.stringify(state)
          }  
    </div>
  )
}

export default DataFetchComponent;
