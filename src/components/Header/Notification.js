import React from 'react';
import { NavLink } from 'react-router-dom';

const Notification = () => (
  <li className="nav-item dropdown ">
    <NavLink to="/" className="nav-link top-nav" data-toggle="dropdown">
      <i className="ti-bell" />
      <span className="badge badge-danger notification-status"> </span>
    </NavLink>
    <div className="dropdown-menu dropdown-menu-right dropdown-big dropdown-notifications">
      <div className="dropdown-header notifications">
        <strong>Notifications</strong>
        <span className="badge badge-pill badge-warning">05</span>
      </div>
      <div className="dropdown-divider" />
      <NavLink to="/" className="dropdown-item">
        New registered user
        <small className="float-right text-muted time">Just now</small>
      </NavLink>
      <NavLink to="/" className="dropdown-item">
        New invoice received
        <small className="float-right text-muted time">22 mins</small>
      </NavLink>
      <NavLink to="/" className="dropdown-item">
        Server error report
        <small className="float-right text-muted time">7 hrs</small>
      </NavLink>
    </div>
  </li>
);

export default Notification;
