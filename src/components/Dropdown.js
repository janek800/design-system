import { React } from 'react';
import PropTypes from 'prop-types';
import './dropdown.css';
import "antd/dist/antd.css";
import { Select } from 'antd';

import { ReactComponent as ChevronDown } from '../assets/icon/chevronDown.svg';

const { Option } = Select;

/**
 * Shows Dropdown
 */
export const Dropdown = ({ options, defaultValue, value, onChange, ...props }) => {

  return (
    <Select 
      defaultValue={defaultValue} 
      value={value} 
      onChange={onChange}
      suffixIcon={<ChevronDown />}
    >
      {options.map((option) => <Option value={option}>{option}</Option>)}
    </Select>
  )

};

Dropdown.propTypes = {
  /**
  * Options of dropdown
  */
   options: PropTypes.oneOfType([
     PropTypes.arrayOf(PropTypes.string),
     PropTypes.arrayOf(PropTypes.number)
   ]),
  /**
  * Current selected option
  */
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  /**
  * Initial selected option
  */
  defaultValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  /**
  * Called when select an option or input value change `function(value, option:Option)`
  */
  onChange: PropTypes.func,
}

Dropdown.defaultProps = {
};
