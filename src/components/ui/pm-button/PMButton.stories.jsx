import PMButton from './PMbutton';

export default {
  title: 'UI/PMButton',
  component: PMButton,
  agrTypes: {
    wSize: { control: 'string' },
    hSize: { control: 'string' },
    bgColor: { control: 'color' },
    paddings: { control: 'string' },
    textColor: { control: 'color' },
  },
};

function Template(args) {
  return <PMButton {...args}>Button</PMButton>;
}

export const Example = Template.bind({});
Example.args = {
  wSize: '270px',
  hSize: 'auto',
  bgColor: '#333',
  paddings: '5px',
  textColor: 'white',
};
