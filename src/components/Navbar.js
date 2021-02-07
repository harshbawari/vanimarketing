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
                    <div className='row'>
                        <div className='col-2 col-md-2'>
                            <Link to="/">
                                <h1><img src={logo} width='200' height='180' /></h1>
                            </Link>
                        </div>
                    </div>
                    <div className='menu-icon' onClick={handleClick}>
                        <i style={{ color: 'black' }} className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={toggleMenu}>Home</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/plots' className='nav-links' onClick={toggleMenu}>Plots</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/commercial' className='nav-links' onClick={toggleMenu}>Commercial</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/under_construction' className='nav-links' onClick={toggleMenu}>Under Contruction</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={toggleMenu}>Upcoming</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/contact' className='nav-links' onClick={toggleMenu}>Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;