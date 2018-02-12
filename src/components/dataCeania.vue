<template>
    <div id="data-ceania">
      <header>
        <span class="pull-left icon icon-left"></span>
        <h1 class="title text-center">足球资料库</h1>
      </header>
      <content>
        <div class="cont-search flex-box">
          <input v-model="search" type="text" placeholder="请输入国家或者联赛名称搜索">
          <div class="icon icon-search text-center" @click.capture="get_search">搜索</div>
        </div>
        <div class="flex-box col-2 text-center cont-naw">
          <div v-for="x in getCateList" :class="[tabKey===x.name?'active':'']" @click.capture="tabKey=x.name" v-text="x.name" :key="x.name">国际</div>
          <!--<div :class="[tabKey===1?'active':'']" @click.capture="tabKey=1">欧洲</div>
          <div :class="[tabKey===2?'active':'']" @click.capture="tabKey=2">美洲</div>
          <div :class="[tabKey===3?'active':'']" @click.capture="tabKey=3">亚洲</div>
          <div :class="[tabKey===4?'active':'']" @click.capture="tabKey=4">大洋洲</div>
          <div :class="[tabKey===5?'active':'']" @click.capture="tabKey=5">非洲</div>-->
        </div>
        <div>
          <ul v-if="tabKey==='国际'" class="con-list">
            <li v-for="x in getCateList[0].child" @click.capture="$router.push({path:'/dataInternational',query:{cid:x.cid,mcid:x.mcid}})" v-text="x.name"></li>
          </ul>
          <ul v-if="tabKey==='欧洲'" class="con-list">
            <li v-for="x in getCateList[1].child" @click.capture="$router.push({path:'/dataInternational',query:{cid:x.cid,mcid:x.mcid}})" v-text="x.name"></li>
          </ul>
          <ul v-if="tabKey==='美洲'" class="con-list">
            <li v-for="x in getCateList[2].child" @click.capture="$router.push({path:'/dataInternational',query:{cid:x.cid,mcid:x.mcid}})" v-text="x.name"></li>
          </ul>
          <ul v-if="tabKey==='亚洲'" class="con-list">
            <li v-for="x in getCateList[3].child" @click.capture="$router.push({path:'/dataInternational',query:{cid:x.cid,mcid:x.mcid}})" v-text="x.name"></li>
          </ul>
          <ul v-if="tabKey==='大洋洲'" class="con-list">
            <li v-for="x in getCateList[4].child" @click.capture="$router.push({path:'/dataInternational',query:{cid:x.cid,mcid:x.mcid}})" v-text="x.name"></li>
          </ul>
          <ul v-if="tabKey==='非洲'" class="con-list">
            <li v-for="x in getCateList[5].child" @click.capture="$router.push({path:'/dataInternational',query:{cid:x.cid,mcid:x.mcid}})" v-text="x.name"></li>
          </ul>
        </div>
      </content>
      <my-footer></my-footer>
    </div>
</template>

<script>
    export default {
        name: "data-ceania",
      data() {
        return {
          tabKey: '国际',
          isTab:'',
          search:'',//搜索
          getSearch:[],//搜索内容
          getCateList:[{
            child:[]
          }],//资料库分类列表
        }
      },
      computed: {

      },
      watch: {

      },
      created() {//创建完成
        this.$on('getCateList', msg => { // 资料库分类列表
          this._api('Information/getCateList', {mcid:this.$route.query.pid}).then(r => {
            r=r.body;
            r.status === 'ok' ? (() => {
              r=r.data;
              this.getCateList=r;
            })() : (() => {
              this.$dialog.toast({
                mes: r.msg,
                timeout: 1500,
                icon: 'error'
              });
            })();
          }, e => {
            this.$dialog.toast({
              mes: `${msg.msg || msg}失败`,
              timeout: 1500,
              icon: 'error'
            });
          });
        });
        this.$on('getSearch', msg => { // 资料库分类列表
          this._api('Information/getSearch', {search:this.search,size:50}).then(r => {
            r=r.body;
            r.status === 'ok' ? (() => {
              r=r.data;
              this.getSearch=r.data;
              if(this.getSearch.length>0){
                this.$router.push({path:'/international',query:{getSearch:this.getSearch}})
              }else {
                this.$dialog.toast({
                  mes: `暂未未搜索到结果`,
                  timeout: 1500,
                  icon: 'error'
                })
              }
            })() : (() => {
              this.$dialog.toast({
                mes: r.msg,
                timeout: 1500,
                icon: 'error'
              });
            })();
          }, e => {
            this.$dialog.toast({
              mes: `${msg.msg || msg}失败`,
              timeout: 1500,
              icon: 'error'
            });
          });
        });
      },
      mounted() {//组件渲染完成
        this.$emit('getCateList','资料库分类列表');
      },
      methods: {//事件
        get_search() {
          this.$emit('getSearch','搜索');
        },
      }
    }
</script>

<style scoped>

</style>
