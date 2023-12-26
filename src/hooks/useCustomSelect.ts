import { useState } from 'react';
import { Part, Team } from 'utils/constant';
export const useCustomSelect = (initValue: string, type: string) => {
  //UI로 보여지는 value
  const [selectValue, setSelectValue] = useState(initValue);
  //서버로 보내지는 value
  const [apiValue, setApiValue] = useState<string | undefined>('');
  //border color
  const [bdColor, setBdColor] = useState('#cccccc');
  //back ground color
  const [bgColor, setBgColor] = useState('#ffffff');
  //error message
  const [message, setMessage] = useState<string>('');
  const [isValid, setIsValid] = useState<boolean>(false);
  //api value를 key 값으로 설정, post 시 사용
  const findKeyByValue = (
    obj: Record<string, string>,
    value: string,
  ): string | undefined => {
    const result = Object.keys(obj).find((key) => obj[key] === value);
    return result ? result : undefined;
  };

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(e.target.value);
    let value: string | undefined;
    if (type === 'part') {
      value = findKeyByValue(Part, e.target.value);
    } else if (type === 'team') {
      value = findKeyByValue(Team, e.target.value);
    } else {
      alert('error');
      return;
    }
    console.log(value);
    setApiValue(value);
    setBdColor('#3172ea');
    if (e.target.value.trim() === '') {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  };

  const handleFocus = () => {
    setMessage('');
    setBdColor('#3172ea');
  };

  const handleBlur = () => {
    if (selectValue === '') {
      setBgColor('#fff8f8');
      setBdColor('#db4242');
      if (type === 'part') setMessage('파트를 선택해주세요.');
      else setMessage('팀을 선택해주세요');
    } else {
      setBgColor('#ffffff');
      setBdColor('#cccccc');
    }
  };

  return {
    selectValue,
    apiValue,
    onChange: handleChange,
    onFocus: handleFocus,
    onBlur: handleBlur,
    borderColor: bdColor,
    bgColor: bgColor,
    isValid,
    message,
  };
};
