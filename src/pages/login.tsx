import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import TopBar from '../components/TopBar';
import { usePostLogin } from '../apis/post/usePostLogin';

const Login = () => {
  const [idValue, setIdValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [isFilled, setIsFilled] = useState(false);

  const navigate = useNavigate();

  //custom-hook
  const fetchData = usePostLogin();

  const handleSubmit = () => {
    fetchData.login({
      loginId: idValue,
      pwd: passwordValue,
    });
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === 'id') {
      setIdValue(value);
    } else if (name === 'password') {
      setPasswordValue(value);
    }
    setIsFilled(idValue.trim() !== '' && passwordValue.trim() !== '');
  };

  return (
    <>
      <TopBar />
      <Wrapper>
        <Container>
          <InputDiv>
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
          </InputDiv>
          <LoginBtn isFilled={isFilled} onClick={handleSubmit}>
            로그인
          </LoginBtn>
        </Container>
      </Wrapper>
    </>
  );
};

export default Login;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 10rem;
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
  width: 100%;
  height: 4.6rem;
  background: transparent;
  padding: 0 0.75rem;

  border: none;
  outline: none;
  border-bottom: 0.2rem solid #d9d9d9;
  color: #01d1a8;
  transition: border-bottom-color 0.3s ease;

  &:focus,
  &:not(:placeholder-shown) {
    border-bottom-color: #01d1a8;
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

const LoginBtn = styled.div<{ isFilled: boolean }>`
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
