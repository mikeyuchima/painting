import React, { Component } from "react";
import { Jumbotron, Button } from "react-bootstrap";
import Showcase from "./showcase";

class Home extends Component {
  render() {
    return (
      <section className="home">
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
        <section className="showcase">
          <Showcase />
          <Showcase />
          <Showcase />
        </section>
      </section>
    );
  }
}

export default Home;
