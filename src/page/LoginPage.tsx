import { postLogin } from 'api/post';
import { Button } from 'components/Common/Button';
import Input from 'components/Common/Input';
import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { isLoginAtom } from 'recoil/atom';
import styled from 'styled-components';

interface InputStatus {
  id: string;
  password: string;
  saveChecked: boolean;
}
function LoginPage() {
  const [inputStatus, setInputStatsus] = useState<InputStatus>({
    id: '',
    password: '',
    saveChecked: false,
  });
  const navigate = useNavigate();
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputStatsus({ ...inputStatus, [e.target.name]: e.target.value });
  };
  const setLoginState = useSetRecoilState<boolean>(isLoginAtom);
  const [cookies, setCookie, removeCookie] = useCookies([
    'userEmail',
    'userPassword',
  ]);

  useEffect(() => {
    const savedEmail = cookies?.userEmail;
    const savedPassword = cookies?.userPassword;
    if (savedEmail && savedPassword) {
      setInputStatsus({
        ...inputStatus,
        id: inputStatus?.id,
        password: inputStatus?.password,
      });
    }
  }, []);

  const handleLogin = async () => {
    const body = {
      loginId: inputStatus.id,
      password: inputStatus.password,
    };
    try {
      const res: any = await postLogin(body);
      setLoginState(true);
      localStorage.setItem('accessToken', res.data.accessToken);
      localStorage.setItem('refreshToken', res.data.refreshToken);
      if (inputStatus.saveChecked) {
        setCookie('userEmail', inputStatus.id, { path: '/' });
      } else {
        removeCookie('userEmail', { path: '/' });
      }

      navigate('/');
    } catch (err) {
      alert('아이디 혹은 비밀번호가 틀렸습니다.');
      console.log(err);
    }
  };
  return (
    <LoginPageWrapper>
      <LoginWrapper>
        <LoginHeader>로그인</LoginHeader>
        <IdSection>
          <LoginIndexText>아이디(이메일)</LoginIndexText>
          <Input
            name="id"
            placeholder="아이디를 입력해주세요."
            width={'90%'}
            height={'3.5rem'}
            value={inputStatus.id}
            onChange={onChange}
          />
        </IdSection>
        <PasswordSection>
          <LoginIndexText>비밀번호</LoginIndexText>
          <Input
            name="password"
            placeholder="비밀번호를 입력해주세요."
            width={'90%'}
            type="password"
            height={'3.5rem'}
            value={inputStatus.password}
            onChange={onChange}
          />
        </PasswordSection>

        <AdditionalSection>
          <SaveIdLabel htmlFor="saveid">
            <SaveIdInput
              type="checkbox"
              id="saveid"
              checked={inputStatus.saveChecked}
              onChange={(e) =>
                setInputStatsus({
                  ...inputStatus,
                  saveChecked: e.target.checked,
                })
              }
            />
            아이디 저장
          </SaveIdLabel>
        </AdditionalSection>

        <Button text="로그인" height="3.5rem" onClick={handleLogin} />
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
