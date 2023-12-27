import { useMutation } from '@tanstack/react-query';
import React, { useEffect } from 'react';
import axiosInstance from '..';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();
  const { mutate, isPending, error, isSuccess, status } = useMutation({
    mutationKey: ['voteTeam'],
    mutationFn: async (data: TeamVoteData) => {
      const res = await axiosInstance.post(`/api/vote/demoday`, data);

      if (res.status === 400) {
        alert('본인의 팀에는 투표할 수 없습니다!');
        navigate(`/teamvote`);
      } else if (res.status === 500) {
        alert('투표는 한번만 할 수 있습니다!');
        navigate(`/teamvote`);
      } else if (res.status === 201) {
        alert('투표 성공');
        navigate(`/teamresult`);
      } else if (res.status === 401) {
        navigate('/login');
        alert('접근오류! 로그인하세요');
      }

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
