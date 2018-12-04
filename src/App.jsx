import React, { Component } from "react";
import Home from "./home.jsx";
import NavigationBar from "./navbar";
import Admin from "./admin";
import Sell from "./sell.jsx";
import Class from "./class.jsx";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
            <Route path="/sell" exact component={Sell} />
            <Route path="/class" exact component={Class} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
