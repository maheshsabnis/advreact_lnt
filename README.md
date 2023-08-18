# Sharing Data

- The 'props'
    - an imutable object
    - live on the UI Thread (MOUNTING-PROCESS) thriuougt the React App

- The React's Best Practices for Component Creations
    - Think of Reusability and the approach of passing data from parent-to-child and child-back-to-parent
    - Data Properties those are responsible to carry the the data across components
    - Behavior (methods those are to be bound with events) used for emitting data from child to parent

# Hooks
    - JS Functions those are invoked at component level only (and not inside any other function inside the component)

    - useState()
        - USed to define a component's state
        - Define a Dispath action that will update the state
    - useContext()
    - useEffect(()=>{
        ...DiD MOUNT Logic
        returm ()=>{
            UnMount Logic
        }
    },[])
    - useReducer()
        - If the state is complex(?)
            - The state is dependant on some extarnal calls based on which it will be updated, then to define a state transition, we can use 'useReducer()' instead of useState()
````javascript
    let stateObject = {
        data:[], /* Actual data in state taht will be updated */
        loading:'', /* Intilaization of external HTTP/Socket call to fetch data */
        error: '' /* the failure of the call */
    }
````

    - useMemo()
    - useCallback()
    - ... and many more

- React.Context object
    - USed to communicate data across Parent-Child Related Components
    - The Data will be maintained from Parent-to-Specific Child
    - The 'createContext()'
        - The funciton, used to define a shcema of the data that is used to share 'Values' and 'Behavior' across components
    - React.Context
        - Provider
            - Used by the Parent to pass 'data' and 'action' from parent to child 
                - The 'data' is values to be passed to chidl for rendering
                - The 'action', the event to be listed from child to parent
                    - This action is a reason to update state in parent
        - Consumer        
            - USed to subscribe to the data received from the parent
            - the 'useEffect()' hook  

# Readux

- Conceptual Object Model
    - The 'store'
        - State Container
    - The 'action'
        - The 'what happenedd on View?', a logic that will be called based on an event
````javascript
     export const myaction=(input)=>{
        /* SOME LOGIC */
        return {
            type: 'ACTION_TYPE',
            payload
        }
     }
     function myaction1(){
        /* SOME LOGIC */
        return {
            type: 'ACTION_TYPE',
            payload
        }
     }
````
    - The 'reducer'
        - The 'JS Pure function'
        - Excute at Global Level, contineously monitor each action that is dispatched either from UI or once the Action-Creator (the logic taht is either sync/ async) is executed
        - Decide how the state will be updated
        - Input parameters are 'initialState' and 'action'
        - Output parameter as the 'updated/modified state' 
````javascript
    export const reducer=(initialState, action)=>{
        switch(action.type){
            case 'ACTION_TYPE':
                 return {state};    
        }
    }

    function myreducer1(state,action) {}
    function myreducer2(state,action) {}
````
    - Flexible 
        - To share data across any UI layer with large and extensible UI Eco-System
    - Centralized Data State
        - Preducatble State for Subscription
        - All UI can directly subscribe to store and perform Read/Write operations     

- redux
    - Base object Model for app state mnagement for JS Apps 
    - mapDispatchToProps()
        - A Function Object that is responsible to map 'props' (properties, methods) to the dispatch, the dispatch is the object that is used to dispatch an action initiated from view
    - mapStateToProps()
        - A function object, that is used to provide the 'store' subscription to a component so that component read the state from the store anf show it on View using the 'props' 
    - combineReducers()
        - A facade to interact with multiple reducers at a time
        - An objetc that aggrigates all reducers to manipulate state in store         
- react-redux            
    - connect()
        - A function object that connect the React-Component with 'store'
    - Provider
        - A React.Node (a DOM tree element) that loads store at react application level so that all components can access it     
- react-redux V4+
    - useDispatch() 
        - a replacement of 'mapDispatchToProps'
        - used to dispath an action from the Component
    - useSelector()
        - a replacement of 'mapStateToProps'
        - used to query to store to get the data from store
    - No need for 'connect()'   

