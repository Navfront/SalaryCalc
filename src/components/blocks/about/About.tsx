/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { StyledAboutWrapper, StyledAboutButton } from './styled'
import upArrow from '../../../assets/up-arrow.svg'
import { useAppSelector } from '../../../redux/reduxHooks'
import { useAppDispatch } from './../../../redux/reduxHooks'
import React, { useEffect } from 'react'
import { toggleAbout } from '../../../redux/slices/about-slice'

export default function About (): JSX.Element {
  const isAboutShow = useAppSelector(state => state.about.showAbout)
  const calendar = useAppSelector(state => state.calendar.calendar, (p, n) => p.length === n.length)
  const dispatch = useAppDispatch()
  const arrButtonRef = React.createRef<HTMLButtonElement>()
  const contentRef = React.createRef<HTMLDivElement>()
  const wrapperRef = React.createRef<HTMLDivElement & Element>()

  useEffect(() => {
    const currentMonth = document.querySelector<HTMLDivElement>('.current-month')
    const arrButtonClickHandler = (): void => {
      if (currentMonth !== null) {
        currentMonth.scrollIntoView({ block: 'nearest', behavior: 'smooth' })
      }
      dispatch(toggleAbout())
    }
    if (currentMonth !== null && arrButtonRef.current !== null) {
      arrButtonRef.current.onclick = arrButtonClickHandler
    }
    if (wrapperRef.current !== null && contentRef.current !== null) {
      wrapperRef.current.style.height = isAboutShow ? (contentRef.current.scrollHeight + 25).toString() + 'px' : '1px'
    }
  }, [calendar, isAboutShow])

  return (<React.Fragment>
    <StyledAboutWrapper ref={wrapperRef} tabIndex={isAboutShow ? 0 : -1} isShow={isAboutShow} >
      <div ref={contentRef} className='content'>
        <h2>В&nbsp;пару кликов составим рабочий табель и&nbsp;рассчитаем зарплату.</h2>
        <p>Приложение, которое поможет вам сэкономить время на&nbsp;ведении рабочего табеля. Вы&nbsp;можете проставить свои рабочие дни, переработки, простои, больничные, отпуска на&nbsp;весь год и&nbsp;рассчитать согласно этим данным свою зарплату. Хорошо подходит тем, кто работает с восьмичасовым рабочим графиком. Данные хранятся <b>только у&nbsp;вас</b> в&nbsp;браузере и&nbsp;не&nbsp;передаются третьим лицам. Если хотите сохранить их &mdash; <strong>не&nbsp;очищайте&nbsp;историю браузера.</strong></p>

        <button ref={arrButtonRef} className='aboutArrowButton' type='button' aria-label='Фокус текущего месяца' tabIndex={isAboutShow ? 0 : -1} >Кликни на любой день ниже <img height="20" width="20w" src={upArrow} alt="стрелочка вниз" /></button>
      </div>

    </StyledAboutWrapper>
    <StyledAboutButton aria-pressed={isAboutShow} aria-label='Показ описания' type='button' onClick={() => {
      dispatch(toggleAbout())
    }}>{isAboutShow ? 'Скрыть описание' : 'Показать описание'}
    </StyledAboutButton>
  </React.Fragment>
  )
}
