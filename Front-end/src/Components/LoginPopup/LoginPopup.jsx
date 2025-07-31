import React, { useState } from 'react'
import './LoginPopus.css'
import cross_icon from '../../assets/cross_icon.png'

const LoginPopup = ({setShowLogin}) => {

    const [CurrState,setCurrState] = useState("Login")

  return (
    <div className='login-popup'>
      <form className="login-popup-container">
        <div className="login-popup-title">
            <h2> {CurrState} </h2>
            <img onClick={()=>setShowLogin(false)} src={cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
          {CurrState==="Login"?<></>:<input type="text" placeholder='Your name' required />}
          
          <input type="email" placeholder='Your email' required />
          <input type="password" placeholder='Your password' required />
        </div>
        <button>{CurrState==="Sign up"?"Create account":"Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required/>
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
        {CurrState==="Login"
        ?<p>Create a new account ? <span onClick={()=>setCurrState("Sign up")}> Click here </span ></p>
        :<p>Already have an account ? <span onClick={()=>setCurrState("Login")}> Login here </span ></p>
        }
        
      </form>
    </div>
  )
}

export default LoginPopup

