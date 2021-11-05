import React from 'react';

import { Button } from './Button';
import { ReactComponent as ArrowUp } from '../assets/icon/arrowUp.svg';
import { ReactComponent as ArrowUpBlue } from '../assets/icon/arrowUpBlue.svg';
import { ReactComponent as Plus } from '../assets/icon/plus.svg';
import { ReactComponent as PlusBlue } from '../assets/icon/plusBlue.svg';
import { ReactComponent as PlusBlack } from '../assets/icon/plusBlack.svg';
import { ReactComponent as AlignLeft } from '../assets/icon/alignLeft.svg';
import { ReactComponent as AlignCenter } from '../assets/icon/alignCenter.svg';
import { ReactComponent as AlignRight } from '../assets/icon/alignRight.svg';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    type: {control: { type: "select", options: [
      'primary', 
      "primaryGroupLeft", 
      "primaryGroupMiddle", 
      "primaryGroupRight", 
      'secondary', 
      "secondaryGroupLeft", 
      "secondaryGroupMiddle", 
      "secondaryGroupRight",
      "iconGroupLeft", 
      "iconGroupMiddle", 
      "iconGroupRight", 
      'floatingAction', 
      "floatingActionExtended",
      "text",
      "icon"
    ]}},
    size: {control: { type: "select", options: ["large", "medium", "small"]}},
  },
};

const Template = (args) => <Button {...args} >{args.label}</Button>;

export const Primary = Template.bind({});

Primary.args = {
  loading: false,
  type: "primary",
  label: 'Button (48px)',
  size: "large",
  disabled: false,
};

Primary.parameters = {
  docs: {
    storyDescription: 'Shows primary button, type: `primary`'
  }
}

export const PrimaryIcon = Template.bind({});

PrimaryIcon.args = {
  loading: false,
  type: "primary",
  label: 'Button (48px)',
  size: "large",
  disabled: false,
  icon: <ArrowUp />
};

PrimaryIcon.parameters = {
  docs: {
    storyDescription: 'Shows primary button with icon, type: `primaryIcon`'
  }
}

export const Secondary = Template.bind({});

Secondary.args = {
  loading: false,
  type: "secondary",
  label: 'Button (48px)',
  size: "large",
  disabled: false,
};

Secondary.parameters = {
  docs: {
    storyDescription: 'Shows secondary button, type: `secondary`'
  }
}

export const SecondaryIcon = Template.bind({});

SecondaryIcon.args = {
  loading: false,
  type: "secondary",
  label: 'Button (48px)',
  size: "large",
  disabled: false,
  icon: <ArrowUpBlue />
};

SecondaryIcon.parameters = {
  docs: {
    storyDescription: 'Shows secondary button with icon, type: `secondaryIcon`'
  }
}

export const FloatingActionButton = Template.bind({});

FloatingActionButton.args = {
  loading: false,
  type: "floatingAction",
  size: "large",
  disabled: false,
  icon: <Plus />
};

FloatingActionButton.parameters = {
  docs: {
    storyDescription: 'Shows primary floating action button, type: `floatingAction`'
  }
}

export const FloatingActionButtonExtended = Template.bind({});

FloatingActionButtonExtended.args = {
  loading: false,
  label: 'Extended FAB',
  type: "floatingActionExtended",
  size: "large",
  disabled: false,
  icon: <Plus />
};

FloatingActionButtonExtended.parameters = {
  docs: {
    storyDescription: 'Shows extended floating action button with text, type: `floatingActionExtended`'
  }
}

export const PrimaryGroupLeft = Template.bind({});

PrimaryGroupLeft.args = {
  loading: false,
  label: 'Left',
  type: "primaryGroupLeft",
  size: "large",
  disabled: false,
};

PrimaryGroupLeft.parameters = {
  docs: {
    storyDescription: 'Shows left primary group button, type: `primaryGroupLeft`'
  }
}

export const PrimaryGroupMiddle = Template.bind({});

PrimaryGroupMiddle.args = {
  loading: false,
  label: 'Middle',
  type: "primaryGroupMiddle",
  size: "large",
  disabled: false,
};

PrimaryGroupMiddle.parameters = {
  docs: {
    storyDescription: 'Shows middle primary group button, type: `primaryGroupMiddle`'
  }
}

export const PrimaryGroupRight = Template.bind({});

PrimaryGroupRight.args = {
  loading: false,
  label: "Right",
  type: "primaryGroupRight",
  size: "large",
  disabled: false,
};

PrimaryGroupRight.parameters = {
  docs: {
    storyDescription: 'Shows right primary group button, type: `primaryGroupRight`'
  }
}

export const SecondaryGroupLeft = Template.bind({});

SecondaryGroupLeft.args = {
  loading: false,
  label: 'Left',
  type: "secondaryGroupLeft",
  size: "large",
  disabled: false,
};

SecondaryGroupLeft.parameters = {
  docs: {
    storyDescription: 'Shows left secondary group button, type: `secondaryGroupLeft`'
  }
}

export const SecondaryGroupMiddle = Template.bind({});

SecondaryGroupMiddle.args = {
  loading: false,
  label: 'Middle',
  type: "secondaryGroupMiddle",
  size: "large",
  disabled: false,
};

SecondaryGroupMiddle.parameters = {
  docs: {
    storyDescription: 'Shows middle secondary group button, type: `secondaryGroupMiddle`'
  }
}

export const SecondaryGroupRight = Template.bind({});

SecondaryGroupRight.args = {
  loading: false,
  label: "Right",
  type: "secondaryGroupRight",
  size: "large",
  disabled: false,
};

SecondaryGroupRight.parameters = {
  docs: {
    storyDescription: 'Shows right secondary group button, type: `secondaryGroupRight`'
  }
}

export const IconGroupLeft = Template.bind({});

IconGroupLeft.args = {
  loading: false,
  type: "iconGroupLeft",
  size: "large",
  disabled: false,
  icon: <AlignLeft />
};

IconGroupLeft.parameters = {
  docs: {
    storyDescription: 'Shows left icon group button, type: `iconGroupLeft`'
  }
}

export const IconGroupMiddle = Template.bind({});

IconGroupMiddle.args = {
  loading: false,
  type: "iconGroupMiddle",
  size: "large",
  disabled: false,
  icon: <AlignCenter />
};

IconGroupMiddle.parameters = {
  docs: {
    storyDescription: 'Shows middle icon group button, type: `iconGroupMiddle`'
  }
}

export const IconGroupRight = Template.bind({});

IconGroupRight.args = {
  loading: false,
  type: "iconGroupRight",
  size: "large",
  disabled: false,
  icon: <AlignRight />
};

IconGroupRight.parameters = {
  docs: {
    storyDescription: 'Shows right icon group button, type: `iconGroupRight`'
  }
}

export const Text = Template.bind({});

Text.args = {
  loading: false,
  label: "Text button (40px)",
  type: "text",
  size: "large",
  disabled: false,
  icon: <PlusBlue />
};

Text.parameters = {
  docs: {
    storyDescription: 'Shows text button, type: `text`'
  }
}

export const Icon = Template.bind({});

Icon.args = {
  loading: false,
  type: "icon",
  disabled: false,
  icon: <PlusBlack />
};

Icon.parameters = {
  docs: {
    storyDescription: 'Shows icon button, type: `icon`'
  }
}
