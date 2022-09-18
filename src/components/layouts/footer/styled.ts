import styled from 'styled-components/macro'
import { DefaultThemeType } from '../../theme/defaultTheme'

export const StyledFooter = styled.footer`
  padding: 25px;
  background-color: ${({ theme }: DefaultThemeType) => theme.colors.bg};
`

export const StyledFooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
