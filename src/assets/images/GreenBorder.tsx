import styled from 'styled-components';
import { GreenBorderArrayType, GreenBorderType } from 'utils/type';
interface GreenBorderProps {
  isHovered: boolean;
}
const borderArray: GreenBorderArrayType = [
  { top: '-2px', right: '', bottom: '', left: '-2px' },
  { top: '-2px', right: '-2px', bottom: '', left: '' },
  { top: '', right: '', bottom: '-2px', left: '-2px' },
  { top: '', right: '-2px', bottom: '-2px', left: '' },
];
export const GreenBorder = ({ isHovered }: GreenBorderProps) => {
  return (
    <>
      <GreenRec position={borderArray[0]} hover={isHovered} />
      <GreenRec position={borderArray[1]} hover={isHovered} />
      <GreenRec position={borderArray[2]} hover={isHovered} />
      <GreenRec position={borderArray[3]} hover={isHovered} />
    </>
  );
};

const GreenRec = styled.div<{ position: GreenBorderType; hover: boolean }>`
  width: 7px;
  height: 7px;
  position: absolute;
  top: ${(props) => props.position.top};
  right: ${(props) => props.position.right};
  bottom: ${(props) => props.position.bottom};
  left: ${(props) => props.position.left};
  background-color: ${(props) => (props.hover ? '#04d1a8' : '#ffffff')};
  transition: background-color 0.3s;
`;
