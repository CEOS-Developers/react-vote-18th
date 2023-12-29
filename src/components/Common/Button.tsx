import styled from 'styled-components';
import { ButtonColors, ButtonFontColors } from 'utils/constant';

type ButtonType = 'button' | 'submit' | 'reset';
interface ButtonProps {
  width?: string;
  height?: string;
  status?: string;
  fontSize?: string;
  fontWeight?: string;
  type?: ButtonType;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  text: string;
}
export const Button = ({
  width = 'auto',
  height = 'auto',
  status = 'active',
  fontSize = '1.125rem',
  fontWeight = '700',
  type,
  onClick,
  text,
}: ButtonProps) => {
  const buttonColor = ButtonColors[status as 'active' | 'inactive'];
  const fontColor = ButtonFontColors[status as 'active' | 'inactive'];
  if (status === 'active') {
    return (
      <StyledButton
        status={status}
        width={width}
        height={height}
        buttonColor={buttonColor}
        onClick={onClick}
        type={type}
      >
        <ButtonText
          fontSize={fontSize}
          fontWeight={fontWeight}
          fontColor={fontColor}
        >
          {text}
        </ButtonText>
      </StyledButton>
    );
  } else {
    return (
      <StyledDiv
        status={status}
        width={width}
        height={height}
        buttonColor={buttonColor}
      >
        <ButtonText
          fontSize={fontSize}
          fontWeight={fontWeight}
          fontColor={fontColor}
        >
          {text}
        </ButtonText>
      </StyledDiv>
    );
  }
};

const StyledButton = styled.button<{
  width?: string;
  height?: string;
  buttonColor: string;
  status: string;
}>`
  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  border-radius: 10px;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background-color: ${({ buttonColor }) => buttonColor};
  cursor: ${({ status }) => (status === 'inactive' ? 'default' : 'pointer')};
`;
const StyledDiv = styled.div<{
  width?: string;
  height?: string;
  buttonColor: string;
  status: string;
}>`
  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  border-radius: 10px;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background-color: ${({ buttonColor }) => buttonColor};
  cursor: ${({ status }) => (status === 'inactive' ? 'default' : 'pointer')};
`;
const ButtonText = styled.div<{
  fontSize?: string;
  fontWeight?: string;
  fontColor: string;
}>`
  color: ${({ fontColor }) => fontColor};
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
  font-style: normal;
  letter-spacing: -0.4px;
`;
