import React from 'react'
import style from "../Style/Home.module.css"
const Home = () => {
  return (
    <div className={style.home} >
        <h3>Application Form </h3>
        <input type="email" placeholder='Enter Email..' />
        <input type="password" placeholder="Enter Password.." />
        <button>Submit</button>

    </div>
  )
}

export default Home