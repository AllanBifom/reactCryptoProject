
import React from 'react';
import './App.css';
import {Routes as Switch, Route, Link} from 'react-router-dom';
import {Layout, Typography, Space} from 'antd'

import { Navbar, Homepage, Exchanges, News, Cryptocurrencies, Cryptodetails, Exchangedetails } from './components';

function App() {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main" style={{backgroundColor: 'rgba(220, 220, 255, 0.7)'}}>
        <Layout>
          <Switch>
            <Route exact path="/" element={<Homepage/>} />
            <Route exact path="/exchanges" element={<Exchanges/>} />
            <Route exact path="/news" element={<News/>} />
            <Route exact path="/cryptocurrencies" element={<Cryptocurrencies/>} />
            <Route exact path="/crypto/:coinId" element={<Cryptodetails/>} />
            <Route exact path="/exchange/:coinId" element={<Exchangedetails/>} />
          </Switch>
        </Layout>

      <div className="footer" >
            <Typography.Title level ={5} style={{color:'aliceblue', textAlign:'center'}}>
              AllansCryptoWorld <br/>
              All rights reserved
            </Typography.Title>
            <Space>
              <Link to="/">Home</Link>
              <Link to="/exchanges">Exchanges</Link>
              <Link to="/news">News</Link>

            </Space>
      </div>
    </div>
    </div>
  );
}

export default App;
