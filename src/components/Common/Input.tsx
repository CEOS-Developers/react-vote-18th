import styled from 'styled-components';

interface InputProps {
  width?: string;
  height?: string;
  status?: 'active' | 'default' | 'inactive' | 'error';
  fontSize?: string;
  fontWeight?: string;
  value?: string;
  placeholder?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  type?: string;
  padding?: string;
}

const BorderColors = {
  active: '#3172ea',
  default: '#cccccc',
  inactive: '#f2f2f2',
  error: '#db4242',
};

const BgColors = {
  active: '#f6f6f6',
  default: '#ffffff',
  inactive: '#f2f2f2',
  error: '#fbeaea',
};

const FontColors = {
  active: '#101010',
  default: '#101010',
  inactive: 'b3b3b3',
  error: '#101010',
};

const Input = ({
  width = 'auto',
  height = 'auto',
  status = 'default',
  fontSize = '1.25rem',
  fontWeight = '500',
  value,
  placeholder,
  onChange,
  onBlur,
  onFocus,
  type = 'text',
  padding,
}: InputProps) => {
  const borderColor =
    BorderColors[status as 'active' | 'default' | 'inactive' | 'error'];
  const bgColor =
    BgColors[status as 'active' | 'default' | 'inactive' | 'error'];
  const fontColor =
    FontColors[status as 'active' | 'default' | 'inactive' | 'error'];

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
