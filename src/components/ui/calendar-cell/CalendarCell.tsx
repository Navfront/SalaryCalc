/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { StyledCalendarCell } from './styled'
import workingDayIcon from '../../../assets/work.svg'
import sickDayIcon from '../../../assets/sick.svg'
import palmDayIcon from '../../../assets/palm.svg'
import sandClock from '../../../assets/sandclock.svg'
import React, { PropsWithChildren, useState } from 'react'

interface DayObjectProps {
  dayObject: {
    month: number
    dayIndex: number
    day: number
    hDay: boolean
    activity: number
    extra: boolean
    money: number
  }
}

function CalendarCell ({ dayObject, children }: DayObjectProps & PropsWithChildren): JSX.Element {
  const [activityType, setActivityType] = useState(dayObject.activity)
  const [extra, setExtra] = useState(dayObject.extra)
  const isDay = !Number.isNaN(dayObject.day)
  const handlerCellOnClick = (): void => {
    // openDayMenu(togglePopup(dayObject, setActivityType, setExtra))
  }

  return (
    <StyledCalendarCell aria-label='Настройки дня' onClick={handlerCellOnClick} isHday={dayObject.hDay} isDay={isDay}>
      {children}
      {activityType === 1 ? <img width="20" height="20" src={workingDayIcon} alt="working day" /> : null}
      {activityType === 2 ? <img width="20" height="20" src={sickDayIcon} alt="sick day" /> : null}
      {activityType === 3 ? <img width="20" height="20" src={palmDayIcon} alt="vocation day" /> : null}
      {activityType === 4 ? <img width="20" height="20" src={sandClock} alt="waiting day" /> : null}

      {extra && activityType === 1 ? <span className="extraHours">+{extra}</span> : null}
    </StyledCalendarCell>
  )
}
export default CalendarCell
