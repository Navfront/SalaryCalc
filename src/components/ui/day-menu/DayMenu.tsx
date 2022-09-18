import { StyledDayMenuWrapper } from './styled'
import { useState } from 'react'
import { MONTHS } from '../../../mocks/mocks'
import { DayMenuData, togglePopup } from '../../../redux/slices/app-slice'
import { useAppDispatch, useAppSelector } from '../../../redux/reduxHooks'
import { setDay } from '../../../redux/slices/calendar-slice'

function DayMenu (): JSX.Element {
  const [extraCount, setExtraCount] = useState(3)
  const [montageExtraCount, setMontageExtraCount] = useState(3)
  const dispatch = useAppDispatch()
  const currentDay = useAppSelector(state => state.app.popup.data)
  const { currDay, currMonth, currI } = currentDay as DayMenuData
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
            aria-label='Установить монтажные часы'
            className="dayButton"
            type="button"
            onClick={() => {
              dispatch(setDay({
                day: currDay,
                month: currMonth,
                extra: null,
                activity: 5,
                i: currI
              }))
              closePopup()
            }}
          >
            Монтаж 8ч
          </button>
        </div>
        <div className="dayButtonWrapper">
          <button
            aria-label='Установить монтажные часы с переработкой.'
            className="dayButton"
            type="button"
            onClick={() => {
              dispatch(setDay({
                day: currDay,
                month: currMonth,
                extra: montageExtraCount,
                activity: 5,
                i: currI
              }))
              closePopup()
            }}
          >
            Монтаж Пер.: <span aria-label='Переработка на монтаже'> {montageExtraCount}ч</span>
          </button>

          <div className="plusMinusWrapper">
            <button
              onClick={() => {
                setMontageExtraCount(montageExtraCount + 1)
              }}
              className="dayButtonPlus"
              type="button"
            >
              +
            </button>

            <button
              onClick={() => {
                setMontageExtraCount(montageExtraCount > 0 ? montageExtraCount - 1 : montageExtraCount)
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
            aria-label='Установить обычные 8 часов.'
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
            8 Обычные
          </button>
        </div>
        <div className="dayButtonWrapper">
          <button
            aria-label='Установить обычные 8 часов, плюс переработка.'
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
            Обыч. Пер.: <span aria-label='Переработка'> {extraCount}ч</span>
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
            aria-label='Установить день отпуска'
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
            aria-label='Установить день простоя.'
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
            aria-label='Очистить день.'
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
