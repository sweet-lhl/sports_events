<template>
    <div id="dataInternational">
      <header>
        <span class="pull-left icon icon-left"></span>
        <h1 class="title text-center">国际赛事赛事资料库</h1>
      </header>
      <content>
        <div class="international">
          <p v-for="x in getCateChildList" class="flex-box col-2" @click.capture="$router.push({path:`/${x.typelist==1?'england':'worldCup'}`,query:{cid:x.cid}})">
            <span class="text-left" v-text="x.name">世界杯</span>
            <span class="text-right icon icon-right"> </span>
          </p>
       <!--   <p class="flex-box col-2" @click.capture="$router.push({path:'/worldCup'})">
            <span class="text-left">世界杯欧洲区预选赛</span>
            <span class="text-right icon icon-right"> </span>
          </p>
          <p class="flex-box col-2" @click.capture="$router.push({path:'/preselection'})">
            <span class="text-left">世界杯欧洲区预选赛</span>
            <span class="text-right icon icon-right"> </span>
          </p>-->
        </div>
      </content>
      <my-footer></my-footer>
    </div>
</template>

<script>
    export default {
        name: "data-international",
      data() {
        return {
          msg: 'Welcome to Your Vue.js App',
          getCateChildList:[],//资料库子级分类列表&&搜索展示
        }
      },
      watch: {

      },
      created() {//创建完成
        this.$on('getCateChildList', msg => { // 资料库子级分类列表
          this._api('Information/getCateList', {cid:this.$route.query.cid,mcid:this.$route.query.mcid}).then(r => {
            r=r.body;
            r.status === 'ok' ? (() => {
              r=r.data;
              this.getCateChildList=r;
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
        this.$emit('getCateChildList','资料库子级分类列表');
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
