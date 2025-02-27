import "./Header.css"
import React from 'react'
import { Link } from 'react-router-dom'
import Button from "../Button/Button"

const Header = () => {
  return (
     <div className="Header">
        <Link to="/" className="Header-Logo">Plant</Link>

        <div className="Header-Links">
            <Link className="Header-Link" to="/">Home</Link>
            <Link className="Header-Link" to="/">Services</Link>
            <Link className="Header-Link" to="/">About Us</Link>
            <Link className="Header-Link" to="/">Blog</Link>
            <Link className="Header-Link" to="/">Contact</Link>
        </div>

        <div className="Header-Buttons">
           <Button text="Login" font_size="14" padding="10px 40px" />
           <Button text="Sing Up" font_size="14" padding="10px 40px" />
        </div>
     </div>
  )
}

export default Header
