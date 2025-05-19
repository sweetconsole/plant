import "./Header.css"
import React from 'react'
import Button from "../Button/Button"

const Header = () => {
  return (
     <div className="Header">
        <a className="Header-Logo" href="/">Plant</a>

        <div className="Header-Links">
            <a className="Header-Link" href="/">Home</a>
            <a className="Header-Link" href="/">Services</a>
            <a className="Header-Link" href="/">About Us</a>
            <a className="Header-Link" href="/">Blog</a>
            <a className="Header-Link" href="/">Contact</a>
        </div>

        <div className="Header-Buttons">
           <Button text="Login" font_size="14" padding="10px 40px" />
           <Button text="Sing Up" font_size="14" padding="10px 40px" />
        </div>
     </div>
  )
}

export default Header
