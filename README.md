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