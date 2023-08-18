import { createReducer } from "@reduxjs/toolkit";

import { ADD_CATEGORY,ADD_CATEGORY_SUCCESS,GET_CATEGORIES,GET_CATEGORIES_SUCCESS } from "../constants";

import { initalState } from "../state";

export const categoryReducer = createReducer(initalState, (builder)=>{
    /* cases for listening actions 
      either dispatched from UI or from SAGA
    */

    builder
        .addCase(GET_CATEGORIES,(state,action)=>{
            state.categories =[]; /* state will be empty */
            state.message = action.payload;
        })
        .addCase(GET_CATEGORIES_SUCCESS,(state,action)=>{
            state.categories = action.payload.categories; /* data received from the action dispatched by SAGA */
            state.message = action.payload.msg
        })
        .addCase(ADD_CATEGORY,(state,action)=>{
            state.category = action.payload
        })
        .addCase(ADD_CATEGORY_SUCCESS,(state,action)=>{
            /* PUSH data to categories array */
            state.categories.push(action.payload.category);
            state.message = action.payload.msg
        });  

}); 