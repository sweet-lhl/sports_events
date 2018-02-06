// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

//vue.customPlugin

Object.assign(String.prototype, {
  replaceAll (search, replacement) { // 全局替换
    return this.replace(new RegExp(search, 'g'), replacement)
  },
  getTime () { // 时间转时间戳[单位:s]
    // this = '2014-04-23 18:55:49:123';
    let date = new Date(this)
    return Date.parse(date) / 1000
  }
});

Object.assign(Number.prototype, {
  getTime () { // 时间戳转时间[单位:s]
    // this = 1330870514;
    let date = new Date(this * 1000)
    return `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}. ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
  }
});
Object.assign(Vue.prototype, { // VUE内置对象扩展
  _api () { // api服务
    const [ag, data] = [arguments, new FormData()]
    localStorage.token !== undefined ? data.append('token', localStorage.token) : null
    for (let x in ag[1]) {
      data.append(x, ag[1][x])
    }
    return this.$http.post(`/shop/${ag[0]}`, data)
  },
  _output(e){
    console.group(`%ctitle：${e.title}`,'color:#0114fb;background-color:#01fb09');//打印分组
    console.info(`%cfrom：${document.title}`,'background-color:#077aec');
    console.dir(e.content);
    console.info('%cto：','background-color:#077aec');
    console.trace();
    console.groupEnd();
  },
  _batchAssignment () { // 批量赋值，可用于data与router.query的解析操作==>arguments依赖当前调用的页面
    for (let k in this.$route.query) { // 自动解析并处理，依赖Vue
      this[k] = this.$route.query[k]
    }
  },
  request(name) {
    const reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"), r = window.location.search.substr(1).match(reg);
    return r !== null ? unescape(r[2]) : null
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
