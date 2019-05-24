import React from 'react';
import './App.css';
// import JabberMainPage from './components/JabberMainPage'
import Routes from './routes';
import {HashRouter, Link} from 'react-router-dom';

function App() {
  return (
    <HashRouter>
    <div className="App">
      <h1>Peter's tag</h1>
      <Link to="/"><button>Firebase Login Page</button></Link>
      <Link to="/JabberMainPage"><button>Jabber Main Page</button></Link>
      {Routes}
    </div>
    </HashRouter>
  );
}

export default App;
