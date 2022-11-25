import { Link, useMatch, useResolvedPath } from "react-router-dom"
import "./Navbar.css"
import Logo from "../../Assets/Logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import React, { useState } from 'react';



export default function Navbar() {
  const [active, setActive] = useState(false);
  return (
    <nav className="navbar">
      <div className="title-container">
        <Link to="/" className="site-title">
          <img id="logo" style={{ width: "80px", height: "100%" }} src={Logo} alt="fireSpot" />
        </Link>
      </div>
      <div className="icon">
        <FontAwesomeIcon id="menuShow" icon={regular('hand-point-left')} size="2x" 
        onClick={() => {setActive(!active); console.log('Button is ' + active)}}/>
      </div>
      <ul className={active == true? "shown-links": "site-links"}>
        <CustomLink to="/about">About</CustomLink>
        <CustomLink to="/skills">Skills</CustomLink>
        <CustomLink to="/Contact">Contact</CustomLink>
        <CustomLink to="/Todo">Todo</CustomLink>
        <CustomLink to="/Test">Test</CustomLink>
      </ul>
    </nav>
  )
}


function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "nav-link active" : "nav-link"}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}