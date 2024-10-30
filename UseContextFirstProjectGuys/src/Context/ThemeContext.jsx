import { createContext, useState } from "react";

export const ThemeContext =  createContext()
export const ThemeProvider = ({children}) => {

    const [theme, setTheme] = useState('light');

    const toogleMode = () => {
        setTheme(theme == 'light' ? 'dark' : 'light')
    }


    return (
        <ThemeContext.Provider value={{theme, toogleMode}}>{children}</ThemeContext.Provider>
    )

}