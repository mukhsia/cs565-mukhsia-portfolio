import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Media from 'react-bootstrap/Media';
import ProjectsComponent from './Projects.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <body>
        <Navbar fixed="top" bg="light" expand="lg" className="App-NavBar">
          <Navbar.Brand>Mukhsia</Navbar.Brand>
        </Navbar>
        <Jumbotron fluid>
          <Media className="App-AboutMe">
            <Media.Body>
              <h1 class="display-4">About Me</h1>
              <p>
                Computer Science Graduate student at Portland State University with a focus on Computer Security.
              </p>
            </Media.Body>
          </Media>
        </Jumbotron>
      </body>
    </div>
  );
}

export default App;
