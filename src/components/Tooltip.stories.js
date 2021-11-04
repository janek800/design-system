import { Tooltip } from './Tooltip';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
  argTypes: {
    placement: {control: { type: "select", options: [
      'top', 
      'left', 
      'right', 
      'bottom', 
      'topLeft', 
      'topRight', 
      'bottomLeft', 
      'bottomRight', 
      'leftTop', 
      'leftBottom`', 
      'rightTop', 
      'rightBottom',
    ]}},
    trigger: {control: { type: "select", options: [
      'hover', 
      'focus', 
      'click',
    ]}},
  },
};

const Template = (args) => (
    <div className="tooltip-wrapper">
      <Tooltip {...args} >
        Tooltip on this text
      </Tooltip>
    </div>
);

export const TooltipTop = Template.bind({});

TooltipTop.args = {
  trigger: "hover",
  title: "Caption",
  placement: "top"
};

TooltipTop.parameters = {
  docs: {
    storyDescription: 'Shows Tooltip on top'
  }
};

export const TooltipLeft = Template.bind({});

TooltipLeft.args = {
  trigger: "hover",
  title: "Caption",
  placement: "left"
};

TooltipLeft.parameters = {
  docs: {
    storyDescription: 'Shows Tooltip on left'
  }
};

export const TooltipRight = Template.bind({});

TooltipRight.args = {
  trigger: "hover",
  title: "Caption",
  placement: "right"
};

TooltipRight.parameters = {
  docs: {
    storyDescription: 'Shows Tooltip on right'
  }
};

export const TooltipBottom = Template.bind({});

TooltipBottom.args = {
  trigger: "hover",
  title: "Caption",
  placement: "bottom"
};

TooltipBottom.parameters = {
  docs: {
    storyDescription: 'Shows Tooltip on bottom'
  }
};

export const TooltipTopLeft = Template.bind({});

TooltipTopLeft.args = {
  trigger: "hover",
  title: "Caption",
  placement: "topLeft"
};

TooltipTopLeft.parameters = {
  docs: {
    storyDescription: 'Shows Tooltip on top left'
  }
};

export const TooltipTopRight = Template.bind({});

TooltipTopRight.args = {
  trigger: "hover",
  title: "Caption",
  placement: "topRight"
};

TooltipTopRight.parameters = {
  docs: {
    storyDescription: 'Shows Tooltip on top right'
  }
};

export const TooltipBottomLeft = Template.bind({});

TooltipBottomLeft.args = {
  trigger: "hover",
  title: "Caption",
  placement: "bottomLeft"
};

TooltipBottomLeft.parameters = {
  docs: {
    storyDescription: 'Shows Tooltip on bottom left'
  }
};

export const TooltipBottomRight = Template.bind({});

TooltipBottomRight.args = {
  trigger: "hover",
  title: "Caption",
  placement: "bottomRight"
};

TooltipBottomRight.parameters = {
  docs: {
    storyDescription: 'Shows Tooltip on bottom right'
  }
};

export const TooltipLeftTop = Template.bind({});

TooltipLeftTop.args = {
  trigger: "hover",
  title: "Caption",
  placement: "leftTop"
};

TooltipLeftTop.parameters = {
  docs: {
    storyDescription: 'Shows Tooltip on left top'
  }
};

export const TooltipLeftBottom = Template.bind({});

TooltipLeftBottom.args = {
  trigger: "hover",
  title: "Caption",
  placement: "leftBottom"
};

TooltipLeftBottom.parameters = {
  docs: {
    storyDescription: 'Shows Tooltip on left bottom'
  }
};

export const TooltipRightTop = Template.bind({});

TooltipRightTop.args = {
  trigger: "hover",
  title: "Caption",
  placement: "rightTop"
};

TooltipRightTop.parameters = {
  docs: {
    storyDescription: 'Shows Tooltip on right top'
  }
};

export const TooltipRightBottom = Template.bind({});

TooltipRightBottom.args = {
  trigger: "hover",
  title: "Caption",
  placement: "rightBottom"
};

TooltipRightBottom.parameters = {
  docs: {
    storyDescription: 'Shows Tooltip on right tbottom'
  }
};
