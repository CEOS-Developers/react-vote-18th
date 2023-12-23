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

export const usePostJoin = (data: UserJoinData | null) => {
  const { mutate, isPending, error, isSuccess } = useMutation({
    mutationKey: ['join'],
    mutationFn: async (data) => {
      const res = await axiosInstance.post(`/api/users/join`, {
        loginId: 'nana',
        email: 'mama',
        pwd: 'nana',
        name: 'nanana',
        partName: 'FRONTEND',
        teamName: 'SHAREMIND',
      });
      return res.data;
    },
  });

  return {
    join: mutate,
    isPending,
    isSuccess,
    error,
    data,
  };
};
