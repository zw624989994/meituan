import axios from 'axios'

axios.defaults.baseURL = 'http://open.duyiedu.com';
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    // console.log(config);
    config.params = {
        ...config.params,//之前的params内容放在这,后面在拼接，防止之前内容被覆盖
        appkey: "zw624989994_1583462314130"
    }
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

/* // 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
}); */

export default axios;
