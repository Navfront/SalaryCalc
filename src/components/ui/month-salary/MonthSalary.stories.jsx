import MonthSalary from './MonthSalary';

export default {
  title: 'UI/MonthSalary',
  component: MonthSalary,
  agrTypes: {
    month: { control: 'number'  },
  },
};

function Template(args) {
  return <MonthSalary {...args}/>;
}

export const Example = Template.bind({});
Example.args = {
  month: 3
};
