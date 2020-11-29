import React, { useState } from 'react';
import Navbar from './Navbar';
import PropertyDropdown from './PropertyDropdown';

function HeaderComponent(props) {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    }

    return (
        <Navbar />
    );
}

export default HeaderComponent;