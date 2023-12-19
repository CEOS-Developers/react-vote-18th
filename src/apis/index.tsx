import axios from 'axios';

const BASE_URL = 'https://springvote.shop/';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

// 요청 인터셉터
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('accessToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// 응답 인터셉터
axiosInstance.interceptors.response.use(
  (response) => {
    //응답데이터 콘솔찍기
    console.log(response);

    return response;
  },
  (error) => {
    console.log(error.response);

    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    //403에러처리
    if (error.response && error.response.status === 403) {
      console.log('403 Error: accessToken없음');
    }

    //401에러처리
    if (error.response && error.response.status === 401) {
      console.log('401 Error: accessToken만료');

      //refreshToken으로 갱신
    }
  }
);

export default axiosInstance;
