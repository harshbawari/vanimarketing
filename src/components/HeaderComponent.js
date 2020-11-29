import React from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron, Button } from 'reactstrap';

function HeaderComponent(props) {
    const [isNavOpen, setIsNavOpen] = useState(false);

    toggleNav() {
        setIsNavOpen(!isNavOpen);
    }

    return (
        <header>
            <Navbar dard expand='md'>
                <div className='container'>
                    <NavbarToggler onClick={toggleNav} />
                    <NavbarBrand className='mr-auto' href='/'>Vani Property</NavbarBrand>
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink className='nav-link' to='/'>
                                    <span className='fa fa-home fa-lg'></span>Home
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <Nav className='ml-auto' navbar>
                            <NavItem>
                                <Button outline>Book a visit now!</Button>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>
        </header>
    );
}

export default HeaderComponent;