import { StyledFooter, StyledFooterWrapper } from './styled'
import Container from '../container/Container'
import { memo, PropsWithChildren } from 'react'

function Footer ({ children }: PropsWithChildren): JSX.Element {
  return (
    <StyledFooter>
      <Container>
        <StyledFooterWrapper>{children}</StyledFooterWrapper>
      </Container>
    </StyledFooter>
  )
}

export default memo(Footer)
