import { getInstance, instance } from './axios';

//파트장 후보 get
export const getPartLeader = async (params: any) =>
  await getInstance('/partLeader', params);
//demoday 후보 get
export const getDemoday = async () => await getInstance('/demoday');
