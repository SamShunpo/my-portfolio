import './Header.scss'
import {Link} from 'react-router-dom'

function Header () {
    return (
        <header className='portfolio-header'>
            <img src="" alt="" />
            <nav>
                <Link to="/">Work</Link>
                <Link to="/about">About</Link>
                <a href="">Contact</a>
            </nav>
        </header>
    )

}

export default Header