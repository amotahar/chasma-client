import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import useAuth from './../../../hooks/useAuth';

const Header = () => {
    const {user,logOut}= useAuth()
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand href="#home">Happy Shopping</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link style={{color:'white'}} as={HashLink} to="/home">Home</Nav.Link>
                        <Nav.Link style={{color:'white'}} as={HashLink} to="/explore">Explore</Nav.Link>
                        <Nav.Link style={{color:'white'}} as={HashLink} to="/dashboard">Dashboard</Nav.Link>
                    {
                        user?.email ? <Button onClick={logOut}> Logout</Button>  :<Nav.Link style={{color:'white'}} as={HashLink} to="/login">Login</Nav.Link>
                                                
                    }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;