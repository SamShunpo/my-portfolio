import './Header.css'
import { Link, useLocation } from 'react-router-dom'

function Header() {
    const { pathname } = useLocation()

    return (
        <header className='portfolio-header'>
            <img src="" alt="" />
            <nav>
                <Link to={pathname === "/" ? "#work" : "/#work"}>Work</Link>
                <Link to="/about">About</Link>
                <a href="">Contact</a>
            </nav>
        </header>
    )

}

export default Header