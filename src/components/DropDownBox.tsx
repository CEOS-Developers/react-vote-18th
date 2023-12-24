import React, { useState } from 'react';
import { styled } from 'styled-components';

import open from '../images/dropdown-open.svg';
import close from '../images/dropdown-close.svg';

//components
import DropDown from './DropDown';

interface DropDownBoxProps {
  options: string[];
  value: string;
  onChangeValue: (selectedOption: string) => void;
}

const DropDownBox = ({ options, value, onChangeValue }: DropDownBoxProps) => {
  const [isDropdownView, setDropdownView] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleClickContainer = () => {
    setDropdownView(!isDropdownView);
  };

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    onChangeValue(option);
    console.log(option);
  };

  return (
    <Wrapper>
      <Container onClick={handleClickContainer}>
        <div>{selectedOption}</div>
        <Toggle src={isDropdownView ? close : open} />
      </Container>
      {isDropdownView && (
        <DropDown
          selectedOption={selectedOption}
          handleSelect={handleSelect}
          options={options}
        />
      )}
    </Wrapper>
  );
};

export default DropDownBox;

const Wrapper = styled.div`
  position: relative;
  display: flex;
`;

const Container = styled.label`
  width: 14rem;
  height: 3.3rem;
  padding: 0.75rem 1.25rem;

  border-radius: 15px;
  background: #01d1a8;
  display: flex;
  justify-content: space-between;
  align-items: center;

  color: #fff;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 600;
`;

const Toggle = styled.img``;
