import React, { Component } from "react";
import Home from "./home.jsx";
import NavigationBar from "./navbar";
import Admin from "./admin";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationBar />
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/form" exact component={Admin} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
