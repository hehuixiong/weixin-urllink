import axios from 'axios'

// 创建 axios 实例
const instance = axios.create({
  baseURL: '/api',
  headers: {
    'Access-Control-Allow-Origin': '*'
  }
})

// axios 全局默认配置
instance.defaults.timeout = 0

// 请求拦截器
instance.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  }
)


// 添加响应拦截器
instance.interceptors.response.use(
  response => Promise.resolve(response),
  error => {
    console.log(error)
  }
)

export const HTTP = instance
