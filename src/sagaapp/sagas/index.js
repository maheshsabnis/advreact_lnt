/* Import SAGA Effects */

import {takeLatest, all, call, put} from 'redux-saga/effects';

import { GET_CATEGORIES,GET_CATEGORIES_SUCCESS,ADD_CATEGORY,ADD_CATEGORY_SUCCESS } from '../constants';

import { getCategoriesSuccess, addCategorySuccess } from '../actions';

/* import the service that contains external HTTP calls */

import { CategoryService } from "../services";

function  getCategories(){
    let serv = new CategoryService();
    /* make an async call and get the resolved data */
    const response = serv.getCategories().then((result)=>result.data);
    /* Bundle thedata into the Promise.resolve() so that caller can start reading it */
    return Promise.resolve(response);
}

function addCategory(category){
    let serv = new CategoryService();
    const response = serv.postCategory(category).then((result)=>result.data);
    return Promise.resolve(response);
}


/* saga generator functions*/

function* getCategoriesOutputAction(){
    try {
        /* Invoke an async calls ang get data  */
        const response = yield call(getCategories);
        /* dispatch an output action */
        yield put(getCategoriesSuccess(response, 'Categories Data is received successfuly'));
    }catch(ex){
        
    }
}
function* getCategoriesInputAction(){
    /* Listen to GET_CATEGORIES action dispatched and linkm it with the output action*/
    yield takeLatest(GET_CATEGORIES, getCategoriesOutputAction);
}
/* The ACTION type returned by the action that is associated with the ADD_CATEGORY  */
function* addCategoryOutputAction(action){
    try {
        /* the 'action.payload' contains data that is returned by an action creator */
        const response = yield call(addCategory, action.payload);
        /* Output action will be dispatched */
        yield put(addCategorySuccess(response, 'Category is added successfully'));
    }catch(ex){

    }
}
function* addCategoryInputAction(){
    /* The ADD_CATEGORY pattern will provide the payload to the SAGA */
    yield takeLatest(ADD_CATEGORY, addCategoryOutputAction);
}


/* a root saga that will be responsible to aggrigate all generatots */

export default function* rootSaga(){
    yield all([getCategoriesInputAction(), addCategoryInputAction()]);
}


