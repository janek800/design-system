import { Radio } from './Radio';

export default {
  title: 'Components/Radio',
  component: Radio,
  argTypes: {
  },
};

const Template = (args) => (
    <Radio {...args} />
);

export const RadioButton = Template.bind({});

RadioButton.args = {
  checked: false,
  defaultChecked: true,
  disabled: false,
  autoFocus: false,
  onChange: undefined
};

RadioButton.parameters = {
  docs: {
    storyDescription: 'Shows Radio'
  }
};