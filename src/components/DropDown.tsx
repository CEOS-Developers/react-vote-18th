import React, { useState } from "react";
import { styled, css } from "styled-components";

interface DropDownProps {
  selectedOption: string;
  options: string[];
  handleSelect: (option: string) => void;
}

const DropDown = ({ selectedOption, handleSelect, options }: DropDownProps) => {
  return (
    <Wrapper>
      {options.map((option: string) => (
        <ListItem
          key={option}
          onClick={() => handleSelect(option)}
          isSelected={selectedOption === option}
        >
          {option}
        </ListItem>
      ))}
    </Wrapper>
  );
};

export default DropDown;

const Wrapper = styled.div`
  position: absolute;
  top: 3.5rem;
  display: inline-flex;
  flex-direction: column;
  align-items: center;

  border-radius: 1.6rem;
  background: #f6f6f6;

  box-shadow: 0 0.5rem 2.5rem 0 rgba(0, 0, 0, 0.1);
`;

const ListItem = styled.div<{ isSelected: boolean }>`
  display: flex;
  width: 14rem;
  height: 3.8rem;
  justify-content: center;
  align-items: center;

  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;

  ${({ isSelected }) =>
    isSelected &&
    css`
      color: #01d1a8;
    `};

  cursor: pointer;
`;
