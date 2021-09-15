import React from 'react';

import { Button } from './Button';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  primary: true,
  label: 'Button',
};

Primary.parameters = {
  storyDescription: 'Shows primary button'
}

export const Secondary = Template.bind({});

Secondary.args = {
  label: 'Button',
};

Secondary.parameters = {
  storyDescription: 'Shows secondary button'
}

export const Large = Template.bind({});

Large.args = {
  size: 'large',
  label: 'Button',
};

Large.parameters = {
  storyDescription: 'Shows large button size'
}

export const Small = Template.bind({});

Small.args = {
  size: 'small',
  label: 'Button',
};

Small.parameters = {
  storyDescription: 'Shows small button size'
}
