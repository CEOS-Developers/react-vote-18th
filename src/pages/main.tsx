import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import TopBar from "../components/TopBar";

const Main = () => {
  const navigate = useNavigate();
  return (
    <>
      <TopBar />
      <Wrapper>
        <Part onClick={() => navigate("/membervote")}>
          파트장 투표
          <br />
          바로 가기
        </Part>
        <DemoDay onClick={() => navigate("/teamvote")}>
          데모데이 투표
          <br />
          바로 가기
        </DemoDay>
      </Wrapper>
    </>
  );
};

export default Main;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 7.25rem;
  padding-top: 10rem;

  @media (max-width: 650px) {
    flex-direction: column;
    gap: 3rem;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 27rem;
  height: 27rem;
  flex-shrink: 0;

  border-radius: 6.4rem;

  text-align: center;
  font-family: "Pretendard-regular";
  font-size: 3.75rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  cursor: pointer;

  transition: background-color 0.3s, color 0.3s;

  @media (max-width: 650px) {
    width: 18rem;
    height: 18rem;
    border-radius: 3.4rem;

    font-size: 2.5rem;
  }
`;

const Part = styled(Container)`
  border: 7px solid #01d1a8;
  color: #01d1a8;

  &:hover {
    background-color: #01d1a8;
    color: #fff;
  }
`;

const DemoDay = styled(Container)`
  border: 7px solid #ffc466;
  color: #ffc466;

  &:hover {
    background-color: #ffc466;
    color: #fff;
  }
`;
