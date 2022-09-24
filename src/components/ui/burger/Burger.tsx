import { StyledBurger } from './styled'

import { useAppDispatch, useAppSelector } from './../../../redux/reduxHooks'
import { toggleMenu } from '../../../redux/slices/app-slice'

interface BurgerProps {
  size?: number
}

function Burger ({ size }: BurgerProps): JSX.Element {
  const isMenuOpen = useAppSelector(state => state.app.isMenuOpen)
  const dispatch = useAppDispatch()

  return (
    <StyledBurger aria-label='Меню настроек зарплаты'
      aria-pressed={isMenuOpen}
      onClick={() => {
        dispatch(toggleMenu())
      }}
      active={isMenuOpen}
      size={size}
    >
      <span /> <span /> <span />
    </StyledBurger>
  )
}

export default Burger
