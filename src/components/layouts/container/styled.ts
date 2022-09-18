import styled from 'styled-components/macro'

export const StyledContainer = styled.div`
  @media (min-width: 1440px) {
    padding: 0 30px;
  }

  @media (min-width: 768px) {
    max-width: 1280px;
    padding: 0 15px;
  }

  @media (max-width: 767.9px) {
    padding: 0 10px;
  }
  position: relative;
  margin: 0 auto;
`
