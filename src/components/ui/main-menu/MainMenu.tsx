// import { useSelector, useDispatch } from 'react-redux'
import { StyledMainMenuLayout, StyledMainMenuTitle } from './styled'
// import { setDefaultRate, setHolidayRate } from '../../../redux/actions'
// import { useRef } from 'react'
// import { setExtraRate, setSickRate } from './../../../redux/actions'

function MainMenu (): JSX.Element {
  const isMenuActive = true
  // const isMenuActive = useSelector((state) => state.appReducer.isMenuOpen);
  // const defaultRate = useSelector((state) => state.ratesReducer.defaultRate);
  // const extraRate = useSelector((state) => state.ratesReducer.extraRate);
  // const holidayRate = useSelector((state) => state.ratesReducer.holidayRate);
  // const sickRate = useSelector((state) => state.ratesReducer.sickRate);

  // const dispatchSetDefaultRate = useDispatch();
  // const dispatchSetExtraRate = useDispatch();
  // const dispatchSetHolidayRate = useDispatch();
  // const dispatchSetSickRate = useDispatch();

  // const defaultRateInputRef = useRef();
  // const extraRateInputRef = useRef();
  // const holidayRateInputRef = useRef();
  // const sickRateInputRef = useRef();

  return isMenuActive
    ? (<StyledMainMenuLayout active={isMenuActive}>
      <StyledMainMenuTitle>Настройки</StyledMainMenuTitle>
      <form
        action="#"
        method="post"
        onSubmit={() => {
          // eslint-disable-next-line no-console
          console.log('evtsubm')
        }}
      >
        <fieldset>
          <legend>Тарифы</legend>
          {/* <label htmlFor="defaultRate">Обычные часы</label>
          <p>
            <input ref={defaultRateInputRef} id="defaultRate" type="number" placeholder="0" />
            <button
              type="button"
              onClick={() => {
                dispatchSetDefaultRate(setDefaultRate(defaultRateInputRef.current.value))
              }}
            >
              уст.
            </button>
            <span>{defaultRate ? `${defaultRate}р./ч.` : 'загрузка..'}</span>
          </p>
          <label htmlFor="extraRate">Переработка</label>
          <p>
            <input ref={extraRateInputRef} id="extraRate" type="number" placeholder="0" />
            <button
              type="button"
              onClick={() => {
                dispatchSetExtraRate(setExtraRate(extraRateInputRef.current.value))
              }}
            >
              уст.
            </button>
            <span>{extraRate ? `${extraRate}р./ч.` : 'загрузка..'}</span>
          </p>
          <label htmlFor="holidayRate">Выходной день</label>
          <p>
            <input ref={holidayRateInputRef} id="holidayRate" type="number" placeholder="0" />
            <button
              type="button"
              onClick={() => {
                dispatchSetHolidayRate(setHolidayRate(holidayRateInputRef.current.value))
              }}
            >
              уст.
            </button>
            <span>{holidayRate ? `${holidayRate}р./ч.` : 'загрузка..'}</span>
          </p>
          <label htmlFor="sickRate">Больничный</label>
          <p>
            <input ref={sickRateInputRef} id="sickRate" type="number" placeholder="0" />
            <button
              type="button"
              onClick={() => {
                dispatchSetSickRate(setSickRate(sickRateInputRef.current.value))
              }}
            >
              уст.
            </button>
            <span>{sickRate ? `${sickRate}%` : 'загрузка..'}</span>
          </p> */}
        </fieldset>
      </form>
    </StyledMainMenuLayout>
      )
    : <>{''}</>
}

export default MainMenu
