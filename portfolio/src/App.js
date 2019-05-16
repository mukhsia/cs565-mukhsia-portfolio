import React from 'react';

import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Dropdown from 'react-bootstrap/Dropdown';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">CS565-Final-Project</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">PSU-PUBKEYCRYPT</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">PSU-CRYPT</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Battlecode 2019 Bot</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#about me">About Me</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>;

        <h1>Hello World!</h1>
      </header>
    </div>
  );
}

export default App;
