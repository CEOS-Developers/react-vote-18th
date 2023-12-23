import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import TopBar from '../components/TopBar';
import DropDownBox from '../components/DropDownBox';
import { usePostJoin } from '../apis/post/usePostJoin';

const team_options = ['GOTCHA', 'SNIFF', 'READY', 'LOCALMOOD', 'SHAREMIND'];
const part_options = ['FRONTEND', 'BACKEND'];

const Signup = () => {
  const [emailValue, setEmailValue] = useState('nana@naver.com');
  const [nameValue, setNameValue] = useState('');
  const [idValue, setIdValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [passwordCheckValue, setPasswordCheckValue] = useState('');
  const [isFilled, setIsFilled] = useState(false);

  //custom-hook
  const fetchData = usePostJoin({
    loginId: idValue,
    email: emailValue,
    pwd: passwordValue,
    name: nameValue,
    partName: 'SHAREMIND',
    teamName: 'FRONTEND',
  });

  const handleSubmit = () => {
    fetchData.join();
    console.log(fetchData);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === 'name') {
      setNameValue(value);
    } else if (name === 'id') {
      setIdValue(value);
    } else if (name === 'password') {
      setPasswordValue(value);
    } else if (name === 'passwordCheck') {
      setPasswordCheckValue(value);
    }
  };

  useEffect(() => {
    setIsFilled(
      nameValue.trim() !== '' &&
        idValue.trim() !== '' &&
        passwordValue.trim() !== '' &&
        passwordValue === passwordCheckValue
    );
  }, [passwordValue, passwordCheckValue]);

  return (
    <>
      <TopBar />
      <Wrapper>
        <Container>
          <InputDiv>
            <Input
              name="name"
              placeholder="이름"
              value={nameValue}
              onChange={handleInputChange}
            />
            <Input
              name="id"
              placeholder="아이디"
              value={idValue}
              onChange={handleInputChange}
            />
            <Input
              name="password"
              placeholder="비밀번호"
              type="password"
              value={passwordValue}
              onChange={handleInputChange}
            />
            <Input
              name="passwordCheck"
              placeholder="비밀번호 확인"
              type="password"
              value={passwordCheckValue}
              onChange={handleInputChange}
            />
          </InputDiv>
          <TeamChoice>팀 명 / 파트</TeamChoice>
          <DropdownDiv>
            <DropDownBox options={team_options} />
            <DropDownBox options={part_options} />
          </DropdownDiv>
          <SignupBtn isFilled={isFilled} onClick={handleSubmit}>
            가입하기
          </SignupBtn>
        </Container>
      </Wrapper>
    </>
  );
};

export default Signup;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 8rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 7rem 6rem 4rem;

  border-radius: 6.5rem;
  background: #f4f6f9;
`;

const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  gap: 1.7rem;
`;

const Input = styled.input`
  width: 36rem;
  height: 4.6rem;
  background: transparent;
  padding: 0 1.6rem;

  outline: none;
  border: 0.2rem solid #d9d9d9;
  border-radius: 1.8rem;
  color: #01d1a8;
  transition: border-bottom-color 0.3s ease;

  &:focus,
  &:not(:placeholder-shown) {
    border-color: #01d1a8;
  }
  &::placeholder {
    color: #d9d9d9;
  }

  font-family: 'Pretendard-regular';
  font-size: 1.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const TeamChoice = styled.div`
  width: 100%;
  color: #abadaf;
  font-size: 30px;
  font-weight: 700;

  margin: 2.6rem 0 1.4rem;
`;

const DropdownDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  gap: 1.7rem;
`;

const SignupBtn = styled.div<{ isFilled: boolean }>`
  display: flex;
  width: 12.5rem;
  height: 4.3rem;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  margin-top: 4.5rem;

  cursor: pointer;

  border-radius: 2.5rem;
  border: 0.25rem solid #d9d9d9;

  font-size: 1.75rem;
  font-weight: 600;
  transition: border-color 0.3s, color 0.3s;

  color: ${(props) => (props.isFilled ? '#01D1A8' : '#d9d9d9')};
  border: 0.3rem solid ${(props) => (props.isFilled ? '#01D1A8' : '#d9d9d9')};
`;
