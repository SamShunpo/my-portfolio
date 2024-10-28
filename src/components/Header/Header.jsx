import './Header.css'
import { Link, useLocation } from 'react-router-dom'

function Header() {
    const { pathname } = useLocation()

    return (
        <header>
            <span>Sam GLEIZE</span>
            <nav>
                <Link to={pathname === "/" ? "#work" : "/#work"}>Work</Link>
                <Link to="/about">About</Link>
                <a href="#form">Contact</a>
            </nav>
            <span className='toggle-icon'></span>
        </header>
    )

}

export default Header