import styled from 'styled-components/macro'

export const StyledCloseButton = styled.button`
  width: 20px;
  height: 20px;
  padding: 0;
  box-sizing: border-box;
  border: none;
  background-color: transparent;
  cursor: pointer;
  transition: ease 0.3s;

  &::before,
  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 2px;
    background-color: ${({ color }: { color?: string }) => (color ?? '#333333')};
    transform-origin: 8.33px 1px;
  }

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }

  &:hover,
  &:focus {
    transform: scale(1.06);
  }
  &:active {
    opacity: 0.6;
  }
`
