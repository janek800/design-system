import { React } from 'react';
import PropTypes from 'prop-types';
import './pagination.css';
import "antd/dist/antd.css";
import { Pagination as AntPagination} from 'antd';

import { ReactComponent as ChevronLeft } from '../assets/icon/chevronLeft.svg';
import { ReactComponent as ChevronRight} from '../assets/icon/chevronRight.svg';

/**
 * Shows Pagination
 */
export const Pagination = ({ 
  current, 
  defaultCurrent,
  pageSize, 
  defaultPageSize,
  onChange,
  total, 
  ...props }) => {

  function itemRender(current, type, originalElement) {
    if (type === 'prev') {
      return <ChevronLeft />;
    }
    if (type === 'next') {
      return <ChevronRight />;
    }
    if (type === 'jump-prev') {
      return <span>...</span>
    }
    if (type === 'jump-next') {
      return <span>...</span>
    }
    return originalElement;
  }

  return (
      <AntPagination
        current={current}
        defaultCurrent={defaultCurrent}
        pageSize={pageSize}
        defaultPageSize={defaultPageSize}
        onChange={onChange}
        total={total}
        showSizeChanger={false}
        itemRender={itemRender}
      />
  )

};

Pagination.propTypes = {
  /**
  * Current page number
  */
  current: PropTypes.number,
  /**
  * Default initial page number
  */
  defaultCurrent: PropTypes.number,
  /**
  * Number of data items per page
  */
  pageSize: PropTypes.number,
  /**
  * Default number of data items per page
  */
  defaultPageSize: PropTypes.number,
  /**
  * Total number of data items
  */
  total: PropTypes.number,
  /**
  * Called when the page number or pageSize is changed, and it takes the resulting page number and pageSize as its arguments `function(page, pageSize)`
  */
  onChange: PropTypes.func,
}

Pagination.defaultProps = {
  defaultCurrent: 1,
  defaultPageSize: 10,
};