import { React } from 'react';
import PropTypes from 'prop-types';
import './badge.css';
import "antd/dist/antd.css";
import { Tag } from 'antd';

import { ReactComponent as InfoWhite} from '../assets/icon/infoWhite.svg';
import { ReactComponent as InfoBlack} from '../assets/icon/infoBlack.svg';
import { ReactComponent as InfoGreen} from '../assets/icon/infoGreen.svg';
import { ReactComponent as InfoRed} from '../assets/icon/infoRed.svg';

/**
 * Shows default Badge
 */
export const Badge = ({ type, ...props }) => {
  
  let badgeType;
  let iconType;

  if (type === "primary") {
    badgeType= "badge-primary"
    iconType = <InfoWhite />
  } else if (type === "important") {
    badgeType= "badge-important"
    iconType = <InfoWhite />
  } else if (type === "default") {
    badgeType= "badge-default"
    iconType = <InfoBlack />
  } else if (type === "green") {
    badgeType= "badge-green"
    iconType = <InfoGreen />
  } else if (type === "red") {
    badgeType= "badge-red"
    iconType = <InfoRed />
  } else {
    badgeType= "badge-default"
    iconType = <InfoBlack />
  }

  return (
    <Tag
      icon={iconType}
      className={`badge ${badgeType}`}
    >
      {props.children}
    </Tag>
  )

};

Badge.propTypes = {
  /**
  * Changes color of Badge
  */
  type: PropTypes.oneOf(['primary', 'important', 'default', "green", 'red']),
}

Badge.defaultProps = {
  type: "default"
};