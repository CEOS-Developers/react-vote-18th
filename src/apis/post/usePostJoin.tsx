import { useMutation } from '@tanstack/react-query';
import React from 'react';
import axiosInstance from '..';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();

  const { mutate, isPending, error, isSuccess } = useMutation({
    mutationKey: ['join'],
    mutationFn: async (data: UserJoinData) => {
      const res = await axiosInstance.post(`/api/users/join`, data);

      if (res.status === 200) {
        alert('회원가입 성공! 로그인하세요');
        navigate(`/login`);
      } else if (res.status === 409) {
        alert('이미 존재하는 사용자입니다!');
      } else {
        alert('회원가입 오류!');
      }

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
