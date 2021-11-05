import { Accordion } from './Accordion';

export default {
  title: 'Components/Accordion',
  component: Accordion,
  argTypes: {
  },
};

const Template = (args) => (
  <div className="accordion-wrapper ">
    <Accordion {...args} />
  </div>
    
);

export const AccordionDefault = Template.bind({});

AccordionDefault.args = {
  activeKey: 1,
  defaultActiveKey: 1,
  onChange: undefined,
  contents: [
    {header: "This is panel header 1", key: 1, content: <span>This is a demo option, and it’s visible! And, this one is the second line...</span>, collapsible: ""},
    {header: "This is panel header 2", key: 2, content: <span>This is a demo option 2</span>, collapsible: ""},
    {header: "This is panel header 3", key: 3, content: <span>This is a demo option 3</span>, collapsible: ""},
    {header: "This is panel header 4 (disabled)", key: 4, content: <span>This is a demo option 4</span>, collapsible: "disabled"},
    {header: "This is panel header 5", key: 5, content: <span>This is a demo option 5</span>, collapsible: ""},
  ],
};

AccordionDefault.parameters = {
  docs: {
    storyDescription: 'Shows Accordion'
  }
};