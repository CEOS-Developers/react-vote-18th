import { Button } from 'components/Common/Button';
import { Part, Team } from 'utils/constant';
import styled from 'styled-components';
import React, { useState } from 'react';
import Input from 'components/Common/Input';
import { InputStatus } from 'utils/type';
function SignupPage() {
  //드롭다운 select
  const [partSelect, setPartSelect] = useState<string>('');
  const [teamSelect, setTeamSelect] = useState<string>('');
  const handlePartChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setPartSelect(event.target.value);
  };
  const handleTeamChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTeamSelect(event.target.value);
  };
  //focus 여부
  const [idFocus, setIdFocus] = useState<InputStatus>('default');
  const [nameFocus, setNameFocus] = useState<InputStatus>('default');
  const [pwFocus, setPwFocus] = useState<InputStatus>('default');
  const [pwConfirmFocus, setPwConfirmFocus] = useState<InputStatus>('default');
  const [partFocus, setPartFocus] = useState<string>('');
  const [teamFocus, setTeamFocus] = useState<string>('');
  const [emailFocus, setEmailFocus] = useState<InputStatus>('default');
  const [verifyNumberFocus, setVerifyNumberFocus] =
    useState<InputStatus>('default');
  // const handleIdFocus = () => {};
  return (
    <SignupPageWrapper>
      <SignupWrapper>
        <SignupHeader>회원가입</SignupHeader>
        <SignupText>아이디</SignupText>
        <InputWrapper>
          <Input
            width={'22.5rem'}
            height={'4.0625rem'}
            placeholder="아이디를 입력해주세요."
            status={idFocus}
            onFocus={() => {
              setIdFocus('active');
            }}
            onBlur={() => {
              setIdFocus('default');
            }}
          />
          <Button text={'중복 확인'} width={'9.75rem'}></Button>
        </InputWrapper>
        <SignupText>이름</SignupText>
        <Input
          height={'4.0625rem'}
          placeholder="이름을 입력해주세요."
          status={nameFocus}
          onFocus={() => {
            setNameFocus('active');
          }}
          onBlur={() => {
            setNameFocus('default');
          }}
        />
        <SignupText>비밀번호</SignupText>
        <Input
          height={'4.0625rem'}
          placeholder="비밀번호를 입력해주세요.(8자 이상,특수문자 포함 필수)"
          status={pwFocus}
          onFocus={() => {
            setPwFocus('active');
          }}
          onBlur={() => {
            setPwFocus('default');
          }}
        />
        <Space height={'1.25rem'} />
        <Input
          height={'4.0625rem'}
          placeholder="비밀번호를 다시 입력해주세요."
          status={pwConfirmFocus}
          onFocus={() => {
            setPwConfirmFocus('active');
          }}
          onBlur={() => {
            setPwConfirmFocus('default');
          }}
        />
        <SignupSelectWrapper>
          <div className="signup-select">
            <SignupText>팀 선택</SignupText>
            <Select
              value={partSelect}
              onChange={handlePartChange}
              borderColor={partFocus}
              onFocus={() => {
                setPartFocus('#3172ea');
              }}
              onBlur={() => {
                setPartFocus('#cccccc');
              }}
            >
              <option value="">선택</option>
              {Object.entries(Part).map(([key, value]) => (
                <option key={key} value={value}>
                  {value}
                </option>
              ))}
            </Select>
          </div>
          <div className="signup-select">
            <SignupText>파트 선택</SignupText>
            <Select
              value={teamSelect}
              onChange={handleTeamChange}
              borderColor={teamFocus}
              onFocus={() => {
                setTeamFocus('#3172ea');
              }}
              onBlur={() => {
                setTeamFocus('#cccccc');
              }}
            >
              <option value="">선택</option>
              {Object.entries(Team).map(([key, value]) => (
                <option key={key} value={value}>
                  {value}
                </option>
              ))}
            </Select>
          </div>
        </SignupSelectWrapper>
        <SignupText>이메일 인증</SignupText>
        <InputWrapper>
          <Input
            height={'4.0625rem'}
            width={'22.5rem'}
            placeholder="이메일을 입력해주세요."
            status={emailFocus}
            onFocus={() => {
              setEmailFocus('active');
            }}
            onBlur={() => {
              setEmailFocus('default');
            }}
          />
          <Button text={'인증번호 전송'} width={'9.75rem'}></Button>
        </InputWrapper>
        <SignupText>인증번호</SignupText>
        <InputWrapper>
          <Input
            height={'4.0625rem'}
            width={'22.5rem'}
            placeholder="인증번호를 입력해주세요."
            status={verifyNumberFocus}
            onFocus={() => {
              setVerifyNumberFocus('active');
            }}
            onBlur={() => {
              setVerifyNumberFocus('default');
            }}
          />
          <Button text={'인증번호 확인'} width={'9.75rem'}></Button>
        </InputWrapper>
        <Space height={'3rem'} />
        <Button
          text={'회원가입 완료'}
          width={'34rem'}
          height={'4.0625rem'}
        ></Button>
      </SignupWrapper>
    </SignupPageWrapper>
  );
}
const SignupPageWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const SignupWrapper = styled.div`
  width: 34rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const SignupHeader = styled.div`
  font-size: 1.875rem;
  font-style: normal;
  font-weight: 800;
  margin-bottom: 2rem;
  line-height: 30px;
  letter-spacing: -0.6px;
  color: #3e4cf7;
`;
const SignupText = styled.div`
  font-size: 1.375rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.44px;
  color: #101010;
  margin-bottom: 1rem;
  padding-top: 1.2rem;
`;
const SignupSelectWrapper = styled.div`
  display: flex;
  gap: 1.875rem;
  .signup-select {
    display: flex;
    flex-direction: column;
  }
`;
const Select = styled.select<{ borderColor: string }>`
  font-family: Pretendard;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.4px;
  border-radius: 0.625rem;
  height: 3.125rem;
  width: 12.5rem;
  border: 2px solid
    ${({ borderColor }) => (borderColor ? borderColor : '#cccccc')};
  padding-left: 0.625rem;
`;
const InputWrapper = styled.div`
  display: flex;
  gap: 0.75rem;
`;
const Space = styled.div<{ height: string }>`
  height: ${({ height }) => height};
`;
export default SignupPage;
