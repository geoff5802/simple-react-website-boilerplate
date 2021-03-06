'use-strict';

import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

const navObj = {
  title: 'Big Room Studios',
  subtitle: 'Creative/Technology',
  logo: 'images/logo-transparent.png',
  url: 'http://bigroomstudios.com'
};

const styleSheet = {
  height: 'auto',
  padding:'0px',
  maxHeight: '50px'
};

class Navigation extends React.Component {
  render() {
    return(
      <Navbar inverse fixedTop fluid>
        <Navbar.Header>
          <a href={navObj.url} target='blank'>
            <Navbar.Brand>
              <img src={navObj.logo} style={styleSheet}/>
            </Navbar.Brand>
          </a>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="#">Link</NavItem>
            <NavItem eventKey={2} href="#">Link</NavItem>
            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3}>Separated link</MenuItem>
            </NavDropdown>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">Link Right</NavItem>
            <NavItem eventKey={2} href="#">Link Right</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
