import React from 'react';
import PropTypes from 'prop-types';
import './checkbox.css';
import "antd/dist/antd.css";
import { Checkbox as AntCheckbox } from 'antd';

/**
 * Shows Checkbox
 */
export const Checkbox = ({ defaultChecked, checked, indeterminate, onChange, disabled, autoFocus, ...props }) => {

  return (
    <div className="checkbox-container">
      <AntCheckbox  
        checked={checked}
        defaultChecked={defaultChecked}
        indeterminate={indeterminate}
        disabled={disabled}
        autoFocus={autoFocus}
        onChange={onChange}
      />
      <div className="hover-background"></div>
    </div>
  )

};

Checkbox.propTypes = {
  /**
  * Determine whether the Checkbox is checked
  */
  checked: PropTypes.bool,
  /**
  * Determine whether whether to set the initial state
  */
  defaultChecked: PropTypes.bool,
  /**
  * The indeterminate checked state of checkbox
  */
  indeterminate: PropTypes.bool,
  /**
  * Disable Checkbox
  */
  disabled: PropTypes.bool,
  /**
  * Triggered when the checked state is changing `function(e:Event)`
  */
  onChange: PropTypes.func,
  /**
  * Determine whether the Checkbox gets focus when component mounted
  */
  autoFocus: PropTypes.bool,
}

Checkbox.defaultProps = {
  defaultChecked: false,
  indeterminate: false,
  disabled: false,
  onChange: undefined,
  autoFocus: false
};