let BASE_URL = "";
if (process.env.NODE_ENV == "development") {
  BASE_URL = "https://www.httpbin.org"; // 开发环境
} else {
  BASE_URL = "https://www.httpbin.org"; // 生产环境
}
const TIME_OUT = 10000;

export { BASE_URL, TIME_OUT };
