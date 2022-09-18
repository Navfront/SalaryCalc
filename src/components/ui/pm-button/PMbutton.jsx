import { StyledPMButton } from './styled';

function PMButton({ onClick, bgColor, children, hSize, wSize, paddings, textColor }) {
  return (
    <StyledPMButton
      onClick={onClick}
      textColor={textColor}
      bgColor={bgColor}
      hSize={hSize}
      wSize={wSize}
      paddings={paddings}
    >
      {children}
    </StyledPMButton>
  );
}

export default PMButton;
