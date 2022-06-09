import  {createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({children})=>{
const [theme, setTheme] = useState("isLight")



return <ThemeContext.Provider value={{theme, setTheme}} >{children}</ThemeContext.Provider>

}