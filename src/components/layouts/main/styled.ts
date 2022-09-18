import styled from 'styled-components/macro'
import { DefaultThemeType } from './../../theme/defaultTheme'

export const StyledMain = styled.main`
  padding-top: 90px;
  background-color: ${({ theme }: DefaultThemeType) => (theme.colors.bg)};
`
