import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  CreateAxiosDefaults,
  InternalAxiosRequestConfig
} from 'axios'
import { ElMessage } from 'element-plus'

/**
 * Request: 对 Axios 进行二次封装
 */
class Request {
  // Axios 的实例对象
  private axiosInstance: AxiosInstance | null = null

  constructor (defaultConfig: CreateAxiosDefaults) {
    // 初始化 AxiosInstance 对象
    this.axiosInstance = axios.create(defaultConfig)

    // 设置请求和响应拦截
    this.httpInterceptorsRequest()
    this.httpInterceptorsResponse()
  }

  // 请求拦截
  private httpInterceptorsRequest () {
    this.axiosInstance?.interceptors.request.use((config: InternalAxiosRequestConfig) => {
      return config
    }, err => {
      return Promise.reject(err)
    })
  }

  // 响应拦截
  private httpInterceptorsResponse () {
    this.axiosInstance?.interceptors.response.use((response: AxiosResponse) => {
      return response
    }, err => {
      if (err && err.response) {
        if (err.response.status === 401) {
          // TODO 无权限时的操作
        }

        if (err.response.data) {
          const errData = err.response.data
          ElMessage({
            showClose: true,
            message: `${errData.msg}(${errData.code})`,
            type: 'error',
            center: true
          })
        }
      }
      return Promise.reject(err)
    })
  }

  /**
   * get 请求
   */
  public get<T> (url: string, params?: AxiosRequestConfig): Promise<T> {
    return this.axiosInstance!.get(url, params).then(resp => resp.data).catch()
  }

  /**
   * post 请求
   */
  public post<T> (url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    return this.axiosInstance!.post(url, data, config).then(resp => resp.data).catch()
  }

  /**
   * delete 请求
   */
  public remove<T> (url: string, params?: AxiosRequestConfig): Promise<T> {
    return this.axiosInstance!.delete(url, params).then(resp => resp.data).catch()
  }

  /**
   * put 请求
   */
  public put<T> (url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    return this.axiosInstance!.put(url, data, config)
  }
}

// 默认配置
const defaultConfig: CreateAxiosDefaults = {
  timeout: 5000,
  baseURL: import.meta.env.VITE_BASE_API
}

// 导出 Request 类的对象
export const request = new Request(defaultConfig)

// 默认导出 Request 类
export default Request
