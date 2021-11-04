import { React } from 'react';
import PropTypes from 'prop-types';
import "antd/dist/antd.css";
import { Progress } from 'antd';

/**
 * Shows large Progress Circle
 */
export const ProgressCircle = ({ percent, size, ...props }) => {

  let circleSize;

  if(size === "large") {
    circleSize = 64
  } else if(size === "medium") {
    circleSize = 48
  } else if(size === "small") {
    circleSize = 32
  } else {
    circleSize = 48
  }

  return (
    <Progress 
      type="circle" 
      percent={percent}
      strokeColor="#2183DF"
      trailColor="rgba(33, 33, 33, 0.12)"
      format={() => ''}
      width={circleSize}
    />
  )
};

ProgressCircle.propTypes = {
  /**
  * Set the completion percentage
  */
  percent: PropTypes.number,
  /**
  * Size of Progress Circle
  */
  size: PropTypes.oneOf(["small", "medium", "large"]),
}

ProgressCircle.defaultProps = {
};