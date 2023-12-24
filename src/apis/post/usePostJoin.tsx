import { useMutation } from '@tanstack/react-query';
import React from 'react';
import axiosInstance from '..';

/**
 * 회원가입하기
 * @param  
 *      {
        "loginId": "string",
        "email": "string",
        "pwd": "string",
        "name": "string",
        "partName": "FRONTEND",
        "teamName": "SHAREMIND"
        }
 * @returns 
 */

interface UserJoinData {
  loginId: string;
  email: string;
  pwd: string;
  name: string;
  partName: string;
  teamName: string;
}

export const usePostJoin = () => {
  const { mutate, isPending, error, isSuccess } = useMutation({
    mutationKey: ['join'],
    mutationFn: async (data: UserJoinData) => {
      const res = await axiosInstance.post(`/api/users/join`, data);
      return res.data;
    },
  });

  return {
    join: mutate,
    isPending,
    isSuccess,
    error,
  };
};
