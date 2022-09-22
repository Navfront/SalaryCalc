import { useEffect } from 'react'
import { MONTHS, twentytwo } from '../../../mocks/mocks'
import { useAppDispatch, useAppSelector } from '../../../redux/reduxHooks'
import { togglePopup } from '../../../redux/slices/app-slice'
import { resetCalendar } from '../../../redux/slices/calendar-slice'
import WorkCalendar from '../work-calendar/WorkCalendar'

export const CalendarWrapper = (): JSX.Element => {
  const calendar = useAppSelector(state => state.calendar.calendar, (prev, next) => {
    return prev.length === next.length
  })
  const dispatch = useAppDispatch()
  const filter = useAppSelector(state => state.app.monthFilter)

  useEffect(() => {
    // gen.getData().then(data => {
    //   dispatch(resetCalendar(data))
    // }).catch(e => console.log)

    dispatch(resetCalendar(twentytwo))

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
            currMonth: targetDayData.month ?? 0,
            currI: targetDayData.i ?? 0,
            currMoney: targetDayData.money ?? 0
          }
        }))
      }
    }

    window.addEventListener('click', cellClickHandler)
    return () => {
      window.removeEventListener('click', cellClickHandler)
    }
  }, [calendar])

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
                {calendar.map((item, index) => {
                  if (canIRender(index)) {
                    return (<WorkCalendar
                title={MONTHS[index]}
                key={`${index}month`}
                month={index}
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
