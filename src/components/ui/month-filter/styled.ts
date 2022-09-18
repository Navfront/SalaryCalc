import styled from 'styled-components/macro'
import { DefaultThemeType } from './../../theme/defaultTheme'

export const StyledMonthFilter = styled.section`
  padding: 0 5px 25px;
  form,
  .monthFilterNextWrapper {
    display: flex;
    justify-content: space-between;
  }
  .monthFilterWrapper {
    display: flex;
    flex-wrap: wrap;
    margin-right: 5px;
  }

  button,
  select {
    border: none;
    background-color: ${({ theme }: DefaultThemeType) => (theme?.colors.bgLAccent)};
    margin-right: 15px;
    margin-bottom: 10px;
    padding: 2px 5px;
    cursor: pointer;
    font-weight: 400;
    border-radius: 15px;

    &:hover,
    &:focus {
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.04), 0 2px 6px rgba(0, 0, 0, 0.04), 0 0 1px rgba(0, 0, 0, 0.04);
    }
    &:active {
      opacity: 0.6;
    }

    &:last-child {
      margin-right: 0;
    }
  }

  select {
    height: 35px;
    padding: 2px 10px;
  }

  .buttonToLeft {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    background-color: ${({ theme }: DefaultThemeType) => (theme.colors.bgLAccent)};
  }
  .buttonToRight {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    background-color: ${({ theme }: DefaultThemeType) => (theme.colors.bgLAccent)};
  }
`
