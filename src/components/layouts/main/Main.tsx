import About from '../../blocks/about/About'
import Container from '../container/Container'
import MonthFilter from '../../ui/month-filter/MonthFilter'
import React, { MutableRefObject } from 'react'
import { StyledMain } from './styled'
import { CalendarWrapper } from './../../ui/calendar-wrapper/calendar-wrapper'
function Main (): JSX.Element {
  const currentMonthRef = React.useRef<HTMLElement>() as MutableRefObject<HTMLElement>

  return (
    <StyledMain>
      <Container>
        <About currentMonthRef={currentMonthRef}/>
        <MonthFilter />
        <CalendarWrapper />
      </Container>
    </StyledMain>
  )
}

export default React.memo(Main)
