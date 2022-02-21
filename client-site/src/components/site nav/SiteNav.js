import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Classes from '../../assets/css/SiteNav.module.css';
import ApiLink from '../../rest api/ApiLink';

export default function SiteNav() {
    const [brandName, setBrandName] = useState('');
    useEffect(() => {
        async function FetchData() {
            await axios
                .get(ApiLink.getBrandName)
                .then((response) => {
                    if (response.status === 200) {
                        setBrandName(response.data);
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        }
        FetchData();
    }, []);
    return (
        <div>
            <Navbar bg="dark" variant="dark" fixed="top" expand="lg">
                <Container className={Classes.nav}>
                    <Navbar.Brand>{brandName}</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) => (isActive ? Classes.active : '')}
                                >
                                    Home
                                </NavLink>
                            </Nav>
                            <Nav>
                                <NavLink
                                    to="/products"
                                    className={({ isActive }) => (isActive ? Classes.active : '')}
                                >
                                    Products
                                </NavLink>
                            </Nav>
                            <Nav>
                                <NavLink
                                    to="/about"
                                    className={({ isActive }) => (isActive ? Classes.active : '')}
                                >
                                    About Me
                                </NavLink>
                            </Nav>
                            <Nav>
                                <NavLink
                                    to="/contact"
                                    className={({ isActive }) => (isActive ? Classes.active : '')}
                                >
                                    Contact
                                </NavLink>
                            </Nav>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}
