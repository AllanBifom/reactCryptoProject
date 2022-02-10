import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes as Switch, Route, Link} from 'react-router-dom'
import { Navbar, Homepage, Exchanges, News, Cryptocurrencies, Cryptodetails } from './components';
import 'antd/dist/antd.css';

ReactDOM.render(
  <Router>
     <Switch>
      <Route exact path="/" element={<App/>} />
      <Route exact path="/exchanges" element={<Exchanges/>} />
      <Route exact path="/news" element={<News/>} />
      <Route exact path="/cryptocurrencies" element={<Cryptocurrencies/>} />
      <Route exact path="/cryptodetails" element={<Cryptodetails/>} />
              
    </Switch>
  </Router>,
  document.getElementById('root')
);

