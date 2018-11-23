import React from "react";
import { Router, Route, Link } from "react-router-dom";
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from "react-bootstrap";

const NavigationBar = () => (
  <Navbar inverse collapseOnSelect style={{ marginBottom: "0px" }}>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="/">My Painting Store</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
        <NavItem eventKey={1}>
          <Link to="/store">Store</Link>
        </NavItem>
        <NavItem eventKey={2}>
          <Link to="/class">Class</Link>
        </NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default NavigationBar;
