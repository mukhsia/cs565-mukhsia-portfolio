import React from 'react';
import Nav from 'react-bootstrap/Nav';

class ProjectsComponent extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {open: 'none'};
    }

    handleSelect(eventKey) {
      
    }
  
    render() {
        const{ open } = this.state;
        return (
            <>
                <Nav justify 
                variant="tabs" 
                onSelect={k => this.handleSelect(k)}
                aria-controls="projectDiv-collapse">
                    <Nav.Item>
                        <Nav.Link eventKey="1">
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="2">
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="3" >
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
                <div id="projectDiv-collapse">
                    <p>test</p>
                </div>
            </>
        );
    }
  }
  
export default ProjectsComponent;