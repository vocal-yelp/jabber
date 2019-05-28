import React from "react";
import "./App.css";
import Routes from "./routes";
import { HashRouter, Link } from "react-router-dom";
import AppNavigation from "./components/AppNavigation/AppNavigation";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <AppNavigation />
        {Routes}
      </div>
    </HashRouter>
  );
}

export default App;
