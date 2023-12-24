import { useQuery } from '@tanstack/react-query';
import React from 'react';
import axiosInstance from '..';

/**
 * 팀 투표 결과 가져오기
 * @param
 * @returns 팀별 count
 */
export const useGetTeamResult = () => {
  const { isLoading, data, error } = useQuery({
    queryKey: ['teamResult'],
    queryFn: async () => {
      const res = await axiosInstance.get(`/api/vote/teams`);
      return res.data;
    },
  });

  return {
    teamResult: data || null,
    isLoading,
    error,
  };
};
