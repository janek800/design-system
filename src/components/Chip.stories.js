import { Chip } from './Chip';

import { ReactComponent as CrossIcon } from '../assets/icon/cross.svg';
import { ReactComponent as AvatarIcon } from '../assets/icon/avatar.svg';

export default {
  title: 'Components/Chip',
  component: Chip,
  argTypes: {
  },
};

const Template = (args) => (
    <Chip {...args} >Caption</Chip>
);

export const ChipDefault = Template.bind({});

ChipDefault.args = {
  active: false,
  visible: true,
  closable: false,
};

ChipDefault.parameters = {
  docs: {
    storyDescription: 'Shows Chip'
  }
};

export const ChipIcon = Template.bind({});

ChipIcon.args = {
  active: false,
  visible: true,
  closable: false,
  icon: <AvatarIcon />,
};

ChipIcon.parameters = {
  docs: {
    storyDescription: 'Shows Chip with icon'
  }
};

export const ChipClosable = Template.bind({});

ChipClosable.args = {
  active: false,
  visible: true,
  closable: true,
  closeIcon: <CrossIcon width="16" height="16"/>,
};

ChipClosable.parameters = {
  docs: {
    storyDescription: 'Shows closable Chip'
  }
};
