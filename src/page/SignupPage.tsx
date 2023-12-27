import { useEffect, useState } from 'react';
import { useCustomSelect, useButtonInput, useInput } from 'hooks';
import { useNavigate } from 'react-router-dom';
import { Button } from 'components/Common/Button';
import Input from 'components/Common/Input';
import { Part, Team } from 'utils/constant';
import styled from 'styled-components';
import {
  postCheckEmail,
  postCheckId,
  postSendEmail,
  postSignUp,
} from 'api/post';
import { InputStatus } from 'utils/type';

function SignupPage() {
  const navigate = useNavigate();
  //드롭다운 select
  const partSelect = useCustomSelect('', 'part');
  const teamSelect = useCustomSelect('', 'team');
  //버튼 없는 input
  const idInput = useInput('');
  const nameInput = useInput('');
  const pwInput = useInput('');
  const pwCheckInput = useInput('');
  //버튼 있는 input
  const emailInput = useButtonInput('');
  const verifyCodeInput = useButtonInput('');
  // 최종 회원가입 버튼
  const [signupBottonStatus, setSignupBottonStatus] =
    useState<string>('inactive');
  // 회원가입 submit
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const body = {
      loginId: idInput.value,
      name: nameInput.value,
      email: emailInput.value,
      password: pwInput.value,
      partName: partSelect.apiValue,
      teamName: teamSelect.apiValue,
    };
    try {
      const res: any = await postSignUp(body);
      if (res.status === 201) {
        // 회원가입 성공
        alert('성공적으로 가입되었습니다.');
        navigate('/login');
      } else if (res.response.status === 409) {
        alert('이미 존재하는 이메일 혹은 로그인 아이디입니다.');
      } else {
        alert('error');
      }
    } catch (error) {
      console.log(error);
      return error;
    }
  };
  // id 중복 체크
  const handleCheckId: React.FocusEventHandler<HTMLInputElement> = async (
    e,
  ) => {
    e.preventDefault();
    const body = {
      loginId: idInput.value,
    };
    try {
      const res: any = await postCheckId(body);
      if (res.status === 200) {
        idInput.setStatus('default');
        if (idInput.value.trim() !== '') {
          //사용 가능 아이디인 경우
          idInput.setIsValid(true);
          idInput.setMessage('사용 가능한 아이디입니다.');
        } else {
          // 입력 문자열이 null인 경우
          idInput.setStatus('error');
          idInput.setIsValid(false);
          idInput.setMessage('아이디를 입력해주세요.');
        }
      } else if (res.response.status === 409) {
        // 이미 존재하는 아이디인 경우
        idInput.setStatus('error');
        idInput.setMessage('이미 사용 중인 아이디입니다.');
      } else {
        idInput.setStatus('error');
        alert('error');
      }
    } catch (error) {
      console.log(error);
      return error;
    }
  };
  // 이메일 전송
  const handleSendEmail: React.MouseEventHandler<HTMLButtonElement> = async (
    e,
  ) => {
    e.preventDefault();
    const body = {
      email: emailInput.value,
    };
    try {
      const res: any = await postSendEmail(body);
      if (res.status === 200) {
        //사용 가능한 이메일
        emailInput.setStatus('default');
        emailInput.setMessage('이메일이 전송되었습니다.');
      } else {
        emailInput.setStatus('error');
        if (res.response.status === 400) {
          // 이메일 형식이 올바르지 않음
          emailInput.setMessage('이메일 형식이 올바르지 않습니다.');
        } else if (res.response.status === 403) {
          //인증번호 유효 시간 3분이 지나지 않은 코드 존재
          emailInput.setMessage('전송된 인증번호가 존재합니다.');
        } else if (res.response.status === 409) {
          //이미 존재하는 이메일
          emailInput.setMessage('이미 존재하는 이메일입니다.');
        } else {
          alert('error');
        }
      }
    } catch (error) {
      console.log(error);
      return error;
    }
  };
  // 인증 번호 check
  const handleCheckEmail: React.MouseEventHandler<HTMLButtonElement> = async (
    e,
  ) => {
    e.preventDefault();
    const body = {
      email: emailInput.value,
      code: verifyCodeInput.value,
    };
    try {
      const res: any = await postCheckEmail(body);
      if (res.status === 200) {
        //인증 번호 일치
        verifyCodeInput.setStatus('default');
        verifyCodeInput.setMessage('인증 번호가 일치합니다.');
        verifyCodeInput.setIsValid(true);
      } else if (res.response.status === 400) {
        // 인증 번호 불일치
        verifyCodeInput.setStatus('error');
        verifyCodeInput.setMessage(
          '인증번호가 일치하지 않습니다. 다시 입력해주세요.',
        );
        verifyCodeInput.setIsValid(false);
      } else {
        verifyCodeInput.setStatus('error');
        alert('error');
      }
    } catch (error) {
      console.log(error);
      return error;
    }
    return;
  };
  //valid 요건 충족할 경우 submit 가능
  useEffect(() => {
    if (
      idInput.isValid &&
      verifyCodeInput.isValid &&
      pwCheckInput.isValid &&
      partSelect.isValid &&
      teamSelect.isValid
    ) {
      setSignupBottonStatus('active');
    } else {
      setSignupBottonStatus('inactive');
    }
  }, [
    idInput.isValid,
    pwCheckInput.isValid,
    partSelect.isValid,
    teamSelect.isValid,
    verifyCodeInput.isValid,
  ]);
  return (
    <SignupPageWrapper>
      <SignupWrapper onSubmit={handleSubmit}>
        <SignupHeader>회원가입</SignupHeader>
        <SignupText>아이디</SignupText>
        <Input
          height={'3.5rem'}
          placeholder="아이디를 입력해주세요."
          status={idInput.status}
          onFocus={() => {
            idInput.setStatus('active');
            idInput.setMessage('');
          }}
          onBlur={handleCheckId}
          value={idInput.value}
          onChange={idInput.onChange}
        />
        <AlertText status={idInput.status}>{idInput.message}</AlertText>
        <SignupText>이름</SignupText>
        <Input
          height={'3.5rem'}
          placeholder="이름을 입력해주세요."
          status={nameInput.status}
          onFocus={() => {
            nameInput.setStatus('active');
          }}
          onBlur={() => {
            nameInput.setStatus('default');
          }}
          value={nameInput.value}
          onChange={nameInput.onChange}
        />
        <SignupText>비밀번호</SignupText>
        <Input
          type="password"
          height={'3.5rem'}
          placeholder="비밀번호를 입력해주세요."
          status={pwInput.status}
          onFocus={() => {
            pwInput.setStatus('active');
          }}
          onBlur={() => {
            pwInput.setStatus('default');
          }}
          value={pwInput.value}
          onChange={pwInput.onChange}
        />
        <Space height={'1.25rem'} />
        <Input
          type="password"
          height={'3.5rem'}
          placeholder="비밀번호를 다시 입력해주세요."
          status={pwCheckInput.status}
          onFocus={() => {
            pwCheckInput.setStatus('active');
            pwCheckInput.setMessage('');
          }}
          onBlur={() => {
            if (
              pwInput.value.trim() === '' &&
              pwCheckInput.value.trim() === ''
            ) {
              pwCheckInput.setIsValid(false);
              pwInput.setStatus('error');
              pwCheckInput.setStatus('error');
              pwCheckInput.setMessage('비밀번호를 입력해주세요.');
            } else {
              if (pwInput.value === pwCheckInput.value) {
                pwCheckInput.setIsValid(true);
                pwInput.setStatus('default');
                pwCheckInput.setStatus('default');
                pwCheckInput.setMessage('');
              } else {
                pwCheckInput.setIsValid(false);
                pwInput.setStatus('error');
                pwCheckInput.setStatus('error');
                pwCheckInput.setMessage('비밀번호가 일치하지 않습니다.');
              }
            }
          }}
          value={pwCheckInput.value}
          onChange={pwCheckInput.onChange}
        />
        <AlertText status={pwCheckInput.status}>
          {pwCheckInput.message}
        </AlertText>
        <SignupSelectWrapper>
          <div className="signup-select">
            <SignupText>파트 선택</SignupText>
            <Select
              value={partSelect.selectValue}
              onChange={partSelect.onChange}
              borderColor={partSelect.borderColor}
              onFocus={partSelect.onFocus}
              onBlur={partSelect.onBlur}
              bgColor={partSelect.bgColor}
            >
              <option value="">선택</option>
              {Object.entries(Part).map(([key, value]) => (
                <option key={key} value={value}>
                  {value}
                </option>
              ))}
            </Select>
            <AlertText status={'error'}>{partSelect.message}</AlertText>
          </div>
          <div className="signup-select">
            <SignupText>팀 선택</SignupText>
            <Select
              value={teamSelect.selectValue}
              onChange={teamSelect.onChange}
              borderColor={teamSelect.borderColor}
              onFocus={teamSelect.onFocus}
              onBlur={teamSelect.onBlur}
              bgColor={teamSelect.bgColor}
            >
              <option value="">선택</option>
              {Object.entries(Team).map(([key, value]) => (
                <option key={key} value={value}>
                  {value}
                </option>
              ))}
            </Select>
            <AlertText status={'error'}>{teamSelect.message}</AlertText>
          </div>
        </SignupSelectWrapper>
        <SignupText>이메일 인증</SignupText>
        <InputWrapper>
          <Input
            height={'3.5rem'}
            width={'22.5rem'}
            placeholder="이메일을 입력해주세요."
            status={emailInput.status}
            onFocus={() => {
              emailInput.setStatus('active');
              emailInput.setMessage('');
            }}
            onBlur={() => {
              emailInput.setStatus('default');
            }}
            value={emailInput.value}
            onChange={emailInput.onChange}
          />
          <Button
            text={'인증번호 전송'}
            width={'9.75rem'}
            status={emailInput.buttonStatus}
            onClick={handleSendEmail}
          ></Button>
        </InputWrapper>
        <AlertText status={emailInput.status}>{emailInput.message}</AlertText>
        <SignupText>인증번호</SignupText>
        <InputWrapper>
          <Input
            height={'3.5rem'}
            width={'22.5rem'}
            placeholder="인증번호를 입력해주세요."
            status={verifyCodeInput.status}
            onFocus={() => {
              verifyCodeInput.setStatus('active');
            }}
            onBlur={() => {
              verifyCodeInput.setStatus('default');
            }}
            value={verifyCodeInput.value}
            onChange={verifyCodeInput.onChange}
          />
          <Button
            text={'인증번호 확인'}
            width={'9.75rem'}
            status={verifyCodeInput.buttonStatus}
            onClick={handleCheckEmail}
          ></Button>
        </InputWrapper>
        <AlertText status={verifyCodeInput.status}>
          {verifyCodeInput.message}
        </AlertText>
        <Space height={'3rem'} />
        <Button
          type={'submit'}
          text={'회원가입 완료'}
          width={'34rem'}
          height={'3.5rem'}
          status={signupBottonStatus}
        ></Button>
      </SignupWrapper>
    </SignupPageWrapper>
  );
}
const SignupPageWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const SignupWrapper = styled.form`
  width: 34rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 3rem;
  margin-bottom: 3rem;
`;
const SignupHeader = styled.div`
  font-size: 1.875rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  line-height: 30px;
  letter-spacing: -0.6px;
  color: #3e4cf7;
`;
const SignupText = styled.div`
  font-size: 1.25rem;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.44px;
  color: #101010;
  margin-bottom: 1rem;
  padding-top: 1rem;
`;
const SignupSelectWrapper = styled.div`
  display: flex;
  gap: 1.875rem;
  .signup-select {
    display: flex;
    flex-direction: column;
  }
`;
const Select = styled.select<{ borderColor: string; bgColor: string }>`
  font-family: Pretendard;
  font-size: 1.125rem;
  font-weight: 600;
  letter-spacing: -0.4px;
  border-radius: 0.625rem;
  height: 3.125rem;
  width: 12.5rem;
  border: 2px solid ${({ borderColor }) => borderColor};
  background-color: ${({ bgColor }) => bgColor};
  padding-left: 0.625rem;
`;
const InputWrapper = styled.div`
  display: flex;
  gap: 0.75rem;
`;
const Space = styled.div<{ height: string }>`
  height: ${({ height }) => height};
`;
const AlertText = styled.div<{ status: InputStatus }>`
  padding-top: 0.5rem;
  padding-left: 0.5rem;
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: -0.0225rem;
  color: ${(props) => (props.status === 'error' ? '#db4242' : '#3172ea')};
`;
export default SignupPage;
