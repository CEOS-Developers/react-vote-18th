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
export const usePostIdToken = (data: JSON | null) => {
  const { mutate, isPending, error, isSuccess } = useMutation({
    mutationKey: ['join'],
    mutationFn: async (data) => {
      const res = await axiosInstance.post(`/api/users/join`, data);
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
