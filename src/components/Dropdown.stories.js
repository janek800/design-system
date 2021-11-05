import { Dropdown } from './Dropdown';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  argTypes: {
  },
};

const Template = (args) => (
  <Dropdown {...args} />
);

export const DropdownDefault = Template.bind({});

DropdownDefault.args = {
  defaultValue: "Claire",
  options: ["Leon", "Claire", "Jill", "Chris"]
};

DropdownDefault.parameters = {
  docs: {
    storyDescription: 'Shows Dropdown'
  }
};
