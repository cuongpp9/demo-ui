import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => (
  <footer className="bg-white p-4">
    <div className="row">
      <div className="col-md-6">
        <div className="text-center text-md-left">
          <p className="mb-0">
            &copy; Copyright
            <span id="copyright">{` ${new Date().getFullYear()}.`}</span>
            <NavLink to="/"> EMBRIX </NavLink>
            All Rights Reserved.
          </p>
        </div>
      </div>
      <div className="col-md-6">
        <ul className="text-center text-md-right">
          <li className="list-inline-item">
            <NavLink to="/">Terms & Conditions</NavLink>
          </li>
          <li className="list-inline-item">
            <NavLink to="/">PI Use Policy </NavLink>
          </li>
          <li className="list-inline-item">
            <NavLink to="/">Privacy Policy </NavLink>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
