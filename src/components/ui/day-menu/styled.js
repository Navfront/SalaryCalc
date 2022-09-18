import styled from 'styled-components/macro';

export const StyledDayMenuWrapper = styled.section`
  width: 98%;
  text-align: center;
  padding: 10px 5px 10px;

  form {
    padding: 30px 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    justify-items: center;
  }

  .dayTitle {
    grid-row: 1/3;
    span {
      display: block;
      font-size: 24px;
    }
    .dayNumber {
      font-size: 32px;
      font-weight: 900;
    }
    .dayDescription {
      font-size: 16px;
    }
  }
  .dayButtonWrapper {
    display: flex;
    flex-direction: column;
    align-items: stretch;

    button {
      padding: 5px 5px;
      margin-bottom: 5px;
      width: 120px;
    }
  }

  .plusMinusWrapper {
    button {
      width: 30px;
      height: 30px;
    }
    button + button {
      margin-left: 5px;
    }
  }
`;
