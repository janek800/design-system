import { Pagination } from './Pagination';

export default {
  title: 'Components/Pagination',
  component: Pagination,
  argTypes: {
  },
};

const Template = (args) => (
    <Pagination {...args} />
);

export const PaginationSmall = Template.bind({});

PaginationSmall.args = {
  current: 1,
  defaultCurrent: 1,
  pageSize: 10,
  defaultPageSize: 10,
  total: 500,
};

PaginationSmall.parameters = {
  docs: {
    storyDescription: 'Shows small Pagination'
  }
};
