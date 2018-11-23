import React, { Component } from "react";
import Home from "./home.jsx";
import NavigationBar from "./navbar";
import Admin from "./admin";
import { Router, Route, Link } from "react-router-dom";
import "./App.css";

const routes = [
  {
    path: "/",
    exact: true,
    sidebar: () => <div>home!</div>,
    main: () => <h2>Home</h2>
  },
  {
    path: "/bubblegum",
    sidebar: () => <div>bubblegum!</div>,
    main: () => <h2>Bubblegum</h2>
  },
  {
    path: "/shoelaces",
    sidebar: () => <div>shoelaces!</div>,
    main: () => <h2>Shoelaces</h2>
  }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationBar />
        <Home />
        <Route
          key={1}
          path="/form"
          // exact={true}
          component={() => <Admin />}
        />
      </div>
    );
  }
}

export default App;
