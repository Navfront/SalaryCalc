import styled from 'styled-components/macro'

export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  margin: 0 10px;
  position: relative;
  z-index: 99;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
  }

  li {
    padding: 0;
  }
`
