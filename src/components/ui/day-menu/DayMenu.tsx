import { StyledDayMenuWrapper } from './styled'
import { useState } from 'react'
import { MONTHS } from '../../../mocks/mocks'
import { DayMenuData, togglePopup } from '../../../redux/slices/app-slice'
import { useAppDispatch, useAppSelector } from '../../../redux/reduxHooks'
import { log } from 'console'
import { setDay } from '../../../redux/slices/calendar-slice'

interface DayMenuProps {
  cellActivityCallback: (value: null | 1 | 2 | 3 | 4) => void
  cellExtraCallback: (value: number) => void
}

function DayMenu ({ cellActivityCallback, cellExtraCallback }: DayMenuProps): JSX.Element {
  const [extraCount, setExtraCount] = useState(3)
  const dispatch = useAppDispatch()
  const currentDay = useAppSelector(state => state.app.popup.data)
  const { currDay, currMonth, currExtra, currActivity, currI } = currentDay as DayMenuData
  const closePopup = (): void => {
    dispatch(togglePopup({ isOpen: false }))
  }

  return (
    <StyledDayMenuWrapper >
      <h2>Настройки Дня</h2>
      <p></p>
      <p>Выберите один из вариантов:</p>
      <form action="#" method="get">
        <div className="dayTitle">
          <span>{MONTHS[(currentDay != null) ? currentDay.currMonth : 0]}</span> <span className="dayNumber">{(currentDay != null) ? currentDay.currDay : 0}</span>
          { ((currentDay?.currHDay) ?? false) ? <span>(выходной)</span> : <span className="dayDescription">(рабочий день)</span>}
        </div>
        <div className="dayButtonWrapper">
          <button
            className="dayButton"
            type="button"
            onClick={() => {
              dispatch(setDay({
                day: currDay,
                month: currMonth,
                extra: null,
                activity: 1,
                i: currI
              }))
              closePopup()
            }}
          >
            8 Часов
          </button>
        </div>
        <div className="dayButtonWrapper">
          <button
            className="dayButton"
            type="button"
            onClick={() => {
              dispatch(setDay({
                day: currDay,
                month: currMonth,
                extra: extraCount,
                activity: 1,
                i: currI
              }))
              closePopup()
            }}
          >
            Переработка: <span> {extraCount}ч</span>
          </button>

          <div className="plusMinusWrapper">
            <button
              onClick={() => {
                setExtraCount(extraCount + 1)
              }}
              className="dayButtonPlus"
              type="button"
            >
              +
            </button>

            <button
              onClick={() => {
                setExtraCount(extraCount > 0 ? extraCount - 1 : extraCount)
              }}
              className="dayButtonMinus"
              type="button"
            >
              -
            </button>
          </div>
        </div>
        <div className="dayButtonWrapper">
          <button
            className="dayButton"
            type="button"
            onClick={() => {
              dispatch(setDay({
                day: currDay,
                month: currMonth,
                extra: null,
                activity: 3,
                i: currI
              }))
              closePopup()
            }}
          >
            Отпуск
          </button>
        </div>
        <div className="dayButtonWrapper">
          <button
            className="dayButton"
            type="button"
            onClick={() => {
              dispatch(setDay({
                day: currDay,
                month: currMonth,
                extra: null,
                activity: 4,
                i: currI
              }))
              closePopup()
            }}
          >
            Простой
          </button>
        </div>
        <div className="dayButtonWrapper">
          <button
            className="dayButton"
            type="button"
            onClick={() => {
              dispatch(setDay({
                day: currDay,
                month: currMonth,
                extra: null,
                activity: 2,
                i: currI
              }))
              closePopup()
            }}
          >
            Больничный
          </button>
        </div>
        <div className="dayButtonWrapper">
          <button
            className="dayButton"
            type="button"
            onClick={() => {
              dispatch(setDay({
                day: currDay,
                month: currMonth,
                extra: null,
                activity: null,
                i: currI
              }))
              closePopup()
            }}
          >
            Очистить
          </button>
        </div>
      </form>
    </StyledDayMenuWrapper>
  )
}

export default DayMenu
