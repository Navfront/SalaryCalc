import styled, { css } from 'styled-components/macro'
import { DefaultThemeType } from './../../theme/defaultTheme'

const onHover = css`
  cursor: pointer;
  &:hover,
  &:focus {
    outline: 2px solid ${({ theme }: DefaultThemeType) => theme.colors.hoverBorder};
    outline-offset: -2px;
  }
  &:active {
    opacity: 0.8;
    outline: 2px solid ${({ theme }: DefaultThemeType) => theme.colors.bgAccent};
    outline-offset: -2px;
  }
`

interface CellProps {
  isDay: boolean
  isHday: boolean
}

export const StyledCalendarCell = styled.button`
  width: 100%;
  height: 100%;
  position: relative;
  box-sizing: border-box;
  border-radius: 2px;
  background-color: ${({ isDay, isHday, theme }: DefaultThemeType & CellProps) => {
    if (!isDay) {
      return 'transparent'
    }
    if (isHday) {
      return theme.colors.bgAccent
    }
    return theme.colors.bgLAccent
  }};
  color: ${({ isHday, theme }: DefaultThemeType & CellProps) => (isHday ? theme.colors.warn : theme.colors.text)};
  text-align: center;
  vertical-align: middle;
  user-select: none;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 3px;
  font-size: 18px;
  font-weight: 500;
  min-height: 50px;
  border: none;

  min-height: 50px;
  min-width: 36.6px;
  @media (max-width: ${({ theme }: DefaultThemeType) => theme.mobileMax}) {
    padding: 2px;
    font-size: 14px;
  }

  img {
    grid-column: 1;
    grid-row: 2;
    justify-self: center;

    @media (max-width: ${({ theme }: DefaultThemeType) => theme.mobileMax}) {
      width: 18px;
      height: 18px;
    }
    @media (max-width: 450px) {
      margin: 1px 0 0;
      width: 14px;
      height: 14px;
    }
  }

  .extraHours {
    grid-column: 2;
    grid-row: 2;
    color: red;
  }

  ${({ isDay }) => isDay && onHover}
`
