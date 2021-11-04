import { React } from 'react';
import PropTypes from 'prop-types';
import './accordion.css';
import "antd/dist/antd.css";
import { Collapse } from 'antd';

import { ReactComponent as ChevronDown } from '../assets/icon/chevronDown.svg';
import { ReactComponent as ChevronUp } from '../assets/icon/chevronUp.svg';

const { Panel } = Collapse;

/**
 * Shows Accordion
 */
export const Accordion = ({ contents, activeKey, defaultActiveKey, onChange, ...props }) => {

  return (
    <Collapse 
      activeKey={activeKey}
      defaultActiveKey={defaultActiveKey} 
      onChange={onChange}
      expandIcon={({ isActive }) => isActive ? <ChevronUp /> : <ChevronDown />}
      expandIconPosition={"right"}
      accordion={true}
    >
      {contents.map((content) => (
        <Panel header={content.header} key={content.key} collapsible={content.collapsible}>
          {content.content}
        </Panel>
      ))}
    </Collapse>
  )

};

Accordion.propTypes = {
  /**
  * Key of the active panel
  */
  activeKey: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.number),
  ]),
  /**
  * Key of the initial active panel
  */
   defaultActiveKey: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.number),
  ]),
  /**
  * Callback function executed when active panel is changed
  */
  onChange: PropTypes.func,
  /**
  * Contents of Accordion. An array of objects, each including header and contents of each Accordion pannel, as well as key and information wether it should be disabled
  */
  contents: PropTypes.arrayOf(
    PropTypes.shape({
      header: PropTypes.string,
      key: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
      ]),
      content: PropTypes.element,
      collapsible: PropTypes.oneOf(["", "disabled"])
    })
  ),
}

Accordion.defaultProps = {
};
