import { useQuery } from '@tanstack/react-query';
import React from 'react';
import axiosInstance from '..';
import { useNavigate } from 'react-router-dom';

/**
 * 팀 투표 결과 가져오기
 * @param
 * @returns 팀별 count
 */
export const useGetTeamResult = () => {
  const navigate = useNavigate();
  const { isLoading, data, error } = useQuery({
    queryKey: ['teamResult'],
    queryFn: async () => {
      const res = await axiosInstance.get(`/api/vote/teams`);

      return res.data;
    },
  });

  return {
    teamResult: data || ['0', '1', '2', '3', '4'],
    isLoading,
    error,
  };
};
