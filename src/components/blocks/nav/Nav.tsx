import Burger from '../../ui/burger/Burger'
import Logo from '../../ui/logo/Logo'
import MainMenu from '../../ui/main-menu/MainMenu'
import { StyledNav } from './styled'

function Nav (): JSX.Element {
  return (
    <StyledNav>
      <Logo text={'SalaryCalc'} />
      <h1 className='visually-hidden'>Приложение для составления рабочего графика и подсчета зарплаты за месяц</h1>
      <Burger size={0.8} />
      <MainMenu />
    </StyledNav>
  )
}

export default Nav
