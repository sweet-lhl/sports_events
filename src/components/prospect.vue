<template>
    <div id="prospect">
      <div class="head">
        <header>
          <span class="pull-left icon icon-left"></span>
          <h1 class="title text-center">赛事前瞻</h1>
        </header>
        <div class="head_childnavthree">
          <ul>
            <li v-for="x in gettreeId" :class="[screenNav===x.name?'active':'']" v-text="x.name" @click.capture="$emit('getListArticle',{catid:x.id,msg:'导航'});screenNav=x.name"></li>
          </ul>
        </div>
      </div>
      <div class="cont">
        <ul id="news" v-if="getListArticle.length>0">
          <li v-for="x in getListArticle" @click.capture="$router.replace({path:'/prospectDetail',query:{id:x.id}})">
            <div class="news_title" v-text="x.title"></div>
            <div class="news_cont" v-text="x.intro"></div>
            <div class="news_detail"><a>{{x.createtime.getTime()}} 详细>></a><div class="clear"></div></div>
          </li>
        </ul>
        <div v-else class="nodata">暂无数据</div>
      </div>
      <my-footer></my-footer>
    </div>
</template>

<script>
    export default {
        name: "prospect",
      data() {
        return {
          msg: 'Welcome to Your Vue.js App',
          screenNav:'要闻',
          gettreeId:[],//导航
          getListArticle:[],//栏目列表文章
        }
      },
      watch: {

      },
      created() {//创建完成
        this.$on('gettreeId', msg => { // 导航
          this._api('Wapcate/gettreeId', {sid:this.$route.query.id}).then(r => {
            r=r.body;
            r.status === 'ok' ? (() => {
              r=r.data;
              this.gettreeId=r;
              console.log(this.gettreeId)
              this.$emit('getListArticle',{catid:this.gettreeId[0].id,msg:'栏目列表文章'});
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
        this.$on('getListArticle', msg => { // 栏目列表文章
          this._api('Wapcate/getListArticle', {catid:msg.catid,size:99}).then(r => {
            r=r.body;
            r.status === 'ok' ? (() => {
              r=r.data.data;
              this.getListArticle=r;
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
        this.$emit('gettreeId','导航');
      },
      methods: {//事件
        linkToC(e) {
          this.$dialog.toast({
            mes: `暂未开通此功能`,
            timeout: 1500,
            icon: 'error'
          })
        },

      }
    }
</script>

<style scoped>

</style>
