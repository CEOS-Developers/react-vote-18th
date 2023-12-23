import { useMutation } from '@tanstack/react-query';
import React from 'react';
import axiosInstance from '..';

/**
 * 데모데이 팀 투표 데이터 넘기기
 * @param  
 *      {
            "teamName": string
        }
 * @returns 
 */

interface TeamVoteData {
  teamName: string;
}

export const usePostVoteTeam = () => {
  const { mutate, isPending, error, isSuccess } = useMutation({
    mutationKey: ['voteTeam'],
    mutationFn: async (data: TeamVoteData) => {
      const res = await axiosInstance.post(`/api/vote/demoday`, data);

      return res.data;
    },
  });

  return {
    voteTeam: mutate,
    isPending,
    isSuccess,
    error,
  };
};
