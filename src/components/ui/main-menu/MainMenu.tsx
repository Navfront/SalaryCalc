import { useAppSelector } from '../../../redux/reduxHooks'
import { StyledMainMenuLayout, StyledMainMenuTitle } from './styled'
import { useAppDispatch } from './../../../redux/reduxHooks'
import { useRef, MutableRefObject } from 'react'
import { setDefaultRate, setExtraRate, setMontageExtraRate, setMontageRate, setPauseRate, setSickRate } from '../../../redux/slices/rates-slice'

function MainMenu (): JSX.Element {
  const isMenuOpen = useAppSelector(state => state.app.isMenuOpen)
  const { defaultRate, extraRate, pauseRate, sickRate, montageRate, montageExtraRate } = useAppSelector(state => state.rates)
  const dispatch = useAppDispatch()

  const defaultRateInputRef = useRef() as MutableRefObject<HTMLInputElement>
  const extraRateInputRef = useRef() as MutableRefObject<HTMLInputElement>
  const pauseRateInputRef = useRef() as MutableRefObject<HTMLInputElement>
  const sickRateInputRef = useRef() as MutableRefObject<HTMLInputElement>
  const montageRateInputRef = useRef() as MutableRefObject<HTMLInputElement>
  const montageExtraRateInputRef = useRef() as MutableRefObject<HTMLInputElement>

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
          <label htmlFor="montageRate">Монтаж часы</label>
          <p>
            <input ref={montageRateInputRef} id="montageRate" type="number" placeholder="0" />
            <button
              type="button"
              onClick={() => {
                dispatch(setMontageRate(Number(montageRateInputRef.current.value)))
              }}
            >
              уст.
            </button>
            <span>{(!Number.isNaN(montageRate)) ? `${montageRate}р./ч.` : 'загрузка..'}</span>
          </p>
          <label htmlFor="montageExtraRate">Монтаж пер.</label>
          <p>
            <input ref={montageExtraRateInputRef} id="montageExtraRate" type="number" placeholder="0" />
            <button
              type="button"
              onClick={() => {
                dispatch(setMontageExtraRate(Number(montageExtraRateInputRef.current.value)))
              }}
            >
              уст.
            </button>
            <span>{(!Number.isNaN(montageExtraRate)) ? `${montageExtraRate}р./ч.` : 'загрузка..'}</span>
          </p>
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

          <label htmlFor="pauseRate">Простой</label>
          <p>
            <input ref={pauseRateInputRef} id="pauseRate" type="number" placeholder="0" />
            <button
              type="button"
              onClick={() => {
                dispatch(setPauseRate(Number(pauseRateInputRef.current.value)))
              }}
            >
              уст.
            </button>
            <span>{(!Number.isNaN(pauseRate)) ? `${pauseRate}р./ч.` : 'загрузка..'}</span>
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
