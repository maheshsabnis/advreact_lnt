import { createAction } from "@reduxjs/toolkit";
import { ADD_CATEGORY } from "../constants";

/* An Action Creator that will be dispoatched
 from UI. This returns the Payload. The FirstParameter of creaetAction is the action type that will be monitored by the reducer to decide How that state will be updated 
*/
export const addCategory=createAction(ADD_CATEGORY, (category)=>{
    /* LOGIC */
    category.CategoryName = category.CategoryName.toUpperCase();
    return {
        payload:category
    }
});
