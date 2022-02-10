import logo from './logo.svg';
import React from 'react';
import './App.css';
import {Routes as Switch, Route, Link} from 'react-router-dom';
import {Layout, Typography, Space} from 'antd'

import { Navbar, Homepage, Exchanges, News, Cryptocurrencies, Cryptodetails } from './components';

function App() {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        Homepage
      </div>
      <div className="footer">

      </div>
    </div>
  );
}

export default App;
