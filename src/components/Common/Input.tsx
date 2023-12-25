import styled from 'styled-components';
import { BgColors, InputColors, InputFontColors } from 'utils/constant';
import { InputStatus } from 'utils/type';

interface InputProps {
  width?: string;
  height?: string;
  status?: InputStatus;
  fontSize?: string;
  fontWeight?: string;
  value?: string;
  placeholder?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  type?: string;
  padding?: string;
  name?: string;
}

const Input = ({
  width = 'auto',
  height = 'auto',
  status = 'default',
  fontSize = '1.125rem',
  fontWeight = '500',
  value,
  placeholder,
  onChange,
  onBlur,
  onFocus,
  type = 'text',
  padding,
  name,
}: InputProps) => {
  const borderColor =
    InputColors[status as 'active' | 'default' | 'inactive' | 'error'];
  const bgColor =
    BgColors[status as 'active' | 'default' | 'inactive' | 'error'];
  const fontColor =
    InputFontColors[status as 'active' | 'default' | 'inactive' | 'error'];

  return (
    <StyledInput
      onChange={onChange}
      width={width}
      height={height}
      borderColor={borderColor}
      bgColor={bgColor}
      fontColor={fontColor}
      value={value}
      fontSize={fontSize}
      fontWeight={fontWeight}
      onBlur={onBlur}
      onFocus={onFocus}
      placeholder={placeholder}
      type={type}
      padding={padding}
      name={name}
    />
  );
};

const StyledInput = styled.input<{
  borderColor?: string;
  width?: string;
  height?: string;
  bgColor?: string;
  fontColor?: string;
  fontSize?: string;
  fontWeight?: string;
  padding?: string;
}>`
  border-radius: 10px;
  border: 2px solid ${({ borderColor }) => borderColor};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background-color: ${({ bgColor }) => bgColor};
  cursor: text;

  font-family: 'Pretendard';
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
  color: ${({ fontColor }) => fontColor};
  text-indent: 15px;
  padding: ${({ padding }) => padding};

  &:focus {
    outline: none;
  }

  &::placeholder {
    font-weight: 500;
  }
`;

export default Input;
