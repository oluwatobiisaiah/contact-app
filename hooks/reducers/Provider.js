import { createContext, useReducer } from "react";
import auth from "../initialStates/auth";
import contact from "../initialStates/contact";
import authReducer from "./auth";
import contactReducer from "./contact";


export const GlobalContext = createContext({})

const GlobalProvider = ({children})=>{
    const [authState,authDispatch] = useReducer(authReducer,auth)
    const [contactState,contactDispatch] = useReducer(contactReducer,contact)
    return(
        <GlobalContext.Provider value={{authState,contactState,authDispatch,contactDispatch}}>{children}</GlobalContext.Provider>
    )
}

export default GlobalProvider