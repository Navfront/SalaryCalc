/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { StyledCalendarCell, StyledPlaceHolder } from './styled'
import workingDayIcon from '../../../assets/work.svg'
import sickDayIcon from '../../../assets/sick.svg'
import palmDayIcon from '../../../assets/palm.svg'
import sandClock from '../../../assets/sandclock.svg'
import craneIcon from '../../../assets/crane.svg'
import { PropsWithChildren } from 'react'
import { useAppDispatch, useAppSelector } from './../../../redux/reduxHooks'
import { togglePopup } from '../../../redux/slices/app-slice'

import { DayType } from '../../../types/calendar'

export interface DayObjectProps {
  dayObject: dayObject
}

interface dayObject extends DayType {
  month: number
  i: number
  dayIndex: number
  day: number
  hDay: boolean
  extra: number
  money: number
  activity: null | 1 | 2 | 3 | 4 | 5
}

function CalendarCell ({ dayObject, children }: DayObjectProps & PropsWithChildren): JSX.Element {
  const isDay = (dayObject.day !== 0)
  const { month: m, i } = dayObject
  const dayData = useAppSelector(state => state.calendar.calendar[m][i])
  const { activity: activityType, extra } = dayData
  const dispatch = useAppDispatch()
  const handlerCellOnClick = (): void => {
    dispatch(togglePopup({
      data: {
        currActivity: dayObject.activity,
        currDay: dayObject.day,
        currDayIndex: dayObject.dayIndex,
        currExtra: dayObject.extra,
        currHDay: dayObject.hDay,
        currMoney: dayObject.money,
        currMonth: dayObject.month,
        currI: dayObject.i
      },
      isOpen: true
    }))
  }

  return (
    dayObject.day === 0
      ? <StyledPlaceHolder isDay={isDay} isHday={dayObject.hDay}/>
      : <StyledCalendarCell aria-label={dayObject.day !== 0 ? `Настройки День ${dayObject.day}` : ''} onClick={handlerCellOnClick} isHday={dayObject.hDay} isDay={isDay}>
      {children}
      {activityType === 1 ? <img width="20" height="20" src={craneIcon} alt="working day" /> : null}
      {activityType === 2 ? <img width="20" height="20" src={sickDayIcon} alt="sick day" /> : null}
      {activityType === 3 ? <img width="20" height="20" src={palmDayIcon} alt="vocation day" /> : null}
      {activityType === 4 ? <img width="20" height="20" src={sandClock} alt="waiting day" /> : null}
      {activityType === 5 ? <img width="20" height="20" src={workingDayIcon} alt="montage day" /> : null}

      {extra !== null && (activityType === 1 || activityType === 5) ? <span className="extraHours">+{extra}</span> : null}
    </StyledCalendarCell>
  )
}
export default CalendarCell
