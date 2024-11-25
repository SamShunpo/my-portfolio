import './Nav.css'
import { Link, useLocation } from 'react-router-dom'
import React from 'react'

const Nav = ({ isToggled, action }) => {
    const { pathname, hash } = useLocation()

    return (
        <nav className={`menu ${isToggled ? 'visible' : 'hidden'}`}>
            <Link to={pathname === "/" ? "#work" : "/#work"} onClick={action} className={`nav-link ${hash === "#work" ? "select" : ""}`}>Mon travail</Link>
            <Link to="/about" onClick={action} className={`nav-link ${pathname === "/about" ? "select" : ""}`}>A propos</Link>
            <a href="#form" onClick={action} className='nav-link'>Contact</a>
        </nav>
    )
}

export default Nav 