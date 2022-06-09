import React , { useContext } from "react"
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import { ThemeContext } from './Context/ThemeContext'
import style from "./Style/Theme.module.css"

function App() {

  const {theme}= useContext(ThemeContext)

  return (
    <div className= {`App ${theme=== "isLight"? style.light: style.dark}`}>
     <Navbar/>
     <Home/>
    </div>
  );
}

export default App;
