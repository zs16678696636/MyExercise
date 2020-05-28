import axios from 'axios'
import store from '../../store/index'

// 请求拦截器
axios.interceptors.request.use(function (config) {
  store.commit('loadingFlageSj', true);
  // 在发送请求之前做些什么，例如加入token
  console.log(config)
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});
// 相应拦截器
axios.interceptors.response.use(function (response) {
  // 在接收响应做些什么，例如跳转到登录页
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

export default  (url,params) => {
  return new Promise(function(resolve,reject){
    axios({
      url,
      method: 'get',
      headers:{
        'Content-Type': 'application/json'
      },
      params
    }).then(response => {
      store.commit('loadingFlageSj', false);
      resolve(response)
    }).catch(err => {
      store.commit('loadingFlageSj', false);
      alert('服务器出差了')
    })
  })
}