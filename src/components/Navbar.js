import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import Button from './Button';
import logo from '../assets/images/logo.jpeg';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);

    const toggleMenu = () => setClick(false);


    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <div className='row'>
                        <div className='col-4 col-md-2'>
                            <Link to="/">
                                <h1><img src={logo} width='270' height='180' /></h1>
                            </Link>
                        </div>
                    </div>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={toggleMenu}>Home</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={toggleMenu}>Flats</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={toggleMenu}>Plots</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={toggleMenu}>Shops</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={toggleMenu}>Upcoming</Link>
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