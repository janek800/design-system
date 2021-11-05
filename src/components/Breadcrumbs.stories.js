import { Breadcrumbs } from './Breadcrumbs';

import { ReactComponent as CrossedSquare } from '../assets/icon/crossedSquare.svg';

export default {
  title: 'Components/Breadcrumbs',
  component: Breadcrumbs,
  argTypes: {
  },
};

const Template = (args) => (
  <Breadcrumbs {...args} />
);

export const BreadcrumbsDefault = Template.bind({});

BreadcrumbsDefault.args = {
  items: [<span>Item 1</span>, <a href="">Item 2</a>, <a href="">Item 3</a>, <a href="">Item 4</a>]
};

BreadcrumbsDefault.parameters = {
  docs: {
    storyDescription: 'Shows Breadcrumbs'
  }
};

export const BreadcrumbsIcon = Template.bind({});

BreadcrumbsIcon.args = {
  items: [
    <span><CrossedSquare  width="12" height="12"/> Item 1</span>, 
    <a href=""><CrossedSquare width="12" height="12"/> Item 2</a>, 
    <a href=""><CrossedSquare  width="12" height="12"/> Item 3</a>, 
    <a href=""><CrossedSquare  width="12" height="12"/> Item 4</a>]
};

BreadcrumbsIcon.parameters = {
  docs: {
    storyDescription: 'Shows Breadcrumbs with icons'
  }
};
