import { createAction } from "@reduxjs/toolkit";

import { ADD_CATEGORY, ADD_CATEGORY_SUCCESS, GET_CATEGORIES, GET_CATEGORIES_SUCCESS } from "../constants";
/* This will be dispatched from UI and Reducer will monitor it */
export const getCategories = createAction(GET_CATEGORIES, (msg)=>{
    return {
        payload: msg 
    };
});
/* This will be dispatched by the SAGA Middleware and then Reducer will listen to it to make updates in store */
export const getCategoriesSuccess = createAction(GET_CATEGORIES_SUCCESS,(categories, msg)=>{
    return {
        payload:{
            categories,
            msg
        }
    }
});

export const addCategory=createAction(ADD_CATEGORY,(category)=>{
    return {
        payload: category
    }
});

export const addCategorySuccess=createAction(ADD_CATEGORY_SUCCESS,(category,msg)=>{
    return {
        payload: {
            category,
            msg
        }
    }
});

