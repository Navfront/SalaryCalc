import dayjs from 'dayjs'
import DaysDataGenerator from '../../../api/days-data-generator'
import WorkCalendar from '../work-calendar/WorkCalendar'
import { useEffect, useState } from 'react'
import { MONTHS } from '../../../mocks/mocks'
import { useAppDispatch, useAppSelector } from '../../../redux/reduxHooks'
import { togglePopup } from '../../../redux/slices/app-slice'
import { resetCalendar } from '../../../redux/slices/calendar-slice'

export const CalendarWrapper = (): JSX.Element => {
  const calendar = useAppSelector(state => state.calendar.calendar, (prev, next) => {
    return prev.length === next.length
  })
  const dispatch = useAppDispatch()
  const filter = useAppSelector(state => state.app.monthFilter)
  const dayDataInstance = new DaysDataGenerator()
  const [message, setMessage] = useState('')

  const cellClickHandler = (event: MouseEvent): void => {
    const target = event.target as HTMLElement
    if (target.classList.contains('cell')) {
      const { m, i } = target.dataset

      const targetDayData = calendar[Number(m)][Number(i)]
      dispatch(togglePopup({
        isOpen: true,
        data: {
          currActivity: targetDayData.activity ?? null,
          currDayIndex: targetDayData.dayIndex ?? 0,
          currHDay: targetDayData.hDay ?? false,
          currDay: targetDayData.day ?? 0,
          currExtra: targetDayData.extra ?? 0,
          currMonth: Number(m),
          currI: Number(i),
          currMoney: targetDayData.money ?? 0
        }
      }))
    }
  }

  useEffect(() => {
    const currentYear = dayjs().year().toString()
    const localData = localStorage.getItem(`holidays-${currentYear}`)
    if (localData === null || !(/[0-9]/gi.test(localData))) {
      setMessage('Загрузка...')
      dayDataInstance.getData().then(data => {
        if (Array.isArray(data)) {
          setMessage('')
          dispatch(resetCalendar(data))
        } else {
          setMessage(data)
          console.log('message: ', data)
        }
      }).catch((e: string) => {
        setMessage(e)
        console.log('err', e)
      })
    }

    window.addEventListener('click', cellClickHandler)
    return () => {
      window.removeEventListener('click', cellClickHandler)
    }
  }, [])

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

  return (
    <>
      {(message.length !== 0) ? <p >{String(message)}</p> : ''}
                {calendar.map((item, index) => {
                  if (canIRender(index)) {
                    return (<WorkCalendar
                title={MONTHS[index]}
                key={`${index}month`}
                month={index}
                className={dayjs().month() === index ? 'current-month' : ''}
              />
                    )
                  }
                  return ''
                }
                )}
        </>
  )
}

export default CalendarWrapper
