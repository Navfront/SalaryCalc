import { useAppSelector } from '../../../redux/reduxHooks'
import { StyledMainMenuLayout, StyledMainMenuTitle } from './styled'
import { useAppDispatch } from './../../../redux/reduxHooks'
import React, { useRef, MutableRefObject, useEffect } from 'react'
import { setDefaultRate, setExtraRate, setMontageExtraRate, setMontageRate, setPauseRate, setSickRate } from '../../../redux/slices/rates-slice'
import { toggleMenu } from '../../../redux/slices/app-slice'

function MainMenu (): JSX.Element {
  const isMenuOpen = useAppSelector(state => state.app.isMenuOpen)
  const { defaultRate, extraRate, pauseRate, sickRate, montageRate, montageExtraRate } = useAppSelector(state => state.rates)
  const dispatch = useAppDispatch()
  const layoutRef = React.createRef<HTMLDivElement & Element>()
  const defaultRateInputRef = useRef() as MutableRefObject<HTMLInputElement>
  const extraRateInputRef = useRef() as MutableRefObject<HTMLInputElement>
  const pauseRateInputRef = useRef() as MutableRefObject<HTMLInputElement>
  const sickRateInputRef = useRef() as MutableRefObject<HTMLInputElement>
  const montageRateInputRef = useRef() as MutableRefObject<HTMLInputElement>
  const montageExtraRateInputRef = useRef() as MutableRefObject<HTMLInputElement>

  useEffect(() => {
    if ((layoutRef?.current) !== null) {
      const layoutStyle = layoutRef.current.style

      setTimeout(() => { layoutStyle.opacity = isMenuOpen ? '1' : '0' }, 0)
      if (!isMenuOpen) {
        setTimeout(() => {
          layoutStyle.display = 'none'
        }, 300)
      } else {
        layoutStyle.display = 'block'
        montageRateInputRef.current.focus()
      }
    }
  }, [isMenuOpen])

  return <StyledMainMenuLayout ref={layoutRef} onKeyDown={(evt) => {
    if (evt.key === 'Esc' || evt.key === 'Escape') {
      dispatch(toggleMenu())
    }
  }}>
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
          <label aria-label='Почасовой тариф за монтаж.' htmlFor="montageRate">Монтаж часы</label>
          <p>
            <input ref={montageRateInputRef} id="montageRate" type="number" placeholder={montageRate.toString()} />
            <button
              aria-label='Установить тариф'
              type="button"
              onClick={() => {
                dispatch(setMontageRate(Number(montageRateInputRef.current.value)))
              }}
            >
              уст.
            </button>
            <span>{(!Number.isNaN(montageRate)) ? `${montageRate}р./ч.` : 'загрузка..'}</span>
          </p>
          <label aria-label='Почасовой тариф за переработку на монтаже.' htmlFor="montageExtraRate">Монтаж пер.</label>
          <p>
            <input ref={montageExtraRateInputRef} id="montageExtraRate" type="number" placeholder={montageExtraRate.toString()} />
            <button
              aria-label='Установить тариф'
              type="button"
              onClick={() => {
                dispatch(setMontageExtraRate(Number(montageExtraRateInputRef.current.value)))
              }}
            >
              уст.
            </button>
            <span>{(!Number.isNaN(montageExtraRate)) ? `${montageExtraRate}р./ч.` : 'загрузка..'}</span>
          </p>
          <label aria-label='Тариф обычной почасовой оплаты.' htmlFor="defaultRate">Обычные часы</label>
          <p>
            <input ref={defaultRateInputRef} id="defaultRate" type="number" placeholder={defaultRate.toString()} />
            <button
              aria-label='Установить тариф'
              type="button"
              onClick={() => {
                dispatch(setDefaultRate(Number(defaultRateInputRef.current.value)))
              }}
            >
              уст.
            </button>
            <span>{(!Number.isNaN(defaultRate)) ? `${defaultRate}р./ч.` : 'загрузка..'}</span>
          </p>
          <label aria-label='Тариф за обычную переработку.' htmlFor="extraRate">Переработка</label>
          <p>
            <input ref={extraRateInputRef} id="extraRate" type="number" placeholder={extraRate.toString()} />
            <button
              aria-label='Установить тариф'
              type="button"
              onClick={() => {
                dispatch(setExtraRate(Number(extraRateInputRef.current.value)))
              }}
            >
              уст.
            </button>
            <span>{(!Number.isNaN(extraRate)) ? `${extraRate}р./ч.` : 'загрузка..'}</span>
          </p>

          <label aria-label='Тариф почасовой оплаты за простой.' htmlFor="pauseRate">Простой</label>
          <p>
            <input ref={pauseRateInputRef} id="pauseRate" type="number" placeholder={pauseRate.toString()} />
            <button
              aria-label='Установить тариф'
              type="button"
              onClick={() => {
                dispatch(setPauseRate(Number(pauseRateInputRef.current.value)))
              }}
            >
              уст.
            </button>
            <span>{(!Number.isNaN(pauseRate)) ? `${pauseRate}р./ч.` : 'загрузка..'}</span>
          </p>
          <label aria-label='Тариф больничного дня за сутки в процентах от рабочего дня.' htmlFor="sickRate">Больничный</label>
          <p>
            <input ref={sickRateInputRef} id="sickRate" type="number" placeholder={sickRate.toString() + ' %'} />
            <button
              aria-label='Установить тариф'
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
}

export default MainMenu
