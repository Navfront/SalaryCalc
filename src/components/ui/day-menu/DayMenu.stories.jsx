import DayMenu from './DayMenu';

export default {
  title: 'UI/DayMenu',
  component: DayMenu,
  agrTypes: {
    data: {
      day: { control: 'number' },
      month: { control: 'number' },
    },
  },
};

function Template(args) {
  return <DayMenu {...args}></DayMenu>;
}

export const Example = Template.bind({});
Example.args = {
  data: {
    day: 7,
    month: 4,
  },
};
