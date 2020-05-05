import React from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import PropTypes from 'prop-types';
import Collapsible from '../common/Collapsible';

const FormCollapse = ({ children, title, isActive, onToggleTab, state, noCardBody }) => {
	if (noCardBody) {
		return (
  <div className="form-collapse">
    <Col md={12} lg={12}>
      <Card>
        <Collapsible title={title} className="boxed" isActive={isActive} onToggleTab={onToggleTab} state={state}>
          {children}
        </Collapsible>
      </Card>
    </Col>
  </div>
		);
	}
	return (
  <div className="form-collapse">
    <Col md={12} lg={12}>
      <Card>
        <CardBody>
          <Collapsible title={title} className="boxed" isActive={isActive} onToggleTab={onToggleTab} state={state}>
            {children}
          </Collapsible>
        </CardBody>
      </Card>
    </Col>
  </div>
	);
};

FormCollapse.propTypes = {
	title: PropTypes.string,
	// children: PropTypes.objectOf(PropTypes.string),
	isActive: PropTypes.bool,
	noCardBody: PropTypes.bool,
	onToggleTab: PropTypes.func,
	state: PropTypes.string,
};

FormCollapse.defaultProps = {
	title: '',
	// children: {},
	isActive: false,
	noCardBody: false,
	state: '',
	onToggleTab: () => {},
};

export default FormCollapse;
