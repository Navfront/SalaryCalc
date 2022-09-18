import { StyledBurger } from './styled'
import { useState } from 'react'
// import { useDispatch } from 'react-redux'
// import { toggleMenu } from './../../../redux/actions'

interface BurgerProps {
  size?: number
}

function Burger ({ size }: BurgerProps): JSX.Element {
  const [isBurgerActive, setIsBurgerActive] = useState(false)

  // const dispatch = useDispatch()
  // const toggleMainMenu = useCallback(() => dispatch(), [])

  return (
    <StyledBurger aria-label='Меню настроек'
      onClick={() => {
        setIsBurgerActive(!isBurgerActive)
        // toggleMainMenu()
      }}
      active={isBurgerActive}
      size={size}
    >
      <span /> <span /> <span />
    </StyledBurger>
  )
}

export default Burger
