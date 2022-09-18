import { StyledContainer } from './styled'
import { PropsWithChildren } from 'react'

function Container ({ children }: PropsWithChildren): JSX.Element {
  return (
    <StyledContainer>
      {children}
    </StyledContainer>
  )
}

export default Container
