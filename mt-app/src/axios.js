import axios from 'axios'
axios.defaults.baseURL = 'https://open.duyiedu.com';
axios.interceptors.request.use(function (config) {
    config.params = {
        appkey: 'qiuqiuqiu_1568687891720',
        ...config.params,

    }
    return config;
}, function(error){
    return Promise.reject(error);
})


export default axios
