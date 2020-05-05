import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import icon from '../../../assets/images/icons/icon.png';

const SideChildItem = ({ item, ishaveIcon, isExpand }) => {
  return (
    <li>
      <Link to={item.href}>
        <div className="pull-left ">
          <i className={item.icon} />
          <span className="right-nav-text">{item.label}</span>
        </div>
        {ishaveIcon && (
          <div className={classNames('pull-right pull-right-hover', { invisiable: !isExpand })}>
            <img src={icon} style={{ width: 20, height: 'auto' }} alt="" />
          </div>
        )}
        <div className="clearfix" />
      </Link>
    </li>
  );
};
const CollapseNavi = ({ item, isExpand }) => {
  const [isExpandCollapse, setExpand] = useState(0);
  return (
    <li key={item.mainTilte}>
      <Link
        className={classNames('right-nav-text', { invisiable: !isExpand })}
        onClick={() => setExpand(!isExpandCollapse)}
        aria-expanded={!isExpandCollapse}
        to="/"
      >
        <div className="pull-left">
          <span className="right-nav-text">{item.mainTilte}</span>
        </div>
        <div className="pull-right  pull-right-hover">
          <i className="ti-plus" />
        </div>
        <div className="clearfix" />
      </Link>
      <div className={classNames({ 'display-none': isExpandCollapse })}>
        {item.childs.map((child, index) => {
          return <SideChildItem key={index} item={child} isExpand={isExpand} />;
        })}
      </div>
    </li>
  );
};
const SideBar = props => {
  const { items, isExpand } = props;

  return (
    <div className="side-menu-fixed" style={{ width: !isExpand ? 44 : '' }}>
      <div className="scrollbar side-menu-bg">
        <ul className="nav navbar-nav side-menu" id="sidebarnav">
          {items.map((item, index) => {
            if (item.isHaveExpand) {
              return <CollapseNavi key={index} item={item} isExpand={isExpand} />;
            }
            return [
              <li
                key={index}
                className={classNames('mt-10 mb-10 text-muted pl-4 font-medium menu-title', {
                  'display-none': !isExpand,
                })}
              >
                {item.mainTilte}
              </li>,
              item.childs.map((child, childIndex) => {
                return <SideChildItem key={childIndex} item={child} ishaveIcon isExpand={isExpand} />;
              }),
            ];
          })}
        </ul>
      </div>
    </div>
  );
};

SideBar.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any),
  isExpand: PropTypes.bool,
};
SideBar.defaultProps = {
  items: [],
  isExpand: false,
};

CollapseNavi.propTypes = {
  item: PropTypes.objectOf(PropTypes.any),
  isExpand: PropTypes.bool,
};
CollapseNavi.defaultProps = {
  item: {},
  isExpand: false,
};

SideChildItem.propTypes = {
  item: PropTypes.objectOf(PropTypes.any),
  isExpand: PropTypes.bool,
  ishaveIcon: PropTypes.bool,
};
SideChildItem.defaultProps = {
  item: {},
  isExpand: false,
  ishaveIcon: false,
};

export default SideBar;
