import React, { PureComponent } from 'react';
import { Collapse } from 'reactstrap';
import PropTypes from 'prop-types';

export default class Collapsible extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			collapse: false,
			classStatus: 'closed',
		};
	}

	toggle = () => {
		const { onToggleTab, state } = this.props;
		const { collapse } = this.state;
		this.setState({ collapse: !collapse });
		onToggleTab(state);
	};

	onEntering = () => {
		this.setState({ classStatus: 'opening' });
	};

	onEntered = () => {
		this.setState({ classStatus: 'opened' });
	};

	onExiting = () => {
		this.setState({ classStatus: 'closing' });
	};

	onExited = () => {
		this.setState({ classStatus: 'closed' });
	};

	render() {
		const { title, className, isActive, children } = this.props;
		const { classStatus, icon, collapse } = this.state;
		const Class = className || '';
		return (
  <div className={`collapse__wrapper ${classStatus} ${Class} ${isActive || collapse ? 'active' : ''}`}>
    <div role="button" onKeyPress={this.toggle} tabIndex="0" onClick={this.toggle} className="collapse__title">
      {icon}
      <div className="panel__heading panel__heading--btn">
        {isActive ? <i className="fa fa-minus" /> : <i className="fa fa-plus" />}
						&nbsp;
        <span className="panel__title">{title}</span>
      </div>
    </div>
    <Collapse
      isOpen={isActive || collapse}
      className="collapse__content"
      onEntering={this.onEntering}
      onEntered={this.onEntered}
      onExiting={this.onExiting}
      onExited={this.onExited}
    >
      <div>{children}</div>
    </Collapse>
  </div>
		);
	}
}

Collapsible.propTypes = {
	title: PropTypes.string,
	children: PropTypes.instanceOf(PropTypes.string),
	className: PropTypes.string,
	isActive: PropTypes.bool,
	onToggleTab: PropTypes.func,
	state: PropTypes.string,
};

Collapsible.defaultProps = {
	title: '',
	children: {},
	isActive: false,
	className: '',
	state: '',
	onToggleTab: () => {},
};
