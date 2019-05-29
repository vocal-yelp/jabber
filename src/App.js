<<<<<<< HEAD
import React from "react";
import "./App.css";
import Routes from "./routes";
import { HashRouter, Link } from "react-router-dom";
import AppNavigation from "./components/AppNavigation/AppNavigation";
=======
import React from 'react';
import './App.css';
import Routes from './routes';
import {HashRouter, Link} from 'react-router-dom';
import AppNavigation from './components/AppNavigation/AppNavigation';
>>>>>>> master

function App() {
  return (
    <HashRouter>
<<<<<<< HEAD
      <div className="App">
        <AppNavigation />
        {Routes}
      </div>
=======
    <div className="App">
      <AppNavigation/>
      {Routes}
    </div>
>>>>>>> master
    </HashRouter>
  );
}

export default App;
