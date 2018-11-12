import React, { Component } from "react";
import Home from "./home.jsx";
import NavigationBar from "./navbar";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationBar />
        <Home />
      </div>
    );
  }
}

export default App;
