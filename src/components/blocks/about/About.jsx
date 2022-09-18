import React, { useEffect, useRef, useState } from 'react';
import { StyledAboutWrapper, StyledAboutButton } from './styled';
import upArrow from '../../../assets/up-arrow.svg';

export const getIsShowFromLocalStorage = ()=>{
  if (localStorage.getItem('isShowAbout') === 'y') {
    return false;
  }
  return true;
};

export default function About({currentMonthRef}) {


  const [canShow, setCanShow] = useState(getIsShowFromLocalStorage());

  // размонтирование
  useEffect(() => () => {
    localStorage.setItem('isShowAbout', 'y');
  }, []);


  const aboutWrapperRef = useRef();


  return (
    <React.Fragment>

      <StyledAboutWrapper ref={aboutWrapperRef} isShow={canShow}>
        <h2>В&nbsp;пару кликов составим рабочий график и&nbsp;узнаем свою зарплату</h2>
        <p>Приложение, которое поможет вам сэкономить время на&nbsp;ведении личного графика работы. Вы&nbsp;можете проставить свои рабочие дни, переработки, простои, больничные и&nbsp;отпуска на&nbsp;весь год и&nbsp;рассчитать согласно этим данным свою зарплату. Данные хранятся только у&nbsp;вас в&nbsp;браузере и&nbsp;не&nbsp;передаются третьим лицам. Поэтому советую не&nbsp;чистить данные и&nbsp;историю браузера где вы&nbsp;проставили свой график.</p>

        <button className='aboutArrowButton' type='button' onClick={() => { currentMonthRef.current.scrollIntoView({ block: 'start', behavior: 'smooth' }); }}>Кликни на любой день ниже <img height="20" width="20w" src={upArrow} alt="стрелочка вниз" /></button>

      </StyledAboutWrapper>
      <StyledAboutButton type='button' onClick={() => { setCanShow(!canShow); aboutWrapperRef.current.style.height = canShow ? '1px' : 'auto'; }}>{canShow ? 'Скрыть описание' : 'Показать описание'}
      </StyledAboutButton>
    </React.Fragment>
  );
}


