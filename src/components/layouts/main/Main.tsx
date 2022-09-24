import About from '../../blocks/about/About'
import Container from '../container/Container'
import MonthFilter from '../../ui/month-filter/MonthFilter'
import React from 'react'
import { StyledMain } from './styled'
import { CalendarWrapper } from './../../ui/calendar-wrapper/calendar-wrapper'

function Main (): JSX.Element {
  return (
    <StyledMain>
      <Container>
        <About/>
        <MonthFilter />
        <CalendarWrapper />
      </Container>
    </StyledMain>
  )
}

export default React.memo(Main)
