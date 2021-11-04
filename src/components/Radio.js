import React from 'react';
import PropTypes from 'prop-types';
import './radio.css';
import "antd/dist/antd.css";
import { Radio as AntRadio } from 'antd';

/**
 * Shows Radio
 */
export const Radio = ({ defaultChecked, checked, onChange, disabled, autoFocus, ...props }) => {

  return (
    <div className="radio-container">
      <AntRadio 
        checked={checked}
        defaultChecked={defaultChecked}
        disabled={disabled}
        autoFocus={autoFocus}
        onChange={onChange}
      />
      <div className="radio-hover-background"></div>
    </div>
  )

};

Radio.propTypes = {
  /**
  * Determine whether the Radio is checked
  */
  checked: PropTypes.bool,
  /**
  * Determine whether whether to set the initial state
  */
   defaultChecked: PropTypes.bool,
  /**
  * Disable Radio
  */
  disabled: PropTypes.bool,
  /**
  * Triggered when the checked state is changing `function(e:Event)`
  */
  onChange: PropTypes.func,
  /**
  * Determine whether the Radio gets focus when component mounted
  */
  autoFocus: PropTypes.bool,
}

Radio.defaultProps = {
  checked: false,
  defaultChecked: false,
  disabled: false,
  autoFocus: false
};