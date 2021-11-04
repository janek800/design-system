import React from 'react';

import { Toggle } from './Toggle';

export default {
  title: 'Components/Toggle',
  component: Toggle,
  argTypes: {
  },
};

const Template = (args) => (
    <Toggle {...args} />
);

export const Switch = Template.bind({});

Switch.args = {
  checked: undefined,
  defaultChecked: false,
  disabled: false,
  onChange: undefined,
  autoFocus: false
};

Switch.parameters = {
  docs: {
    storyDescription: 'Shows Toggle switch'
  }
}