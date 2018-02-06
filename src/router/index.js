import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import Footer from '../assets/template/footer'

Vue.component('my-footer', Footer)

Vue.use(VueResource);
Vue.use(Router);
const main = r => require.ensure([], () => r(require('../components/main.vue')), 'main'),//主頁面
  setUp = r => require.ensure([], () => r(require('../components/setUp.vue')), 'main'),//设置
  schedule = r => require.ensure([], () => r(require('../components/schedule.vue')), 'main'),//赛程
  prospect = r => require.ensure([], () => r(require('../components/prospect.vue')), 'main'),//前瞻
  mark = r => require.ensure([], () => r(require('../components/mark.vue')), 'main'),//指数
  dataCeania = r => require.ensure([], () => r(require('../components/dataCeania.vue')), 'main')//资料
;
export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: main
    },{
      path: '/dataCeania',
      name: 'dataCeania',
      component: dataCeania
    },{
      path: '/setUp',
      name: 'setUp',
      component: setUp
    },{
      path: '/schedule',
      name: 'schedule',
      component: schedule
    },{
      path: '/prospect',
      name: 'prospect',
      component: prospect
    },{
      path: '/mark',
      name: 'mark',
      component: mark
    },
  ]
})
