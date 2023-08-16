/* configure a store to make sure that, the reducer will be used to mutate it based on actions. 
The store will be loaded at application level, so that all components will work under it
*/

import { configureStore } from "@reduxjs/toolkit";

import { categoriesReducer } from "../reducers";

export const store = configureStore({
    reducer:categoriesReducer
});