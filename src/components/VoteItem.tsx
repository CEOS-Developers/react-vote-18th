import React from "react";
import styled from "styled-components";

interface MemberItemProps {
  text: string;
  isSelected: boolean;
  onClick: () => void;
  isMember?: boolean;
}

const VoteItem = ({
  text,
  isSelected,
  onClick,
  isMember = true,
}: MemberItemProps) => {
  return (
    <Container isSelected={isSelected} isMember={isMember} onClick={onClick}>
      {text}
    </Container>
  );
};

export default VoteItem;

const Container = styled.div<{ isSelected: boolean; isMember: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: ${(props) => (props.isMember ? "18rem" : "19rem")};
  height: ${(props) => (props.isMember ? "4rem" : "8.75rem")};
  flex-shrink: 0;

  border-radius: ${(props) => (props.isMember ? "2.3rem" : "2.5rem")};

  text-align: center;
  font-family: "Pretendard-regular";
  font-size: ${(props) => (props.isMember ? "1.75rem" : "2.5rem")};
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  color: ${(props) => (props.isSelected ? "#fff" : "#3e4cf7")};
  border: ${(props) => (props.isMember ? "4px" : "7px")} solid #3e4cf7;
  background-color: ${(props) =>
    props.isSelected ? "#3e4cf7" : "transparent"};

  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #8e97fc;
    border: ${(props) => (props.isMember ? "4px" : "7px")} solid #8e97fc;
    color: #fff;
  }

  cursor: pointer;
`;
