import CalendarCell from '../calendar-cell/CalendarCell'
import MonthSalary from '../month-salary/MonthSalary'
import React, { RefObject } from 'react'
import { DAY_NAMES, MONTHS } from '../../../mocks/mocks'
import { useAppSelector } from '../../../redux/reduxHooks'
import {
  StyledWorkCalendar,
  StyledWorkCalendarCaption,
  StyledWorkCalendarFigure,
  StyledWorkCalendarWrapper,
  StyledDayName
} from './styled'

interface WorkCalendarProps {
  title: string
  month: number
  ref?: RefObject<HTMLElement>
}

function WorkCalendar ({ title, month, ref }: WorkCalendarProps): JSX.Element {
  const calendar = useAppSelector(state => state.calendar.calendar)

  return (
    <StyledWorkCalendar ref={ref}>
      <h3 className='visually-hidden'>График за месяц {MONTHS[month]}</h3>
      <StyledWorkCalendarFigure>
        <StyledWorkCalendarCaption>{title}</StyledWorkCalendarCaption>
        <StyledWorkCalendarWrapper>
          {DAY_NAMES.map((item, index) => (
            <StyledDayName key={`${index}day`}>{item}</StyledDayName>
          ))}
          {calendar.length > 0 &&
            calendar[(!Number.isNaN(month)) && month < 12 ? month : 0].map((day, index) => (
              <CalendarCell
                dayObject={{
                  month,
                  dayIndex: day.dayIndex ?? 0,
                  day: day.day ?? 0,
                  hDay: day.hDay ?? false,
                  activity: day.activity ?? 0,
                  extra: day.extra ?? false,
                  money: day.money ?? 0
                }}
                key={`${index}cell`}
              >
                {day.day}
              </CalendarCell>
            ))}
        </StyledWorkCalendarWrapper>
        <MonthSalary month={month}/>
      </StyledWorkCalendarFigure>
    </StyledWorkCalendar>
  )
}

export default React.forwardRef(WorkCalendar)
