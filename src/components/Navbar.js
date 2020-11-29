import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    const toggleMenu = () => setClick(false);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        Vani Property <i className="fab fa-typo3" />
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={toggleMenu}>Home</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={toggleMenu}>Services</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={toggleMenu}>Property</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={toggleMenu}>Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navbar;