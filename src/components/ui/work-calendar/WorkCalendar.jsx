import React from 'react';
import {
  StyledWorkCalendar,
  StyledWorkCalendarCaption,
  StyledWorkCalendarFigure,
  StyledWorkCalendarWrapper,
  StyledDayName,
} from './styled';

import CalendarCell from './../calendar-cell/CalendarCell';
import { useSelector } from 'react-redux';
import { DAY_NAMES, MONTHS } from './../../../mocks/mocks';
import MonthSalary from '../month-salary/MonthSalary';

function WorkCalendar({ title, month }, ref) {
  const calendar = useSelector((state) => state.calendarReducer);


  return (
    <StyledWorkCalendar ref={ref}>
      <h3 className='visually-hidden'>График за месяц {MONTHS[month]}</h3>
      <StyledWorkCalendarFigure>
        <StyledWorkCalendarCaption>{title}</StyledWorkCalendarCaption>
        <StyledWorkCalendarWrapper>
          {DAY_NAMES.map((item, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <StyledDayName key={index}>{item}</StyledDayName>
          ))}
          {calendar &&
            calendar.length &&
            calendar[month && month < 12 ? month : 0].map((item, index) => (
              <CalendarCell
                dayObject={{
                  month,
                  dayIndex: item.dayIndex,
                  day: item.day,
                  hDay: item.hDay,
                  activity: item.activity || null,
                  extra: item.extra || null,
                  money: item.money || 0,
                }}
                isHday={item.hDay}
                // eslint-disable-next-line react/no-array-index-key
                key={index}
              >
                {item.day}
              </CalendarCell>
            ))}
        </StyledWorkCalendarWrapper>
        <MonthSalary month={month}/>
      </StyledWorkCalendarFigure>
    </StyledWorkCalendar>
  );
}

export default React.forwardRef(WorkCalendar);
