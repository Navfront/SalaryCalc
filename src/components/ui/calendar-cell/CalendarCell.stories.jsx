import CalendarCell from './CalendarCell';

export default {
  title: 'UI/CalendarCell',
  component: CalendarCell,
  agrTypes: {
    dayObject: {
      day: { control: 'number' },
      month: { control: 'number' },
    },
  },
};

function Template(args) {
  return <CalendarCell {...args}>31</CalendarCell>;
}

export const Example = Template.bind({});
Example.args = {
  dayObject: {
    day: 1,
    month: 1,
  },
};
