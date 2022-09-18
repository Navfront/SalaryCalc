/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { MutableRefObject } from 'react'
import { StyledAboutWrapper, StyledAboutButton } from './styled'
import upArrow from '../../../assets/up-arrow.svg'
import { useAppSelector } from '../../../redux/reduxHooks'
import { useAppDispatch } from './../../../redux/reduxHooks'
import { toggleAbout } from '../../../redux/slices/app-slice'

interface AboutProps {
  currentMonthRef: MutableRefObject<HTMLElement>
}

export default function About ({ currentMonthRef }: AboutProps): JSX.Element {
  const isAboutShow = useAppSelector(state => state.app.showAbout)
  const dispatch = useAppDispatch()
  const aboutWrapperRef = React.useRef<HTMLDivElement>()

  return (<React.Fragment>

    <StyledAboutWrapper isShow={isAboutShow}>
      <h2>В&nbsp;пару кликов составим рабочий график и&nbsp;узнаем свою зарплату</h2>
      <p>Приложение, которое поможет вам сэкономить время на&nbsp;ведении личного графика работы. Вы&nbsp;можете проставить свои рабочие дни, переработки, простои, больничные и&nbsp;отпуска на&nbsp;весь год и&nbsp;рассчитать согласно этим данным свою зарплату. Данные хранятся только у&nbsp;вас в&nbsp;браузере и&nbsp;не&nbsp;передаются третьим лицам. Поэтому советую не&nbsp;чистить данные и&nbsp;историю браузера где вы&nbsp;проставили свой график.</p>

      <button className='aboutArrowButton' type='button' onClick={() => { currentMonthRef.current.scrollIntoView({ block: 'start', behavior: 'smooth' }) }}>Кликни на любой день ниже <img height="20" width="20w" src={upArrow} alt="стрелочка вниз" /></button>

    </StyledAboutWrapper>
    <StyledAboutButton type='button' onClick={() => {
      dispatch(toggleAbout()); if (aboutWrapperRef.current != null) {
        aboutWrapperRef.current.style.height = isAboutShow ? '1px' : 'auto'
      }
    }}>{isAboutShow ? 'Скрыть описание' : 'Показать описание'}
    </StyledAboutButton>
  </React.Fragment>
  )
}