- Redux Toolkit
    - Simple
        - configureStore()
        - createAction()
        - createReducer()
        - createSlice()
    - Powerful
        - Working with standard coding practices for state mutation
        - Easy to wok on Logic building when it require to work with sync and async codes
    - Effective
        - Literally less code
    - Opinionated
        - Integrate with redux addons effectively w.r.t. browsers
- Implementatoin
    - folder structure
        - views / components
            - All UI Components
        - actions
            - all actions
            - input and output actions 
        - reducers
            - A Reducer object
            - with cases of execution for each dispatched action
        - enums /  constants
            - Action Types, used by action and reducer
        - state
            - Schema of data that will be present in the store
        - store         
            - The Application State that will be configured based on following
                - reducers
                - middlewares
    - packages
        - redux
        - react-redux
        - @reduxjs/toolkit                


# Using SAGA Middleware

- An object that will have 'generator' functions. These functions will be handling all resource intensive operations and based on the state of execution, the action(s) will be dispatched

- redux-saga
    - @redux-saga/core
        - The 'createSagaMiddleare()' function object
        - This will load the SAGA middleware object at root level for store configuration
        - This provides a 'run()' method, to continuouesly keep the middleware running at applciation level so that when an action is dispatched the necessary exceution can be taken place  
    - redux-saga/effects
        - A module that offers operator methods for monitoring and performing resource intensive operations
        - take(), takeLatest(), takeOne()
            - Listen to actions those are dispatched and then start performing necessary execution on them    
        - call()
            - Invokes an async operation
            - This is also a generator that 'yield' the result
                - start, read (current), return (yield  and moveNext()), moveNext()    
                - yield call(getData);, return a single response type
                - getDataFromServeres()
                    - Internally making multiple Async calls and returning a composite result
                - yield call(getDataFromServeres)  
                - yield call(getData1);
                - yield call(getData2);       
````javascript
    let names = ['A','B','C'];
    // of: symbol.Iterator
    for(let n of names){
    }
````
        - put()
            - Iterator based method
            - Based on the execution of call() the result will be yielded
            - In redux-saga, this is used for dispatching the output action 
                - yield put(getResultsSuccess(result))
        - all()
            - a generator function object that will be responsible for providing the input action dispatch listeners so that they can be linked with their corresponsding outputactions
````javascript
    /*
      parameters: the payload that is retiurned by the input action
    */
    function* outputListener(parameters){
         const result = yield call(RESOURCE_INTENSIVE_OPERATION_CALLBACK, parameters);

         yield put(OUTPUT_ACTION(result));

    }
    function* inputListener(){
        yield takeLatest('INPUT_ACTION_TYPE', outputListener);
    }

    function* rootSaga(){
        /* the collection of all input dispatcher those will be loaded on root to listen each dispatched action */
        yield all([inputListener()]);
    }

````

- Once the middleware is configured for the Redux app, the store MUST be using it so that side-effect methods once dispatched will be monitored by middleware and then the long-running async calls will be caompleted and whetever the respons data will be mutated into the store
    - @redux-saga/core package
        - The 'craeteSagaMiddleware()'
            - create a Middlewate Configuration object that will be used by the store
            - This provides a 'run()' method to make sure that the middleware is running at global level

- Practices to be followed while using the Middleware in Redux app for managing Store Subscription and Dispatch from the View
    - Make sure that the view which is dispatching should also manage subscription. THis is provide the implementation consistency.
    - The Parent if it is dispatching an action and subscribing the store, then if the child component wants the data from the store let the parent component provide a memoized value / callback to the child so that the child will not necessrilily have any subscription or dispach      

    - Make a use of 'useCallback()' hook, this will manage the memoization caching a value so that it will not be recalculated again and again and hence will provide a performance optimization to the component and hence to the mopunting
        - THis is useful to isolate resource intensice function  for runing it frequently or automatically during mouning of the component
        - The useCallback () hook only runs when one of its depednencies is updated
        - Hence this is performance improvization factor of React app
    - useMemo()
        - This is for memoized value whjere as useCallback() is for memoized function                 