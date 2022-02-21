import React from 'react';
import { Container, Nav, Navbar, NavDropdown, NavLink } from 'react-bootstrap';
import * as biIcon from 'react-icons/bi';
import * as faIcon from 'react-icons/fa';
import Classes from '../../assets/css/Topnav.module.css';

export default function Topnav({ onChange }) {
    return (
        <Navbar bg="dark" variant="dark" sticky="top">
            <Container fluid>
                <Navbar.Brand className={`${Classes.brandName} text-white`}>
                    <NavLink to="/">BrandName</NavLink>
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link onClick={onChange}>
                        <faIcon.FaBars />
                    </Nav.Link>
                </Nav>
                <Nav>
                    <NavDropdown align="end" title={<faIcon.FaUserAlt />}>
                        <NavDropdown.Item>
                            <faIcon.FaUserCog /> Profile Setting
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            <faIcon.FaMousePointer /> Activity Log
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item>
                            <biIcon.BiLogOutCircle /> Logout
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Container>
        </Navbar>
    );
}
