import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search_icon.png'
import basket_icon from '../../assets/basket_icon.png'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../Context/StoreContext'

const Navbar = ({ setShowLogin }) => {

  const [menu, setMenu] = useState("menu");

  const { getTotalCartAmount } = useContext(StoreContext)

  return (
    <div className='Navbar'>
      <Link to='/'><img src={logo} alt="logo" className="logo" /></Link>

      <ul className="navbar-menu">
        <Link to='/' onClick={() => setMenu("Home")} className={menu === "Home" ? "active" : ""}>Home</Link>
        <a href='#explore-Menu' onClick={() => setMenu("Menu")} className={menu === "Menu" ? "active" : ""}>Menu</a>
        <a href='#app-download' onClick={() => setMenu("mobile App")} className={menu === "mobile App" ? "active" : ""}>Mobile App</a>
        <a href='#footer' onClick={() => setMenu("contact us")} className={menu === "contact us" ? "active" : ""}>Contact Us</a>
      </ul>


      <div className="navbar-right">
        <img src={search_icon} alt="search" />
        <div className="navbar-basket">
          <Link to='/cart'><img src={basket_icon} alt="basket" className="basket" /></Link>
          <div className={getTotalCartAmount() === 0 ? " " : "dot"}></div>
        </div>
        <button onClick={() => setShowLogin(true)} >Sign in</button>

      </div>
    </div>
  )
}

export default Navbar
