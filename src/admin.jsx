import React, { Component } from "react";
import {
  Tabs,
  Tab,
  FormGroup,
  ControlLabel,
  FormControl,
  InputGroup
} from "react-bootstrap";
import ImageUploader from "react-images-upload";

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = { pictures: [] };
    this.onDrop = this.onDrop.bind(this);
  }

  onDrop(picture) {
    this.setState({
      pictures: this.state.pictures.concat(picture)
    });
  }

  render() {
    return (
      <Tabs defaultActiveKey={1} id="tab">
        <Tab eventKey={1} title="New Painting">
          <form>
            <FormGroup controlId="formBasicText">
              <ControlLabel>Name</ControlLabel>
              <FormControl type="text" placeholder="Enter text" />
            </FormGroup>
            <FormGroup controlId="formControlsTextarea">
              <ControlLabel>Description</ControlLabel>
              <FormControl
                componentClass="textarea"
                placeholder="Description"
              />
              <InputGroup>
                <ControlLabel>Price</ControlLabel>
                <InputGroup.Addon>$</InputGroup.Addon>
                <FormControl type="text" />
              </InputGroup>
            </FormGroup>
            <ImageUploader
              withIcon={true}
              buttonText="Choose images"
              onChange={this.onDrop}
              imgExtension={[".jpg", ".gif", ".png", ".gif"]}
              maxFileSize={5242880}
            />
          </form>
        </Tab>
        <Tab eventKey={2} title="New Class">
          <FormGroup controlId="formBasicText">
            <ControlLabel>Name</ControlLabel>
            <FormControl type="text" placeholder="Enter text" />
          </FormGroup>
          <div class="form-group">
            <label for="inputAddress">Address</label>
            <input
              type="text"
              class="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
            />
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputCity">City</label>
              <input type="text" class="form-control" id="inputCity" />
            </div>
            <div class="form-group col-md-4">
              <label for="inputState">State</label>
              <select id="inputState" class="form-control">
                <option selected>Choose...</option>
                <option>...</option>
              </select>
            </div>
            <div class="form-group col-md-2">
              <label for="inputZip">Zip</label>
              <input type="text" class="form-control" id="inputZip" />
            </div>
          </div>
          <ControlLabel>Date-Time </ControlLabel>
          <input type="datetime-local" id="event-time" name="event-time" />
          <FormGroup controlId="formControlsTextarea">
            <ControlLabel>Description</ControlLabel>
            <FormControl componentClass="textarea" placeholder="Description" />
            <InputGroup>
              <ControlLabel>Price</ControlLabel>
              <InputGroup.Addon>$</InputGroup.Addon>
              <FormControl type="text" />
            </InputGroup>
          </FormGroup>
          <ImageUploader
            withIcon={true}
            buttonText="Choose images"
            onChange={this.onDrop}
            imgExtension={[".jpg", ".gif", ".png", ".gif"]}
            maxFileSize={5242880}
          />
        </Tab>
      </Tabs>
    );
  }
}

export default Admin;
