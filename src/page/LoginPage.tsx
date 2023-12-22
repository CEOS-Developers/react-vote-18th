import { Button } from 'components/Common/Button';
import Input from 'components/Common/Input';
import React from 'react';
import styled from 'styled-components';

function LoginPage() {
  return (
    <LoginPageWrapper>
      <LoginWrapper>
        <LoginHeader>로그인</LoginHeader>
        <IdSection>
          <LoginIndexText>아이디(이메일)</LoginIndexText>
          <Input
            placeholder="아이디를 입력해주세요."
            width={'90%'}
            height={'3.5rem'}
          />
        </IdSection>
        <PasswordSection>
          <LoginIndexText>비밀번호</LoginIndexText>
          <Input
            placeholder="비밀번호를 입력해주세요."
            width={'90%'}
            type="password"
            height={'3.5rem'}
          />
        </PasswordSection>

        <AdditionalSection>
          <SaveIdLabel htmlFor="saveid">
            <SaveIdInput type="checkbox" id="saveid" />
            아이디 저장
          </SaveIdLabel>
          <FindSth>
            <FindID>아이디 찾기</FindID>
            <DivideLine />
            <FindPW>비밀번호 찾기</FindPW>
          </FindSth>
        </AdditionalSection>

        <Button text="로그인" height="3.5rem" />
      </LoginWrapper>
    </LoginPageWrapper>
  );
}

const LoginPageWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const LoginWrapper = styled.div`
  width: 34rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  margin-top: 3rem;
  margin-bottom: 3rem;
`;

const IdSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const PasswordSection = styled(IdSection)``;

const AdditionalSection = styled.div`
  display: flex;
  width: 27rem;
  align-items: center;
`;

const LoginHeader = styled.div`
  font-size: 1.875rem;
  font-style: normal;
  font-weight: 800;
  margin-bottom: 0.6rem;
  line-height: 30px;
  letter-spacing: -0.6px;
  color: #3e4cf7;
`;

const LoginIndexText = styled.div`
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.44px;
  color: #101010;
`;

const SaveIdLabel = styled.label``;

const SaveIdInput = styled.input`
  margin-right: 0.4rem;
`;

const FindSth = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const FindID = styled.div`
  font-size: 1rem;
`;
const FindPW = styled.div`
  font-size: 1rem;
`;

const DivideLine = styled.div`
  width: 1px;
  height: 1rem;
  background-color: #ccc;
`;

export default LoginPage;
