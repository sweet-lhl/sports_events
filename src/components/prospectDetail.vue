<template>
    <div class="prospectDetail">
      <header>
        <span class="pull-left icon icon-left"></span>
        <h1 class="title text-center">赛事前瞻</h1>
      </header>
      <div id="scroll">
        <div class="cont" v-for="x in getContent">
          <div class="news_detail_title" v-text="x.title"></div>
          <div class="news_detail_time"><span>日期:{{x.createtime.getTime()}}</span><span>来源:{{x.about}}</span></div>
          <div class="news_detail_cont" v-html="x.content"></div>
        </div>
        <div class="news_relevant_title">相关阅读</div>
        <div class="news_relevant">
          <div class="news_relevant_list" v-for="x in getRandArticle"  @click.capture="$emit('getContent',{aid:x.id,msg:'栏目内容'})"><a href="#" v-text="x.title"></a></div>
        </div>
      </div>
      <my-footer></my-footer>
    </div>
</template>

<script>
    export default {
        name: "prospect-detail",
      data() {
        return {
          msg: 'Welcome to Your Vue.js App',
          screenNav:'要闻',
          getContent:[],//栏目内容
          getRandArticle:[],//文章随机推存
        }
      },
      watch: {
        getContent() {
          this.$nextTick(() => {
            if (this.getContent.length > 0) {
              let container = this.$el.querySelector("#scroll");
              container.scrollTop = container.scrollHeight;
            }
          })
          //  document.getElementById('chatContainer').scrollTop = document.getElementById('chatContainer').scrollHeight+150;
        },
      },
      created() {//创建完成
        this.$on('getContent', msg => { // 栏目内容
          this._api('waparticle/getContent', {aid:msg.aid||this.$route.query.id}).then(r => {
            r=r.body;
            r.status === 'ok' ? (() => {
              r=r.data;
              this.getContent=r;
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
        this.$on('getRandArticle', msg => { // 文章随机推存
          this._api('waparticle/getRandArticle', {}).then(r => {
            r=r.body;
            r.status === 'ok' ? (() => {
              r=r.data;
              this.getRandArticle=r;
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
        this.$emit('getContent','栏目内容');
        this.$emit('getRandArticle','文章随机推存');
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
#scroll{
  overflow-y: scroll;
}
</style>
