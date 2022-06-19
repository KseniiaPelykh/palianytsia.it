import React from 'react';
import logo from '../logo.svg';
import {Container, Row, Col, Navbar, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';
import { Outlet } from "react-router-dom";

const Header = () => (
    <header>
        <Navbar fixed="top" color="light" light expand="xs" className="border-bottom border-gray bg-white">
            <Container>
                <Row className="position-relative w-100 align-items-center">
                    <Col className="d-none d-lg-flex justify-content-start">
                        <Nav className="mrx-auto" navbar>
                            <NavItem className="d-flex align-items-center">
                                <NavLink className="font-weight-bold" href="/">Home</NavLink>
                            </NavItem>
                            <NavItem className="d-flex align-items-center">
                                <NavLink className="font-weight-bold" href="/students">Students</NavLink>
                            </NavItem>
                        </Nav>
                    </Col>
                    <Col className="d-flex justify-content-xs-start justify-content-lg-center">
                        <NavbarBrand className="d-inline-block p-0" href="/" style={{ width: 50 }}>
                        <img src={logo} alt="logo" className="position-relative img-fluid" />
                        </NavbarBrand>
                    </Col>
                </Row>
            </Container>
        </Navbar>
        <Outlet />
    </header>
);

export default Header;
