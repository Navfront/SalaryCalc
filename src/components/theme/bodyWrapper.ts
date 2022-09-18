import styled from 'styled-components/macro'
import { DefaultThemeType } from './defaultTheme'

export const BodyWrapper = styled.div`
  background-color: ${({ theme }: DefaultThemeType) => theme.colors.bg};

  height: 100%;
  display: flex;
  flex-direction: column;
`

/* overflow: ${({ scrollOff }) => (scrollOff ? 'hidden' : 'auto')}; */
