import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import accountCard from './components/accountCard';

import './App.css';


function App() {
  return (
    <Router>
    <div className="App">
      <div className="title">
      <h1 className="bold">DASHBOARD</h1>
      <div className="dash-title">
      <h4 className="highlight">Tuesday ▪ </h4><h4>16 March 2020</h4>
      </div>
      <div className="acct-title">
      <h2 className="blue-bold">Accounts</h2>
      <h4>Add Account</h4>
      </div>
      <Route component={accountCard}/>
      <Route component={accountCard}/>
      </div>
    </div>
    </Router>
  );
}

export default App;
