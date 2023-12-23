import { useMutation } from '@tanstack/react-query';
import React from 'react';
import axiosInstance from '..';

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
  const { mutate, isPending, error, isSuccess } = useMutation({
    mutationKey: ['login'],
    mutationFn: async (data: UserLoginData) => {
      const res = await axiosInstance.post(`/api/users/login`, data);

      //응답데이터 처리
      if (res.status === 201) {
        console.log('accessToken발급 성공');
        localStorage.setItem('accessToken', res.data.accessToken);
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
