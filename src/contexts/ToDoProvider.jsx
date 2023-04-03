import { createContext } from "react";

export const todoContext = createContext();


export const ToDoProvider =  (props) => {
    return(
<todoContext.Provider value={undefined}>
    {props.children}</todoContext.Provider>
    );
};

