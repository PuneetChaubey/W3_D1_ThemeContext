import React, { useContext } from 'react'
import Login from './Login'
import style from "../Style/Navbar.module.css"
import { ThemeContext } from '../Context/ThemeContext'
const Navbar = () => {
    const {theme, setTheme} = useContext(ThemeContext)

  const changeTheme = ()=>{
    
    if(theme === "isLight"){
        setTheme("dark")
    }
    else {
        setTheme("isLight")
    }

  }
  console.log("inside",theme)
  return (
    <div className={style.navbar} >
       <h3> ThemeContext</h3>
        <Login/>
        <button onClick={()=>changeTheme()} >{ theme=== "isLight" ? "Make Dark": "Make Light" }</button>
    </div>
  )
}

export default Navbar