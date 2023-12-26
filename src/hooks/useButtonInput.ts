import { useState, Dispatch, SetStateAction } from 'react';
import { InputStatus } from 'utils/type';

type UseButtonInputResult = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  status: InputStatus;
  setStatus: Dispatch<SetStateAction<InputStatus>>;
  message: string;
  setMessage: Dispatch<SetStateAction<string>>;
  isValid: boolean;
  setIsValid: Dispatch<SetStateAction<boolean>>;
  buttonStatus: string;
};
//버튼과 함께 사용하는 input
export const useButtonInput = (initialValue: string) => {
  const [value, setValue] = useState<string>(initialValue);
  const [status, setStatus] = useState<InputStatus>('default');
  //error 메세지
  const [message, setMessage] = useState<string>('');
  //해당 input이 유효한지 여부, 모든 input이 valid 할 시 회원가입 submit 버튼 누를 수 있도록 처리
  const [isValid, setIsValid] = useState<boolean>(false);
  const [buttonStatus, setButtonStatus] = useState('inactive');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);

    if (e.target.value.trim() !== '') {
      setButtonStatus('active');
    } else {
      setButtonStatus('inactive');
    }
  };

  return {
    value,
    onChange,
    status,
    setStatus,
    buttonStatus,
    message,
    setMessage,
    isValid,
    setIsValid,
  } as UseButtonInputResult;
};
