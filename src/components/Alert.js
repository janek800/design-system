import { React } from 'react';
import PropTypes from 'prop-types';
import './alert.css';
import "antd/dist/antd.css";
import { Alert as AntAlert } from 'antd';

import { ReactComponent as AlertCircleWhite } from '../assets/icon/alertCircleWhite.svg';
import { ReactComponent as AlertCircle } from '../assets/icon/alertCircle.svg';
import { ReactComponent as InfoBlue } from '../assets/icon/infoBlue.svg';
import { ReactComponent as CheckCircle } from '../assets/icon/checkCircle.svg';
import { ReactComponent as AlertTriangle } from '../assets/icon/alertTriangle.svg';

/**
 * Shows default Alert
 */
export const Alert = ({ type, message, action, ...props }) => {

  let alertIcon;

  if (type === "default") {
    alertIcon = <AlertCircleWhite />
  } else if (type === "alert") {
    alertIcon = <AlertCircle />
  } else if (type === "success") {
    alertIcon = <CheckCircle />
  } else if (type === "info") {
    alertIcon = <InfoBlue />
  } else if (type === "warning") {
    alertIcon = <AlertTriangle />
  } else {
    alertIcon = <AlertCircleWhite />
  }

  let alertType;

  if (type === "default") {
    alertType = "alert-default"
  } else if (type === "alert") {
    alertType = "alert-alert"
  } else if (type === "success") {
    alertType = "alert-success"
  } else if (type === "info") {
    alertType = "alert-info"
  } else if (type === "warning") {
    alertType = "alert-warning"
  } else {
    alertType = "alert-default"
  }

  return (
    <AntAlert
      className={`alert ${alertType}`}
      message={message}
      showIcon={true}
      icon={alertIcon}
      closable={true}
      action={action}
    />
  )

};

Alert.propTypes = {
  /**
  * Type of Alert
  */
  type: PropTypes.oneOf(["default", "alert", "success", "info", "warning"]),
  /**
  * Content of Alert
  */
  message: PropTypes.string,
  /**
  * The action of Alert
  */
  action: PropTypes.element,
}

Alert.defaultProps = {
};