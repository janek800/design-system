import { React } from 'react';
import PropTypes from 'prop-types';
import './chip.css';
import "antd/dist/antd.css";
import { Tag } from 'antd';

/**
 * Shows Chip
 */
export const Chip = ({ active, closable, icon, closeIcon, visible, onClose, ...props }) => {

  return (
    <Tag
      className={active && "chip-active"}
      closable={closable}
      icon={icon}
      closeIcon={closeIcon}
      visible={visible}
      onClose={onClose}
    >
      {props.children}
    </Tag>
  )

};

Chip.propTypes = {
  /**
  * Determine whether the Checkbox is active
  */
  active: PropTypes.bool,
  /**
  * Determine whether the Chip can be closed
  */
  closable: PropTypes.bool,
  /**
  * Icon of Chip
  */
  icon: PropTypes.element,
  /**
  * Custom close icon
  */
  closeIcon: PropTypes.element,
  /**
  * Determine whether the Chip is visible
  */
  visible: PropTypes.bool,
  /**
  * Callback executed when tag is closed `(e) => void`
  */
  onClose: PropTypes.func,
}

Chip.defaultProps = {
  active: false,
  closable: false,
  visible: true,
};