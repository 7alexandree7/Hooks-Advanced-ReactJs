import { useState } from "react";
import { ChangeNameContext } from "./ChangeNameContext";

export default function ContextProvider ({children}) {

    const [name, setName] = useState('UK Developer')


    return (
        <ChangeNameContext.Provider value={{name, setName}}>
            {children}
        </ChangeNameContext.Provider>
    )
}