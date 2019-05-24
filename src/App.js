import React from "react";
<<<<<<< HEAD
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Adams tag</h1>
    </div>
=======
import "./App.css";
// import JabberMainPage from './components/JabberMainPage'
import Routes from "./routes";
import { HashRouter, Link } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <h1>Peter's tag</h1>
        <Link to="/">
          <button>Firebase Login Page</button>
        </Link>
        <Link to="/JabberMainPage">
          <button>Jabber Main Page</button>
        </Link>
        {Routes}
      </div>
    </HashRouter>
>>>>>>> master
  );
}

export default App;
