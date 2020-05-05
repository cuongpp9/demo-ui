import React from 'react';
import { map } from 'lodash';
import { NavLink } from 'react-router-dom';
import Dropdown from '../common/Dropdown';
import Notification from './Notification';
import QuickLinks from './QuickLinks';
import Profile from './Profile';
import Logo from '../../assets/images/logo-dark.png';
import LogoIcon from '../../assets/images/logo-icon-dark.png';
import IconCompany from '../../assets/images/icon2.png';

const menuDropdown = {
  'Customer Hub': [{ href: '/', label: 'Customer Management' }, { href: '/', label: 'Order Management' }],
  'Pricing Hub': [{ href: '/', label: 'Pricing Management' }, { href: '/', label: 'Bundle Management' }],
  'Ar Hub': [
    { href: '/', label: 'Payments' },
    { href: '/', label: 'Collections' },
    { href: '/', label: 'AR Operations' },
  ],
  'Operations Hub ': [
    { href: '/', label: 'User Management' },
    { href: '/', label: 'Jobs Management' },
    { href: '/', label: 'Correspondence' },
    { href: '/', label: 'Reports' },
    { href: '/', label: 'Dashboard' },
    { href: '/', label: 'Tenent Management' },
  ],
};

export default function Header() {
  function toggleFullscreen(event) {
    let element = document.body;
    if (event instanceof HTMLElement) {
      element = event;
    }
    const isFullscreen = document.webkitIsFullScreen || document.mozFullScreen || false;
    element.requestFullScreen =
      element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen;
    document.cancelFullScreen =
      document.cancelFullScreen || document.webkitCancelFullScreen || document.mozCancelFullScreen;
    return isFullscreen ? document.cancelFullScreen() : element.requestFullScreen();
  }
  return (
    <header className="bg-white p-4">
      <nav className="admin-header navbar navbar-default col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
        <div className="text-left navbar-brand-wrapper">
          <NavLink className="navbar-brand brand-logo" to="/">
            <img src={Logo} alt="" />
          </NavLink>
          <a className="navbar-brand brand-logo-mini" href="index.html">
            <img src={LogoIcon} alt="" />
          </a>
        </div>
        <ul className="nav navbar-nav mr-auto">
          <li className="nav-item">
            <a id="button-toggle" className="button-toggle-nav inline-block ml-20 pull-left" href="/">
              <i className="zmdi zmdi-menu ti-align-right" />
            </a>
          </li>
          {map(menuDropdown, (item, title) => (
            <li className="nav-item" key={title}>
              <Dropdown title={title} items={item} />
            </li>
          ))}
        </ul>
        <ul className="nav navbar-nav ml-auto">
          <li className="nav-item fullscreen">
            <NavLink to="/" className="navbar-brand brand-logo">
              <img src={IconCompany} alt="" />
            </NavLink>
          </li>
          <li className="nav-item fullscreen">
            <NavLink to="" id="btnFullscreen" className="nav-link" onClick={toggleFullscreen}>
              <i className="ti-fullscreen" />
            </NavLink>
          </li>
          <Notification />
          <QuickLinks />
          <Profile />
        </ul>
      </nav>
    </header>
  );
}
