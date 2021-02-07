import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import Button from './Button';
import '../constants/theme.css';
import logo from '../assets/images/logo.jpeg';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);

    const toggleMenu = () => setClick(false);


    return (
        <div className='container-fluid'>
            <nav className="navbar primary_background">
                <div className="navbar-container">
                    <div className='col-2'>
                        <Link to="/">
                            <div className='row'>
                                <img src={logo} width='180' height='100' />
                            </div>
                        </Link>
                    </div>
                    <div className='menu-icon col-2' onClick={handleClick}>
                        <i style={{ color: 'black' }} className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <div className='col-2 navmenu-container'>
                        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                            <li className='nav-item'>
                                <Link to='/' className='nav-links' onClick={toggleMenu}>Home</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/upcoming' className='nav-links' onClick={toggleMenu}>Upcoming</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/commercial' className='nav-links' onClick={toggleMenu}>Commercial</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/under_construction' className='nav-links' onClick={toggleMenu}>Under Contruction</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/contact' className='nav-links' onClick={toggleMenu}>Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;