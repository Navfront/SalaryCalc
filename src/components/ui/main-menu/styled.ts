import styled from 'styled-components/macro'
import { DefaultThemeType } from './../../theme/defaultTheme'

export const StyledMainMenuLayout = styled.div`
  display: none;
  position: absolute;
  height: 700px;
  right: -20px;
  top: 70px;
  margin-left: auto;
  box-sizing: border-box;
  min-width: 320px;
  padding: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.04), 0 2px 6px rgba(0, 0, 0, 0.04), 0 0 1px rgba(0, 0, 0, 0.04);
  transition: ease 0.3s;
  background-color: ${({ theme }: DefaultThemeType) => (theme?.colors.bgLAccent)};

  @media (max-height: 768px) {
    height: 420px;
  }
  @media (max-height: 500px) {
    height: 300px;
  }

  form {
    height: 100%;
    font-family: inherit;
  }

  fieldset {
    font-size: 20px;
    padding: 11px;

    @media (max-height: 768px) {
    height: 77%;
  }
  @media (max-height: 500px) {
    height: 67%;
  }
  }
  fieldset > p {
    margin-top: 5px;
    display: flex;
    align-items: center;

    &:last-of-type {
      margin-bottom: 40px;
    }
  }

  fieldset span {
    display: inline-flex;
    justify-content: flex-end;
    margin-left: auto;
    font-weight: 700;
    flex: 1;
    padding: 0 10px 0 5px;
  }

  input[type='number'] {
    padding: 5px 5px;
    width: 100px;
    margin-right: 5px;
  }

  fieldset button {
    height: 30px;
    width: 30px;
    padding: 0;
  }
`

export const StyledMainMenuTitle = styled.p`
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  font-family: inherit;
`

export const StyledScrollable = styled.div`
  height: 100%;

  @media (max-height: 768px) {
    overflow-y: scroll;
  }
`
