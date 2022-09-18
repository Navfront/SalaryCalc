import styled, { css } from 'styled-components/macro'

interface BurgerStyle {
  size?: number
  bgColor?: string
  active?: boolean
}

const activeStyle = css`
  span:nth-child(1) {
    transform: translateY(${({ size }: BurgerStyle) => ((size != null) ? `${size * 12.0}px` : '13px')}) rotate(45deg);
  }
  span:nth-child(2) {
    transform: rotate(360deg) scaleX(0);
  }
  span:nth-child(3) {
    transform: translateY(${({ size }: BurgerStyle) => ((size != null) ? `${size * -12.0}px` : '-13px')}) rotate(-45deg);
  }
`

export const StyledBurger = styled.button`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: ${({ size }: BurgerStyle) => ((size != null) ? `${size * 30}px` : '30px')};
  width: ${({ size }: BurgerStyle) => ((size != null) ? `${size * 60}px` : '30px')};
  background-color: transparent;
  border: none;

  span {
    transition: ease 0.3s;
    display: inline-block;
    background-color: ${({ bgColor }: BurgerStyle) => (bgColor ?? '#333333')};
    height: ${({ size }: BurgerStyle) => ((size != null) ? `${size * 4}px` : '30px')};
    width: 100%;
    transform-origin: 50% 50%;
  }

  ${({ active }: BurgerStyle) => ((active ?? false) ? activeStyle : null)}
`
