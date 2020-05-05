import React from 'react';
import { NavLink } from 'react-router-dom';
import avatar from '../../assets/images/profile-avatar.jpg';

const Profile = () => (
  <li className="nav-item dropdown mr-30">
    <NavLink to="/" className="nav-link nav-pill user-avatar" data-toggle="dropdown">
      <img src={avatar} alt="avatar" />
    </NavLink>
    <div className="dropdown-menu dropdown-menu-right">
      <div className="dropdown-header">
        <div className="media">
          <div className="media-body">
            <h5 className="mt-0 mb-0">Kamal</h5>
            <span>kamal@embrix.com</span>
          </div>
        </div>
      </div>
      <div className="dropdown-divider" />
      <NavLink to="/" className="dropdown-item">
        <i className="text-secondary ti-reload" />
        Activity
      </NavLink>
      <NavLink to="/" className="dropdown-item">
        <i className="text-success ti-email" />
        Messages
      </NavLink>
      <NavLink to="/" className="dropdown-item">
        <i className="text-warning ti-user" />
        Profile
      </NavLink>
      <NavLink to="/" className="dropdown-item">
        <i className="text-dark ti-layers-alt" />
        Projects
        <span className="badge badge-info">6</span>
      </NavLink>
      <div className="dropdown-divider" />
      <NavLink to="/" className="dropdown-item">
        <i className="text-info ti-settings" />
        Settings
      </NavLink>
      <NavLink to="/" className="dropdown-item">
        <i className="text-danger ti-unlock" />
        Logout
      </NavLink>
    </div>
  </li>
);

export default Profile;
