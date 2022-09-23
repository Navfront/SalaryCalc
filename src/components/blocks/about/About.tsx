/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { StyledAboutWrapper, StyledAboutButton } from './styled'
import upArrow from '../../../assets/up-arrow.svg'
import { useAppSelector } from '../../../redux/reduxHooks'
import { useAppDispatch } from './../../../redux/reduxHooks'
import { toggleAbout } from '../../../redux/slices/app-slice'
import React, { useEffect } from 'react'

export default function About (): JSX.Element {
  const isAboutShow = useAppSelector(state => state.app.showAbout)
  const calendar = useAppSelector(state => state.calendar.calendar, (p, n) => p.length === n.length)
  const dispatch = useAppDispatch()
  const arrButtonRef = React.createRef<HTMLButtonElement>()

  useEffect(() => {
    const currentMonth = document.querySelector<HTMLDivElement>('.current-month')
    console.log(currentMonth)
    const arrButtonClickHandler = (): void => {
      if (currentMonth !== null) { currentMonth.scrollIntoView({ block: 'nearest', behavior: 'smooth' }) }
      dispatch(toggleAbout())
    }
    if (currentMonth !== null && arrButtonRef.current !== null) {
      arrButtonRef.current.onclick = arrButtonClickHandler
    }
  }, [calendar])

  return (<React.Fragment>
    <StyledAboutWrapper isShow={isAboutShow}>
      <h2>В&nbsp;пару кликов составим рабочий график и&nbsp;узнаем свою зарплату</h2>
      <p>Приложение, которое поможет вам сэкономить время на&nbsp;ведении личного графика работы. Вы&nbsp;можете проставить свои рабочие дни, переработки, простои, больничные и&nbsp;отпуска на&nbsp;весь год и&nbsp;рассчитать согласно этим данным свою зарплату. Данные хранятся только у&nbsp;вас в&nbsp;браузере и&nbsp;не&nbsp;передаются третьим лицам. Поэтому советую не&nbsp;чистить данные и&nbsp;историю браузера где вы&nbsp;проставили свой график.</p>

      <button ref={arrButtonRef} className='aboutArrowButton' type='button' >Кликни на любой день ниже <img height="20" width="20w" src={upArrow} alt="стрелочка вниз" /></button>

    </StyledAboutWrapper>
    <StyledAboutButton type='button' onClick={() => {
      dispatch(toggleAbout())
    }}>{isAboutShow ? 'Скрыть описание' : 'Показать описание'}
    </StyledAboutButton>
  </React.Fragment>
  )
}
