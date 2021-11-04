import React from 'react';
import PropTypes from 'prop-types';
import './toggle.css';
import "antd/dist/antd.css";
import { Switch } from 'antd';

/**
 * Shows Toggle switch
 */
export const Toggle= ({ defaultChecked, checked, disabled, onChange, autoFocus, ...props }) => {

  return (
    <div className="toggle-container">
      <Switch 
        checked={checked}
        defaultChecked={defaultChecked}
        disabled={disabled}
        onChange={onChange}
        autoFocus={autoFocus}
      />
      <div className="toggle-hover-background"></div>
    </div>
  )

};

Toggle.propTypes = {
  /**
  * Determine whether the Toggle is checked
  */
  checked: PropTypes.bool,
  /**
  * Determine whether whether to set the initial state
  */
  defaultChecked: PropTypes.bool,
  /**
  * Disable Toggle
  */
  disabled: PropTypes.bool,
  /**
  * Triggered when the checked state is changing `function(checked: boolean, event: Event)`
  */
  onChange: PropTypes.func,
  /**
  * Determine whether the Toggle gets focus when component mounted
  */
  autoFocus: PropTypes.bool,
}

Toggle.defaultProps = {
  checked: undefined,
  defaultChecked: false,
  disabled: false,
  onChange: undefined,
  autoFocus: false
};