import { useMutation } from '@tanstack/react-query';
import React from 'react';
import axiosInstance from '..';
import { useNavigate } from 'react-router-dom';

/**
 * 로그인하기
 * @param  
 *      {
            "loginId": "string",
            "pwd": "string"
        }
 * @returns 
 */

interface UserLoginData {
  loginId: string;
  pwd: string;
}

export const usePostLogin = () => {
  const navigate = useNavigate();
  const { mutate, isPending, error, isSuccess } = useMutation({
    mutationKey: ['login'],
    mutationFn: async (data: UserLoginData) => {
      const res = await axiosInstance.post(`/api/users/login`, data);

      //응답데이터 처리
      if (res.status === 201) {
        alert('로그인 성공!');
        localStorage.setItem('accessToken', res.data.accessToken);
        localStorage.setItem('partName', res.data.partName);
        localStorage.setItem('teamName', res.data.teamName);

        navigate(`/`);
      } else if (res.status === 404) {
        alert('존재하지 않는 아이디입니다!');
      } else if (res.status === 401) {
        alert('잘못된 비밀번호 입니다!');
      } else {
        alert('로그인 실패!');
      }
      return res.data;
    },
  });

  return {
    login: mutate,
    isPending,
    isSuccess,
    error,
  };
};
