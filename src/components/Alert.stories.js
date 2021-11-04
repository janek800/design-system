import { Alert } from './Alert';

export default {
  title: 'Components/Alert',
  component: Alert,
  argTypes: {
    type: {control: { type: "select", options: [
      'default', 
      'alert', 
      'success', 
      'info', 
      'warning'
    ]}},
  },
};

const Template = (args) => (
    <Alert {...args} />
);

export const AlertDefault = Template.bind({});

AlertDefault.args = {
  type: "default",
  message: "Generic Message",
  action: <div style={{color: "#2183DF"}}>ACTION</div>
};

AlertDefault.parameters = {
  docs: {
    storyDescription: 'Shows default Alert'
  }
};

export const AlertError = Template.bind({});

AlertError.args = {
  type: "alert",
  message: "Alert Message",
  action: <div style={{color: "#212121"}}>ACTION</div>
};

AlertError.parameters = {
  docs: {
    storyDescription: 'Shows Alert'
  }
};

export const AlertSuccess = Template.bind({});

AlertSuccess.args = {
  type: "success",
  message: "Success Message",
  action: <div style={{color: "#212121"}}>ACTION</div>
};

AlertSuccess.parameters = {
  docs: {
    storyDescription: 'Shows success Alert'
  }
};

export const AlertInfo = Template.bind({});

AlertInfo.args = {
  type: "info",
  message: "Info Message",
  action: <div style={{color: "#212121"}}>ACTION</div>
};

AlertInfo.parameters = {
  docs: {
    storyDescription: 'Shows info Alert'
  }
};

export const AlertWarning = Template.bind({});

AlertWarning.args = {
  type: "warning",
  message: "warning Message",
  action: <div style={{color: "#212121"}}>ACTION</div>
};

AlertWarning.parameters = {
  docs: {
    storyDescription: 'Shows warning Alert'
  }
};
