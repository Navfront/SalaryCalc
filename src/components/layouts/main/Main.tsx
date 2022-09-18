import About from '../../blocks/about/About'
import Container from '../container/Container'
import dayjs from 'dayjs'
import MonthFilter from '../../ui/month-filter/MonthFilter'
import React, { MutableRefObject, useEffect } from 'react'
import { StyledMain } from './styled'
import { MONTHS } from '../../../mocks/mocks'

import { useAppSelector } from '../../../redux/reduxHooks'
import WorkCalendar from '../../ui/work-calendar/WorkCalendar'
import { useAppDispatch } from './../../../redux/reduxHooks'
import { resetCalendar } from '../../../redux/slices/calendar-slice'
import { twentytwo } from './../../../mocks/mocks'

function Main (): JSX.Element {
  const calendar = useAppSelector(state => state.calendar.calendar)
  const filter = useAppSelector(state => state.app.monthFilter)
  const dispatch = useAppDispatch()
  const currentMonth = dayjs().month()
  console.log(calendar)
  const currentMonthRef = React.useRef<HTMLElement>() as MutableRefObject<HTMLElement>

  const canIRender = (index: number): boolean => {
    switch (filter.showType) {
      case 0:
        return true
      case 1:
        return index === filter.showMonth || index === filter.showMonth - 1
      case 2:
        return index === filter.showMonth
      default:
        return false
    }
  }

  useEffect(() => {
    dispatch(resetCalendar(twentytwo))
  }, [])

  return (
    <StyledMain>
      <Container>
        <About currentMonthRef={currentMonthRef}/>
        <MonthFilter />
          {calendar.map((item, index) => {
            if (canIRender(index)) {
              return (<WorkCalendar
                ref={currentMonth === index ? currentMonthRef : null}
                title={MONTHS[index]}
                key={`${index}month`}
                month={index}
              />
              )
            }
            return ''
          }
          )}
      </Container>
    </StyledMain>
  )
}

export default Main
