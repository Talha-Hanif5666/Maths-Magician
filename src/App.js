/* eslint-disable import/no-extraneous-dependencies */
import React, { PureComponent } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import './style.css';
import Home from './components/homepage';
import Quote from './components/quote';
import Links from './components/navbar';

class App extends PureComponent {
  render() {
    return (
      <>
        <BrowserRouter>
          <Links />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Calculator" element={<Calculator />} />
            <Route path="/quote" element={<Quote />} />
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
