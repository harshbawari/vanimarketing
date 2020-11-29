import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const PropertyDropdown = (props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);

    return (
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle caret>
                Property
        </DropdownToggle>
            <DropdownMenu>
                <DropdownItem>Property 1</DropdownItem>
                <DropdownItem>Property 2</DropdownItem>
                <DropdownItem>Property 3</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
}

export default PropertyDropdown;