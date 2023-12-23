import React, { useEffect, useState } from 'react';
import { usePostJoin } from '../apis/post/usePostJoin';

const SignUp = () => {
  const [userJoinData, setUserJoinData] = useState({
    loginId: 'myId',
    email: 'myEmail',
    pwd: 'myPwd',
    name: 'myName',
    partName: 'FRONTEND',
    teamName: 'GOTCHA',
  });

  //post data
  const fetchData = usePostJoin(userJoinData);

  useEffect(() => {
    fetchData.join();
  }, [fetchData]);

  return (
    <div>
      <h1>This is SignUp</h1>
    </div>
  );
};

export default SignUp;
