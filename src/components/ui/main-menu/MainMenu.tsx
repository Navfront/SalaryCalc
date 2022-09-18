import { useAppSelector } from '../../../redux/reduxHooks'
import { StyledMainMenuLayout, StyledMainMenuTitle } from './styled'
import { useAppDispatch } from './../../../redux/reduxHooks'
import { useRef, MutableRefObject } from 'react'
import { setDefaultRate, setExtraRate, setHolidayRate, setSickRate } from '../../../redux/slices/rates-slice'

function MainMenu (): JSX.Element {
  const isMenuOpen = useAppSelector(state => state.app.isMenuOpen)
  const { defaultRate, extraRate, holidayRate, sickRate } = useAppSelector(state => state.rates)
  const dispatch = useAppDispatch()

  const defaultRateInputRef = useRef() as MutableRefObject<HTMLInputElement>
  const extraRateInputRef = useRef() as MutableRefObject<HTMLInputElement>
  const holidayRateInputRef = useRef() as MutableRefObject<HTMLInputElement>
  const sickRateInputRef = useRef() as MutableRefObject<HTMLInputElement>

  return isMenuOpen
    ? (<StyledMainMenuLayout active={isMenuOpen}>
      <StyledMainMenuTitle>Настройки</StyledMainMenuTitle>
      <form
        action="#"
        method="post"
        onSubmit={(event) => {
          event.preventDefault()
        }}
      >
        <fieldset>
          <legend>Тарифы</legend>
          <label htmlFor="defaultRate">Обычные часы</label>
          <p>
            <input ref={defaultRateInputRef} id="defaultRate" type="number" placeholder="0" />
            <button
              type="button"
              onClick={() => {
                dispatch(setDefaultRate(Number(defaultRateInputRef.current.value)))
              }}
            >
              уст.
            </button>
            <span>{(!Number.isNaN(defaultRate)) ? `${defaultRate}р./ч.` : 'загрузка..'}</span>
          </p>
          <label htmlFor="extraRate">Переработка</label>
          <p>
            <input ref={extraRateInputRef} id="extraRate" type="number" placeholder="0" />
            <button
              type="button"
              onClick={() => {
                dispatch(setExtraRate(Number(extraRateInputRef.current.value)))
              }}
            >
              уст.
            </button>
            <span>{(!Number.isNaN(extraRate)) ? `${extraRate}р./ч.` : 'загрузка..'}</span>
          </p>
          <label htmlFor="holidayRate">Выходной день</label>
          <p>
            <input ref={holidayRateInputRef} id="holidayRate" type="number" placeholder="0" />
            <button
              type="button"
              onClick={() => {
                dispatch(setHolidayRate(Number(holidayRateInputRef.current.value)))
              }}
            >
              уст.
            </button>
            <span>{(!Number.isNaN(holidayRate)) ? `${holidayRate}р./ч.` : 'загрузка..'}</span>
          </p>
          <label htmlFor="sickRate">Больничный</label>
          <p>
            <input ref={sickRateInputRef} id="sickRate" type="number" placeholder="0" />
            <button
              type="button"
              onClick={() => {
                dispatch(setSickRate(Number(sickRateInputRef.current.value)))
              }}
            >
              уст.
            </button>
            <span>{(!Number.isNaN(sickRate)) ? `${sickRate}%` : 'загрузка..'}</span>
          </p>
        </fieldset>
      </form>
    </StyledMainMenuLayout>
      )
    : <>{''}</>
}

export default MainMenu
