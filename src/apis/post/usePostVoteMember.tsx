import { useMutation } from '@tanstack/react-query';
import React, { useEffect } from 'react';
import axiosInstance from '..';
import { useNavigate } from 'react-router-dom';

/**
 * 파트장 투표 데이터 넘기기
 * @param  
 *      {
            candidateId: number
        }
 * @returns 
 */

interface MemberVoteData {
  candidateId: number;
}

export const usePostVoteMember = () => {
  const navigate = useNavigate();
  const { mutate, isPending, error, isSuccess, status } = useMutation({
    mutationKey: ['voteMember'],
    mutationFn: async (data: MemberVoteData) => {
      const res = await axiosInstance.post(`/api/vote/leader`, data);

      if (res.status === 401) {
        alert('로그인해주세요!');
      } else if (res.status === 500) {
        alert('투표는 한번만 할 수 있습니다!');
      } else if (res.status === 201) {
        alert('투표 성공');
        navigate('/memberresult');
      }

      return res.data;
    },
  });

  return {
    voteMember: mutate,
    isPending,
    isSuccess,
    error,
  };
};
