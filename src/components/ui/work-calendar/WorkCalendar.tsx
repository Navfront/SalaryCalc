import CalendarCell from '../calendar-cell/CalendarCell'
import MonthSalary from '../month-salary/MonthSalary'
import React from 'react'
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

}

function WorkCalendar ({ title, month }: WorkCalendarProps): JSX.Element {
  const mcalendar = useAppSelector(state => state.calendar.calendar[month], (prev, next) => {
    return typeof prev === typeof next
  })

  return (
    <StyledWorkCalendar >
      <h3 className='visually-hidden'>График за месяц {MONTHS[month]}</h3>
      <StyledWorkCalendarFigure>
        <StyledWorkCalendarCaption>{title}</StyledWorkCalendarCaption>
        <StyledWorkCalendarWrapper>
          {DAY_NAMES.map((item, index) => (
            <StyledDayName key={`${index}day`}>{item}</StyledDayName>
          ))}
          {mcalendar.length > 0 &&
            mcalendar.map((day, index) => (
              <CalendarCell
                data-month={`${month}`}
                data-day={`${String(day.day)}`}
                dayObject={{
                  month,
                  dayIndex: day.dayIndex ?? 0,
                  day: day.day ?? 0,
                  hDay: day.hDay ?? false,
                  activity: day.activity ?? null,
                  extra: day.extra ?? 0,
                  money: day.money ?? 0,
                  i: index
                }}
                key={`${month}-${index}cell`}
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

export default React.memo(WorkCalendar)
