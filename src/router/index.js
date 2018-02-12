import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import Footer from '../assets/template/footer'
import mainNavigation from '../assets/template/mainNavigation'
import YDUI from 'vue-ydui'//document=>http://vue.ydui.org/docs/#/tab
import 'vue-ydui/dist/ydui.rem.css';

Vue.use(YDUI);
Vue.component('my-footer', Footer);
Vue.component('mainNavigation', mainNavigation);

Vue.use(VueResource);
Vue.use(Router);
const main = r => require.ensure([], () => r(require('../components/main.vue')), 'main'),//主頁面
  setUp = r => require.ensure([], () => r(require('../components/setUp.vue')), 'main'),//设置
  immediate = r => require.ensure([], () => r(require('../components/immediate.vue')), 'main'),//即时
  schedule = r => require.ensure([], () => r(require('../components/schedule.vue')), 'main'),//赛程
  prospect = r => require.ensure([], () => r(require('../components/prospect.vue')), 'main'),//前瞻
  prospectDetail = r => require.ensure([], () => r(require('../components/prospectDetail.vue')), 'main'),//前瞻详情
  mark = r => require.ensure([], () => r(require('../components/mark.vue')), 'main'),//指数
  dataInternational = r => require.ensure([], () => r(require('../components/dataInternational.vue')), 'main'),//赛事资料库
  international = r => require.ensure([], () => r(require('../components/international.vue')), 'main'),//搜索展示赛事资料库
  preselection = r => require.ensure([], () => r(require('../components/preselection.vue')), 'main'),//赛程赛果
  worldCup = r => require.ensure([], () => r(require('../components/worldCup.vue')), 'main'),//赛程赛果&&小组赛
  england = r => require.ensure([], () => r(require('../components/england.vue')), 'main'),//积分，赛程，大小射手榜
  dataCeania = r => require.ensure([], () => r(require('../components/dataCeania.vue')), 'main')//资料
;
export default new Router({
  routes: [
    {
      path: '/main',
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
      path: '/immediate',
      name: 'immediate',
      component: immediate
    },{
      path: '/schedule',
      name: 'schedule',
      component: schedule
    },{
      path: '/prospect',
      name: 'prospect',
      component: prospect
    },{
      path: '/prospectDetail',
      name: 'prospectDetail',
      component: prospectDetail
    },{
      path: '/mark',
      name: 'mark',
      component: mark
    },{
      path: '/dataInternational',
      name: 'dataInternational',
      component: dataInternational
    },{
      path: '/preselection',
      name: 'preselection',
      component: preselection
    },{
      path: '/england',
      name: 'england',
      component: england
    },{
      path: '/worldCup',
      name: 'worldCup',
      component: worldCup
    },{
      path: '/international',
      name: 'international',
      component: international
    },
  ]
})
