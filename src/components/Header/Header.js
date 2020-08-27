import React from 'react';
import './Header.css'
import { Navbar, Container } from 'react-bootstrap';
const Header = () => {
    return (
            <Navbar expand="lg" variant="light" bg="light">
                <Container>
                    <Navbar.Brand href="#" style={{color: 'rgb(0, 230, 230)'}}> The 13 Most Popular Courses During The Pandemic</Navbar.Brand>
                </Container>
            </Navbar>
    );
};

export default Header;