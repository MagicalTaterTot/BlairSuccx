import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from './src/js/navbar.js'

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Navbar/>
    </div>
  </BrowserRouter>
)
