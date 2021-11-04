import React from 'react';

import { Input } from './Input';
import { ReactComponent as CrossedSquare } from '../assets/icon/crossedSquare.svg';

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    type: {control: { type: "select", options: [
      'textField',
      'textField1',
      'textField2',
      'textField3',
      'textArea',
      'search',
    ]}},
  },
};

const Template = (args) => (
  <div className="input-wrapper">
    <Input {...args} />
  </div>
);

export const TextField = Template.bind({});

TextField.args = {
  type: "textField",
  label: "Label",
  assistiveText: "Assistive text",
  disabled: false,
  error: false,
  placeholder: "Text field (Placeholder)",
  prefix: <CrossedSquare />,
  onChange: undefined,
  onPressEnter: undefined,
};

TextField.parameters = {
  docs: {
    storyDescription: 'Shows text field'
  }
}

export const TextArea = Template.bind({});

TextArea.args = {
  type: "textArea",
  label: "Label",
  assistiveText: "Assistive text",
  disabled: false,
  error: false,
  placeholder: "Text area (Placeholder)",
  prefix: <CrossedSquare />,
  onResize: undefined,
  onChange: undefined,
  onPressEnter: undefined,
};

TextArea.parameters = {
  docs: {
    storyDescription: 'Shows text field'
  }
}

export const TextField1 = Template.bind({});

TextField1.args = {
  type: "textField1",
  label: "Label",
  assistiveText: "Assistive text",
  disabled: false,
  error: false,
  placeholder: "Text field 1 (Placeholder)",
  prefix: <CrossedSquare />,
  onChange: undefined,
  onPressEnter: undefined,
};

TextField1.parameters = {
  docs: {
    storyDescription: 'Shows text field 1'
  }
}

export const TextField2 = Template.bind({});

TextField2.args = {
  type: "textField2",
  assistiveText: "Assistive text",
  disabled: false,
  error: false,
  placeholder: "Text field 2 (Placeholder)",
  prefix: <CrossedSquare />,
  onChange: undefined,
  onPressEnter: undefined,
};

TextField2.parameters = {
  docs: {
    storyDescription: 'Shows text field 2'
  }
}

export const TextField3 = Template.bind({});

TextField3.args = {
  type: "textField3",
  assistiveText: "Assistive text",
  disabled: false,
  error: false,
  placeholder: "Text field 2 (Placeholder)",
  onChange: undefined,
  onPressEnter: undefined,
};

TextField3.parameters = {
  docs: {
    storyDescription: 'Shows text field 2'
  }
}

export const SearchBox = Template.bind({});

SearchBox.args = {
  type: "search",
  assistiveText: "Assistive text",
  disabled: false,
  error: false,
  placeholder: "Text field 2 (Placeholder)",
  onSearch: undefined,
  onPressEnter: undefined,
};

SearchBox.parameters = {
  docs: {
    storyDescription: 'Shows text field 2'
  }
}
