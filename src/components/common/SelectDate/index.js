import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';

class SelectDate extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      focused: false,
      isOutsideRange: false,
      date: moment(),
    };
  }

  onFocusChange = ({ focused }) => {
    console.log('onFocusChange');
    this.setState({ focused });
  };

  onDateChange = date => {
    const { fieldName } = this.props;
    console.log('onDateChange, fieldName', date, fieldName);
    this.setState(() => ({ date }));
  };

  render() {
    const { label, colItem } = this.props;
    const { focused, isOutsideRange, date } = this.state;
    return (
      <div className={`form-group ${colItem}`}>
        <span>{label}</span>
        <SingleDatePicker
          id="date_input"
          date={date}
          focused={focused}
          numberOfMonths={1}
          onFocusChange={this.onFocusChange}
          isOutsideRange={() => isOutsideRange}
          onDateChange={this.onDateChange}
          displayFormat="MM-DD-YYYY"
        />
      </div>
    );
  }
}

SelectDate.propTypes = {
  label: PropTypes.string,
  fieldName: PropTypes.string,
  colItem: PropTypes.string,
};

SelectDate.defaultProps = {
  label: '',
  fieldName: '',
  colItem: '',
};
export default SelectDate;
