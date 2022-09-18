import styled from 'styled-components/macro'
import { DefaultThemeType } from './../../theme/defaultTheme'

interface AboutWrapperProps {
  isShow: boolean
}

export const StyledAboutWrapper = styled.div`
  margin-bottom: ${({ isShow }: AboutWrapperProps) => (isShow ? '30px' : '0px')};
  height: ${({ isShow }: AboutWrapperProps) => (isShow ? 'auto' : '1px')};
  transition: ease 0.3s height;
  text-align: center;
  overflow: hidden;
  p {
    line-height: 1.45;
  }

  .aboutArrowButton {
    display: inline-flex;
    align-items: center;
    border: 2px dashed ${({ theme }: DefaultThemeType) => theme.colors.delta};
    padding: 5px 10px;
    border-radius: 5px;
    background-color: transparent;
    font-weight: 600;
    cursor: pointer;
    &:hover {
      opacity: 0.6;
    }

    img {
      margin-left: 8px;
      transform: rotate(180deg);
    }
  }
`

export const StyledAboutButton = styled.button`
  display: flex;
  margin: 0 auto;
  margin-bottom: 30px;
  border: 2.5px solid ${({ theme }: DefaultThemeType) => theme.colors.bgLAccent};
  color: ${({ theme }: DefaultThemeType) => theme.colors.sux};
  background-color: transparent;
  padding: 5px 10px;
  border-radius: 13px;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    opacity: 0.6;
  }
`
