import { StyledDayMenuWrapper } from './styled'
import { useState } from 'react'
import { MONTHS } from '../../../mocks/mocks'
import { togglePopup } from '../../../redux/slices/app-slice'
import { useAppDispatch, useAppSelector } from '../../../redux/reduxHooks'
import { log } from 'console'

function DayMenu (): JSX.Element {
  const [extraCount, setExtraCount] = useState(3)
  const dispatch = useAppDispatch()
  const currentDay = useAppSelector(state => state.app.popup.data)
  console.log(currentDay)

  const closePopup = (): void => {
    dispatch(togglePopup({ isOpen: false }))
  }

  return (
    <StyledDayMenuWrapper>
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
              // setDay(setCalendarValue({ ...data, activity: 1, extra: null }))
              // cellActivityCallBack(1)
              // cellExtraCallBack(null)
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
              // setDay(setCalendarValue({ ...data, activity: 1, extra: extraCount }))
              // cellActivityCallBack(1)
              // cellExtraCallBack(extraCount)
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
              // setDay(setCalendarValue({ ...data, activity: 3, extra: null }))
              // cellActivityCallBack(3)
              // cellExtraCallBack(null)
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
              // setDay(setCalendarValue({ ...data, activity: 4, extra: null }))
              // cellActivityCallBack(4)
              // cellExtraCallBack(null)
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
              // setDay(setCalendarValue({ ...data, activity: 2, extra: null }))
              // cellActivityCallBack(2)
              // cellExtraCallBack(null)
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
              // setDay(setCalendarValue({ ...data, activity: null, extra: null }))
              // cellActivityCallBack(0)
              // cellExtraCallBack(null)
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
