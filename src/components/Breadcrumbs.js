import { React } from 'react';
import PropTypes from 'prop-types';
import './breadcrumbs.css';
import "antd/dist/antd.css";
import { Breadcrumb } from 'antd';

/**
 * Shows Breadcrumbs
 */
export const Breadcrumbs = ({ items, params, routes, ...props }) => {

  return (
    <Breadcrumb
      params={params}
      routes={routes}
    >
      {items.map(item => <Breadcrumb.Item>{item}</Breadcrumb.Item>)}
    </Breadcrumb>
  )
};

Breadcrumbs.propTypes = {
  /**
  * Items to be put into breadcrumbs
  */
   items: PropTypes.arrayOf(PropTypes.element),
}

Breadcrumbs.defaultProps = {
};