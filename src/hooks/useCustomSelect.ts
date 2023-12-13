import { useState } from 'react';

export const useCustomSelect = (initValue: string) => {
  const [selectValue, setSelectValue] = useState(initValue);
  const [bdColor, setBdColor] = useState('#cccccc');

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(e.target.value);
    setBdColor('#3172ea');
  };

  const handleFocus = () => {
    setBdColor('#3172ea');
  };

  const handleBlur = () => {
    setBdColor('#cccccc');
  };

  return {
    selectValue,
    onChange: handleChange,
    onFocus: handleFocus,
    onBlur: handleBlur,
    borderColor: bdColor,
  };
};
