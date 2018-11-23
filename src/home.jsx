import React, { Component } from "react";
import { Jumbotron, Button } from "react-bootstrap";
import { Router, Route, Link } from "react-router-dom";
import Showcase from "./showcase";

class Home extends Component {
  render() {
    return (
      <section>
        <Jumbotron>
          <h1>WELCOME!</h1>
          <p>
            This is a simple hero unit, a simple jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
          <p>
            <Button bsStyle="primary">Store</Button>
            <Button bsStyle="primary">Class</Button>
          </p>
        </Jumbotron>
        <h2>Take a Look!</h2>
        <Showcase />
        <Showcase />
        <Showcase />
      </section>
    );
  }
}

export default Home;
