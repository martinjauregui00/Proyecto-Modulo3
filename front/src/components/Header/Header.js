import React, { useState } from 'react'
import {Link} from 'react-scroll'
import { FaBars, FaTimes } from 'react-icons/fa'

function Header() {

    const[click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMenu = () => setClick(false);


    return (
        <div className="Header">
            <nav className='navbar'>
                <div className="Logo">
                    <h1>URIBEKOSTA Buceo</h1>
                </div>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes/>) : (<FaBars/>)}
                    
                </div>
                <ul className={click ? "Indice active" : "Indice"}>
                    <li className='nav-item'>
                        <Link to='/' spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>Home</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='about' spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>About</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='materials' spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>Courses</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='map' spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>Spots</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='contact' spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>Contact</Link>
                    </li>
                </ul>
            </nav>
        </div>

    )
}

export default Header;