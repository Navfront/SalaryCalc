import styled from 'styled-components/macro';

export const StyledPMButton = styled.button`
  width: ${({ wSize }) => wSize ? wSize : 'auto'};
  height: ${({ hSize }) => hSize ? hSize : 'auto'};
  background-color: ${({ bgColor }) => bgColor ? bgColor : 'lightgrey'};
  padding: ${({ paddings }) => paddings ? paddings : 0};

  color: ${({ textColor }) => textColor ? textColor : 'black'};
  border: none;
  border-radius: 5px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.04), 0 2px 6px rgba(0, 0, 0, 0.04), 0 0 1px rgba(0, 0, 0, 0.04);
  font-size: inherit;
  font-weight: 500;
  cursor: pointer;
`;
