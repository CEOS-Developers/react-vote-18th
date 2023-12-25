import { useQuery } from '@tanstack/react-query';
import React from 'react';
import axiosInstance from '..';

/**
 * 멤버 후보 가져오기
 * @param partName
 * @returns name list
 */
export const useGetMember = (partName: string) => {
  const { isLoading, data, error } = useQuery({
    queryKey: ['member'],
    queryFn: async () => {
      const res = await axiosInstance.get(
        `/api/vote/candidates?part-name=${partName}`
      );
      return res.data;
    },
  });

  return {
    member: data || null,
    isLoading,
    error,
  };
};
