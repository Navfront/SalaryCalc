import { StyledMonthSalary } from './styled'
import React, { useEffect, useState } from 'react'
import calcSalary from './../../../api/calcSalary'
import { useAppSelector } from '../../../redux/reduxHooks'

interface MonthSalaryProps {
  month: number
}

function MonthSalary ({ month }: MonthSalaryProps): JSX.Element {
  const monthData = useAppSelector(state => state.calendar.calendar[month])
  const rates = useAppSelector(state => state.rates)
  const [salary, setSalary] = useState('Считаем...')

  useEffect(() => {
    calcSalary(month, rates, monthData).then(res => setSalary(res)).catch(console.log)
  }, [monthData, rates])
  return <StyledMonthSalary tabIndex={0} aria-label={`${salary} рублей`}>{salary}</StyledMonthSalary>
}

export default React.memo(MonthSalary)
