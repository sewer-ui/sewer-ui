
let baseURL = ''
console.log("------",process.env.NODE_ENV)

if (process.env.NODE_ENV === 'development') {
  baseURL = 'https://100.100.100.101/dev' // 开发
} else if (process.env.NODE_ENV === 'testing') {
  baseURL = 'https://100.100.100.102/test' // 测试
} else if (process.env.NODE_ENV === 'production') {
  baseURL = 'https://100.100.100.103/prod' // 线上环境
}
export {
  baseURL
}