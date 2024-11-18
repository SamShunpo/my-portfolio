import './Nav.css'
import { Link, useLocation } from 'react-router-dom'
import React from 'react'

const Nav = ({ isToggled, action }) => {
    const { pathname } = useLocation()

    return (
        <nav className={`menu ${isToggled ? 'visible' : 'hidden'}`}>
            <Link to={pathname === "/" ? "#work" : "/#work"} onClick={action}>Mon travail</Link>
            <Link to="/about" onClick={action}>A propos</Link>
            <a href="#form" onClick={action}>Contact</a>
        </nav>
    )
}

export default Nav