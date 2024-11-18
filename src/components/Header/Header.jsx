import './Header.css'
import Nav from '../../components/Nav/Nav'
import { useState } from 'react'

function Header() {
    const [isToggled, setIsToggled] = useState(false)

    const handleClick = () => {
        setIsToggled(!isToggled)
    }

    return (
        <header>
            <div className='descktop-nav'>
                <span>Sam GLEIZE</span>
                <Nav isToggled={isToggled} action={handleClick}/>
                <div className="toggle-icon" onClick={handleClick}>
                        <div className="hamburger hamburger1">
                            <span className={`bar bar1 ${isToggled ? 'rotate' : 'fix'}`}></span>
                            <span className={`bar bar4 ${isToggled ? 'rotate' : 'fix'}`}></span>
                        </div>
                </div>
            </div>
        </header>
    )
}

export default Header