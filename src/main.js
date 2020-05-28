import Vue from 'vue'
import App from './App.vue'
import router from './router'
// vuex引入
import store from './store/index'
// 全局模块引入
import './assets/js/index'
// 全局组件引入
import './components/index'
// Element引入
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 字体图标css引入
import './assets/iconfont/iconfont.css'
// 私有指令
import plugins from './assets/js/plugins'
Vue.use(plugins)
// 公共样式
import './assets/css/base.css'
// 百度地图
import BaiduMap from 'vue-baidu-map';
Vue.use(BaiduMap, {
  ak: '9GEnCXK0R6jYkBHPYEcjv0lkaWXxynrK'
})
Vue.use(ElementUI)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
