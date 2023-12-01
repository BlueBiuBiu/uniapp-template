import { BASE_URL, TIME_OUT } from "../config";

interface IOptions {
  url: string;
  data?: object | string;
  header?: object;
  method?:
    | "GET"
    | "POST"
    | "PUT"
    | "DELETE"
    | "CONNECT"
    | "HEAD"
    | "OPTIONS"
    | "TRACE";
  responseType?: "text" | "arraybuffer";
}

class Request {
  request<T>(options: IOptions) {
    uni.showLoading({
      title: "数据加载中...",
    });

    return new Promise((resolve, reject) => {
      uni.request({
        url: BASE_URL + options.url,
        timeout: TIME_OUT,
        data: options.data,
        header: options.header,
        method: options.method,
        success: function (res) {
          resolve(res.data);
        },
        fail: reject,
        complete: (res) => {
          uni.hideLoading();
        },
      });
    });
  }

  get<T>(config: IOptions) {
    return this.request<T>({ ...config, method: "GET" });
  }

  post<T>(config: IOptions) {
    return this.request<T>({ ...config, method: "POST" });
  }

  put<T>(config: IOptions) {
    return this.request<T>({ ...config, method: "PUT" });
  }

  delete<T>(config: IOptions) {
    return this.request<T>({ ...config, method: "DELETE" });
  }
}

export default Request;
