import React from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import accountCard from './components/accountCard';

import './App.css';


function App() {
  return (
    <Router>
    <div className="App">
      <div className="title">
      <h1 className="bold">Dashboard</h1>
      <div className="dash-title">
      <h4 className="highlight">Tuesday ▪ </h4> <h4> 16 March 2020</h4>
      </div>
      <div className="acct-title">
      <h2 className="blue-bold">Accounts</h2>
      <button><Link className="button">Add Account</Link></button>
      </div>
      <Route component={accountCard}/>
      <Route component={accountCard}/>
      <Route component={accountCard}/>
      </div>
    </div>
    </Router>
  );
}

export default App;
