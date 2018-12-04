import React from "react";
import { Router, Route, Link } from "react-router-dom";
import { Nav, Navbar, NavItem } from "react-bootstrap";

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
          {/* <Router link to="/store">
            Store
          </Router> */}
        </NavItem>
        <NavItem eventKey={2}>
          {/* <Router link to="/class">
            Class
          </Router> */}
        </NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default NavigationBar;
