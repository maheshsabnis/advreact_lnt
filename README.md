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


