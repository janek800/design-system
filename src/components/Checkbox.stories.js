import { Checkbox } from './Checkbox';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  argTypes: {
  },
};

const Template = (args) => (
    <Checkbox {...args} />
);

export const CheckboxButton = Template.bind({});

CheckboxButton.args = {
  checked: false,
  defaultChecked: false,
  indeterminate: false,
  disabled: false,
  autoFocus: false,
  onChange: undefined
};

CheckboxButton.parameters = {
  docs: {
    storyDescription: 'Shows Checkbox'
  }
};