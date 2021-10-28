import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo1.png';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand as = {Link} to="/"><img src={logo} width="100%" height="60" alt=""/></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto fs-5">
                        <Nav.Link as = {Link} to ="/">Home</Nav.Link>
                        <Nav.Link as = {Link} to ="/about">About</Nav.Link>
                        <Nav.Link as = {Link} to ="/contact">Contact</Nav.Link>
                    </Nav>
                    <Nav className="fs-6">
                        <NavDropdown title="Admin" id="basic-nav-dropdown">
                            <NavDropdown.Item as ={Link} to ="/addservices">Add Services</NavDropdown.Item>
                            <NavDropdown.Item as ={Link} to ="/manageorders">Manage Orders</NavDropdown.Item>
                            <NavDropdown.Item as ={Link} to ="/orderstatus">Order Status</NavDropdown.Item>
                        </NavDropdown>
                        
                        {/* {
                            user?.email ?
                            <Button className="me-2" onClick={logout} variant="light">LogOut</Button> :
                            <Nav.Link as = {Link} eventKey={2} to="/login">Login/Register</Nav.Link>
                        } */}
                        <Navbar.Text>Signed in as: <a href="#login"></a></Navbar.Text>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;