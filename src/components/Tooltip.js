import {React} from 'react';
import PropTypes from 'prop-types';
import './tooltip.css';
import "antd/dist/antd.css";
import { Tooltip as AntTooltip } from 'antd';

/**
 * Shows Tooltip on top
 */
export const Tooltip = ({ title, placement, trigger, ...props }) => {

  return (
    <AntTooltip
      trigger={trigger}
      title={title}
      placement={placement}
    >
    {props.children}
    </AntTooltip>
  )

};

Tooltip.propTypes = {
  /**
  * The text shown in the tooltip
  */
  title: PropTypes.element,
  /**
  * The position of the tooltip relative to the target
  */
  placement: PropTypes.oneOf([
    'top', 
    'left', 
    'right', 
    'bottom', 
    'topLeft', 
    'topRight', 
    'bottomLeft', 
    'bottomRight', 
    'leftTop', 
    'leftBottom`', 
    'rightTop', 
    'rightBottom'
  ]),
  /**
  * Tooltip trigger mode. Could be multiple by passing an array
  */
   trigger: PropTypes.oneOf([
    'hover', 
    'focus', 
    'click',
  ]),
}

Tooltip.defaultProps = {
  placement: "top"
};
