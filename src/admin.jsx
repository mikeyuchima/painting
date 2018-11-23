import React, { Component } from "react";
import {
  Tabs,
  Tab,
  FieldGroup,
  FormGroup,
  ControlLabel,
  FormControl,
  InputGroup
} from "react-bootstrap";

class Admin extends Component {
  render() {
    return (
      <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
        <Tab eventKey={1} title="New Painting">
          <form>
            <FieldGroup
              id="formControlsText"
              type="text"
              label="Name of Painting"
              placeholder="Enter text"
            />
            <FormGroup controlId="formControlsTextarea">
              <ControlLabel>Description</ControlLabel>
              <FormControl
                componentClass="textarea"
                placeholder="Description"
              />
              <InputGroup>
                <InputGroup.Addon>$</InputGroup.Addon>
                <FormControl type="text" />
              </InputGroup>
            </FormGroup>
            <FieldGroup
              id="formControlsFile"
              type="file"
              label="File"
              help="Example block-level help text here."
            />
          </form>
        </Tab>
        <Tab eventKey={2} title="New Class">
          New Class
        </Tab>
      </Tabs>
    );
  }
}

export default Admin;
