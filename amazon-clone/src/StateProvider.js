import React, {createContext,useContext, useReducer} from  "react";

// Prepares the Data Layer


export const StateContext = createContext();



// Wraps the app to provide State to diff components
export const StateProvider  = ({reducer,initialState,children})=>(
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
);


// Pull the info from the Data Layer
export const useStateValue = () => useContext(StateContext);