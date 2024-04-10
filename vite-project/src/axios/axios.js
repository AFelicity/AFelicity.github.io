// 在项目中创建一个 axios.js 文件

import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://api.example.com', // 你的 API 地址
  timeout: 5000, // 请求超时时间（毫秒）
  headers: {
    'Content-Type': 'application/json', // 设置请求头，根据实际情况修改
  }
});

// 请求拦截器
instance.interceptors.request.use(
  config => {
    // 在发送请求之前做些什么，比如添加 token 等
    return config;
  },
  error => {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 响应拦截器
instance.interceptors.response.use(
  response => {
    // 对响应数据做点什么
    return response.data;
  },
  error => {
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);

export default instance;
