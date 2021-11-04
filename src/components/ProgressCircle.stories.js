import { ProgressCircle } from './ProgressCircle';

export default {
  title: 'Components/ProgressCircle',
  component: ProgressCircle,
  argTypes: {
    size: {control: { type: "select", options: [
      'small', 
      'medium', 
      'large'
    ]}},
  },
};

const Template = (args) => (
    <ProgressCircle {...args} />
);

export const ProgressCircleLarge = Template.bind({});

ProgressCircleLarge.args = {
  percent: 75,
  size: "large"
};

ProgressCircleLarge.parameters = {
  docs: {
    storyDescription: 'Shows large Progress Circle'
  }
};

export const ProgressCircleMedium = Template.bind({});

ProgressCircleMedium.args = {
  percent: 75,
  size: "medium"
};

ProgressCircleMedium.parameters = {
  docs: {
    storyDescription: 'Shows medium Progress Circle'
  }
};

export const ProgressCircleSmall = Template.bind({});

ProgressCircleSmall.args = {
  percent: 75,
  size: "small"
};

ProgressCircleSmall.parameters = {
  docs: {
    storyDescription: 'Shows small Progress Circle'
  }
};
