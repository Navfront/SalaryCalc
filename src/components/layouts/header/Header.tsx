import { PropsWithChildren } from 'react'
import { StyledHeader } from './styled'

function Header ({ children }: PropsWithChildren): JSX.Element {
  return <StyledHeader>{children}</StyledHeader>
}

export default Header
