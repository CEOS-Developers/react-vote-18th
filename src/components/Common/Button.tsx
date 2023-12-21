import styled from 'styled-components';

const ButtonColors = {
  active: '#3172ea',
  inactive: '#cccccc',
};

const FontColors = {
  active: '#ffffff',
  inactive: '#999999',
};
interface ButtonProps {
  width?: string;
  height?: string;
  status?: string;
  fontSize?: string;
  fontWeight?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  text: string;
}
export const Button = ({
  width = 'auto',
  height = 'auto',
  status = 'active',
  fontSize = '1.125rem',
  fontWeight = '700',
  onClick,
  text,
}: ButtonProps) => {
  const buttonColor = ButtonColors[status as 'active' | 'inactive'];
  const fontColor = FontColors[status as 'active' | 'inactive'];

  return (
    <StyledButton
      status={status}
      width={width}
      height={height}
      buttonColor={buttonColor}
      onClick={onClick}
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
