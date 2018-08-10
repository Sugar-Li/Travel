
import Vue from 'vue'
import App from './App'
import router from './router'
//插入 awesome-swiper插件
import VueAwesomeSwiper from 'vue-awesome-swiper'

//初始化移动端的相关样式
import 'css/reset.css'
import 'css/border.css'
import 'css/iconfont.css'
import fastClick from 'fastclick'

//请求使用awesome-swiper样式
import 'swiper/dist/css/swiper.css'
//使用awesome-swiper插件
Vue.use(VueAwesomeSwiper)



Vue.config.productionTip = false

fastClick.attach(document.body)


new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
