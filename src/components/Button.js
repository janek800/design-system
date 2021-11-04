import React from 'react';
import PropTypes from 'prop-types';
import './button.css';
import "antd/dist/antd.css";
import { Button as ButtonAnt } from 'antd';

/**
 * Primary UI component for user interaction
 */
export const Button = ({ loading, icon, disabled, type, size, label, onClick, href, ...props }) => {
  let mode;
  switch(type) {
    case "primary":
      mode = (`button--${size} button--primary ${disabled && 'button-primary-disabled'} ${loading && 'button-primary-loading'}`);
      break;
    case "primaryGroupLeft":
      mode = (`button--${size} button--primary primary-group-left ${disabled && 'button-primary-disabled'} ${loading && 'button-primary-loading'}`);
      break;
    case "primaryGroupMiddle":
      mode = (`button--${size} button--primary primary-group-middle ${disabled && 'button-primary-disabled'} ${loading && 'button-primary-loading'}`);
      break;
    case "primaryGroupRight":
      mode = (`button--${size} button--primary primary-group-right ${disabled && 'button-primary-disabled'} ${loading && 'button-primary-loading'}`);
      break;
    case "secondary":
      mode = (`button--${size} button--secondary ${disabled && 'button-secondary-disabled'} ${loading && 'button-secondary-loading'}`);
      break;
    case "secondaryGroupLeft":
      mode = (`button--${size} button--secondary secondary-group-left ${disabled && 'button-secondary-disabled'} ${loading && 'button-secondary-loading'}`);
      break;
    case "secondaryGroupMiddle":
      mode = (`button--${size} button--secondary secondary-group-middle ${disabled && 'button-secondary-disabled'} ${loading && 'button-secondary-loading'}`);
      break;
    case "secondaryGroupRight":
      mode = (`button--${size} button--secondary secondary-group-right ${disabled && 'button-secondary-disabled'} ${loading && 'button-secondary-loading'}`);
      break;
    case "iconGroupLeft":
      mode = (`button--${size} button--secondary icon-group-left ${disabled && 'button-secondary-disabled'} ${loading && 'button-secondary-loading'}`);
      break;
    case "iconGroupMiddle":
      mode = (`button--${size} button--secondary icon-group-middle ${disabled && 'button-secondary-disabled'} ${loading && 'button-secondary-loading'}`);
      break;
    case "iconGroupRight":
      mode = (`button--${size} button--secondary icon-group-right ${disabled && 'button-secondary-disabled'} ${loading && 'button-secondary-loading'}`);
      break;
    case "floatingAction":
      mode = (`floating-action--${size} floating-action ${disabled && 'floating-action-disabled'}`);
      break;
    case "floatingActionExtended":
      mode = (`floating-action-extended--${size} floating-action-extended ${disabled && 'floating-action-extended-disabled'} ${loading && 'button-primary-loading'}`);
      break;
    case "text":
      mode = (`button--${size} button--secondary button-text ${disabled && 'button-secondary-disabled'} ${loading && 'button-secondary-loading'}`);
      break;
    case "icon":
      mode = (`button-icon ${disabled && 'button-secondary-disabled'} ${loading && 'button-secondary-loading'}`);
      break;
    default:
      mode = (`button--${size} button--secondary ${disabled && 'button-secondary-disabled'} ${loading && 'button-secondary-loading'}`);
  }
  
  return (
    <ButtonAnt
      href={href}
      onClick={onClick}
      loading={loading}
      icon={icon}
      disabled={disabled}
      className={['button', mode].join(' ')}
      {...props}
    ></ButtonAnt>
  );
};

Button.propTypes = {
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Button contents
   */
  label: PropTypes.string,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
  /**
   * Redirect url of link button
   */
   href: PropTypes.string,
  /**
   * Actions are not available for button
   */
  disabled: PropTypes.bool,
  /**
   * Icon component to be displayed inside button
   */
  icon: PropTypes.element,
  /**
   * Adds loading spinner in button, avoids multiple submits
   */
  loading: PropTypes.bool,
  /**
   * Changes appearence of button
   */
  type: PropTypes.oneOf([
    'primary', 
    "primaryGroupLeft", 
    "primaryGroupMiddle", 
    "primaryGroupRight", 
    'secondary', 
    "secondaryGroupLeft", 
    "secondaryGroupMiddle", 
    "secondaryGroupRight",
    "iconGroupLeft", 
    "iconGroupMiddle", 
    "iconGroupRight", 
    'floatingAction', 
    "floatingActionExtended",
    "text",
    "icon"
  ]),
};

Button.defaultProps = {
  type: 'primary',
  size: 'medium',
  label: undefined,
  loading: false,
  disabled: false,
  onClick: undefined,
  icon: undefined,
};