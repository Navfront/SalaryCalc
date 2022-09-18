import { StyledMonthSalary } from './styled'

interface MonthSalaryProps {
  month: number
}

function MonthSalary ({ month }: MonthSalaryProps): JSX.Element {
  return <StyledMonthSalary>{0}</StyledMonthSalary>
}

export default MonthSalary
