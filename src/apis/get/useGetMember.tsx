import { useQuery } from '@tanstack/react-query';
import React from 'react';
import axiosInstance from '..';
import { useNavigate } from 'react-router-dom';

/**
 * 멤버 후보 가져오기
 * @param partName
 * @returns name list
 */
export const useGetMember = (partName: string) => {
  const navigate = useNavigate();
  const { isLoading, data, error } = useQuery({
    queryKey: ['member'],
    queryFn: async () => {
      const res = await axiosInstance.get(
        `/api/vote/candidates?part-name=${partName}`
      );

      console.log(res.status);
      if (res.status === 400) {
        navigate('/login');
        alert('접근오류! 로그인하세요');
      }

      return res.data;
    },
  });

  return {
    member: data || null,
    isLoading,
    error,
  };
};
