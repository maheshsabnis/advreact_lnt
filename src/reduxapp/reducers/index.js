/* define a reducer to set the rule for updating the state based on an action thsi is being dispatched */

import { createReducer } from "@reduxjs/toolkit";
import { initialState } from "../state";
import { ADD_CATEGORY } from "../constants";

export const categoriesReducer = createReducer(initialState, (builder)=>{
    /* Reducer Logic */
    /* Parameter 1: ACTION CREATOR TYPE refer index.js in actions folder 
      Parameter 2: the complex object of the type 'initialState', 'action' so that the payload can be read from it 
    */
    builder.addCase(ADD_CATEGORY, (state,action)=>{
        /* Mutate the state by adding the newly created category into the state of the store */
       /*  DO not do this [...state.categories, action.payload] 
         the state is not iteratable
       */     
        state.categories.push(action.payload);
    });
});