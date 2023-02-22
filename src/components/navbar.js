/* eslint-disable import/no-extraneous-dependencies */
import '../style.css';
import { NavLink } from 'react-router-dom';
import React from 'react';

const Links = () => (
  <div className="header">
    <h1 className="main-heading">Math Magicians</h1>
    <section className="nav-link">
      <NavLink to="/" className="nav-item">
        Home
      </NavLink>
      <h2 className="line">|</h2>
      <NavLink to="/calculator" className="nav-item">
        Calculator
      </NavLink>
      <h2 className="line">|</h2>
      <NavLink to="/Quote" className="nav-item">
        Quote
      </NavLink>
    </section>
  </div>
);

export default Links;
