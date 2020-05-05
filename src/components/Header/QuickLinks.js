import React from 'react';
import { NavLink } from 'react-router-dom';

const QuickLinks = () => (
  <li className="nav-item dropdown ">
    <NavLink to="/" className="nav-link top-nav">
      <i className=" ti-view-grid" />
    </NavLink>
    <div className="dropdown-menu dropdown-menu-right dropdown-big">
      <div className="dropdown-header">
        <strong>Quick Links</strong>
      </div>
      <div className="dropdown-divider" />
      <div className="nav-grid">
        <NavLink to="/" className="nav-grid-item">
          <i className="ti-files text-primary" />
          <h5>New Task</h5>
        </NavLink>
        <NavLink to="/" className="nav-grid-item">
          <i className="ti-check-box text-success" />
          <h5>Assign Task</h5>
        </NavLink>
      </div>
      <div className="nav-grid">
        <NavLink to="/" className="nav-grid-item">
          <i className="ti-pencil-alt text-warning" />
          <h5>Add Orders</h5>
        </NavLink>
        <NavLink to="/" className="nav-grid-item">
          <i className="ti-truck text-danger " />
          <h5>New Orders</h5>
        </NavLink>
      </div>
    </div>
  </li>
);

export default QuickLinks;
