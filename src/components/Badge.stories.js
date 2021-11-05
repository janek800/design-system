import { Badge } from './Badge';

export default {
  title: 'Components/Badge',
  component: Badge,
  argTypes: {
    type: {control: { type: "select", options: [
      'primary',
      'important',
      'default',
      'green',
      'red',
    ]}},
  },
};

const Template = (args) => (
    <Badge {...args} >Badge</Badge>
);

export const BadgeDefault = Template.bind({});

BadgeDefault.args = {
  type: "default"
};

BadgeDefault.parameters = {
  docs: {
    storyDescription: 'Shows default Badge'
  }
};

export const BadgePrimary = Template.bind({});

BadgePrimary.args = {
  type: "primary"
};

BadgePrimary.parameters = {
  docs: {
    storyDescription: 'Shows primary Badge'
  }
};

export const BadgeImportant = Template.bind({});

BadgeImportant.args = {
  type: "important"
};

BadgeImportant.parameters = {
  docs: {
    storyDescription: 'Shows important Badge'
  }
};

export const BadgeGreen = Template.bind({});

BadgeGreen.args = {
  type: "green"
};

BadgeGreen.parameters = {
  docs: {
    storyDescription: 'Shows green Badge'
  }
};

export const BadgeRed = Template.bind({});

BadgeRed.args = {
  type: "red"
};

BadgeRed.parameters = {
  docs: {
    storyDescription: 'Shows red Badge'
  }
};