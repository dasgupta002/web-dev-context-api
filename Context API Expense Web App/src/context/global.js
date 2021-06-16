import React, { createContext, useReducer } from "react";
import { appreducer } from "./reducer";

const initialstate = {
    transactions: []
};

export const Context = createContext(initialstate);

export const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(appreducer, initialstate);

    function deletepay(id) {
        dispatch({
            type: "DELETE",
            payload: id
        });
    }
    
    function addpay(pay) {
        dispatch({
            type: "ADD",
            payload: pay
        });
    }
    
    return(<Context.Provider value = {{ transactions: state.transactions, deletepay, addpay  }}>{ children }</Context.Provider>);
};