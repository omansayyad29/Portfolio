import React from 'react'
import logo from "../assets/OmanSayaydLogo.png"
import {FaLinkedin} from "react-icons/fa"
import {FaGit} from "react-icons/fa"
import {FaInstagram} from "react-icons/fa"

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
            <img className="mx-2 w-11" src={logo} alt="logo" />
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
    <a href="https://www.linkedin.com/in/omansayyad/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
    </a>
    <a href="https://github.com/omansayyad29" target="_blank" rel="noopener noreferrer">
        <FaGit />
    </a>
    <a href="#" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
    </a>
</div>
    </nav>
  )
}

export default Navbar