import React from 'react';
import PropTypes from 'prop-types';
import './input.css';
import "antd/dist/antd.css";
import { Input as InputAnt } from 'antd';

import { ReactComponent as AlertCircle } from '../assets/icon/alertCircle.svg';
import { ReactComponent as SearchIcon } from '../assets/icon/searchIcon.svg';

 const { TextArea, Search } = InputAnt;

 /**
 * UI component for data input
 */
 export const Input = ({ 
   type, 
   label, 
   assistiveText, 
   error, 
   placeholder, 
   prefix, 
   disabled, 
   onSearch, 
   onChange,
   onPressEnter,
   value,
   defaultValue,
   id,
   maxLength,
   autoSize,
   onResize,
  ...props }) => {
  
  let labelClassName; 
  if ( type === "textField" || type === "textField2" || type === "textArea" || type === "search"  ) {
    labelClassName = "label"
  } else {
    labelClassName = "label-text-field-1"
  };

  let disabledClassName; 
  if ( disabled && (type === "textField" || type === "textField2" || type === "textArea" || type === "search")) {
    disabledClassName = "label-disabled"
  } else if (disabled && type === "textField1"){
    disabledClassName = "label-text-field-1-disabled"
  } else {
    disabledClassName = ""
  };

  return (
    <div className="input-container">
      {label && 
        <div className={`${labelClassName} ${disabledClassName} ${error && "error"}`}>
          {label}
        </div>
      }
      {(type === "textField" || type === "textField1" || type === "textField2" || type === "textField3") && (
        <InputAnt
          prefix={prefix}
          suffix={error && <AlertCircle />}
          disabled={disabled}
          className={
            `input 
            ${type === "textField2" && "text-field-2"} 
            ${type === "textField3" && "text-field-2 text-field-3"} 
            ${error && "input-error"}`
          }
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          defaultValue={defaultValue}
          id={id}
          maxLength={maxLength}
          onPressEnter={onPressEnter}
          {...props}
        ></InputAnt>
      )}
      {type === "textArea" && (
        <TextArea
          disabled={disabled}
          className={`input text-area ${error && "input-error"}`}
          placeholder={placeholder}
          maxLength={maxLength}
          defaultValue={defaultValue}
          value={value}
          id={id}
          onPressEnter={onPressEnter}
          onResize={onResize}
        >
        </TextArea>
      )}
      {type === "search" && (
        <Search 
          enterButton={<SearchIcon/>}
          onSearch={onSearch}
          disabled={disabled}
          allowClear={true}
          className={`search-box ${error && "input-error"}`}
          placeholder={placeholder}
          value={value}
          defaultValue={defaultValue}
          id={id}
          maxLength={maxLength}
          onPressEnter={onPressEnter}
        >
        </Search>
      )}
      {assistiveText && <div className={`assistive-text ${error && "error"} ${disabled && "assistive-text-disabled"}`}>{assistiveText}</div>}
    </div>
  );
};

Input.propTypes = {
  /**
  * Type of input
  */
  type: PropTypes.oneOf(['textField', 'textField1', 'textField2', "textField3", 'textArea', 'search']),
  /**
  * The ID for input
  */
  id: PropTypes.string,
  /**
   * Label text above input
   */
  label: PropTypes.string,
   /**
   * Assistive text below input
   */
  assistiveText: PropTypes.string,
  /**
  * Changes input style to display error (use `assistiveText` prop to display error message)
  */
  error: PropTypes.bool,
  /**
   * Placeholder message inside input
   */
  placeholder: PropTypes.string,
  /**
  * Actions are not available for input
  */
  disabled: PropTypes.bool,
  /**
  * Icon component to be displayed inside input on right side
  */
  prefix: PropTypes.element,
  /**
   * Callback when user input `function(e)`
  */
  onChange: PropTypes.func,
  /**
   * The callback function that is triggered when Enter key is pressed `function(e)`
  */
  onPressEnter: PropTypes.func,
  /**
    * The input content value
   */
  value: PropTypes.string,
  /**
   * 	The initial input content
  */
  defaultValue: PropTypes.string,
  /**
   * 	The max length
  */
  maxLength: PropTypes.number,
  /**
   * Search Box only, callback function triggered when you click on the search-icon, the clear-icon or press the Enter key `function(value, event)`
  */
  onSearch: PropTypes.func,
  /**
   * Text Area only, callback function that is triggered when resize `function({ width, height })`
  */
  onResize: PropTypes.func,
};

Input.defaultProps = {
  disabled: false,
  error: false,
}