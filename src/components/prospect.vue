<template>
    <div id="prospect">
      <div class="head">
        <header>
          <span class="pull-left icon icon-left"></span>
          <h1 class="title text-center">赛事前瞻</h1>
        </header>
        <div class="head_childnavthree">
          <ul>
            <li  class="active">
              要闻
            </li>
            <li>
              足球
            </li>
            <li>
              足彩
            </li>
            <li>
              篮球
            </li>
          </ul>
        </div>
      </div>
      <div class="cont">
        <ul id="news">
          <li>
            <div class="news_title">印度再度上调电子产品关税，苹果公司受影响最大</div>
            <div class="news_cont">驱动中国2018年2月2日消息 在国内手机市场陷入血海纷争的时候，作为第二人口大国的印度成了厂商眼中的香饽饽。</div>
            <div class="news_detail"><a @click.capture="$router.push({path:'/prospectDetail'})">2018-02-01 10:00 详细>></a><div class="clear"></div></div>
          </li>
          <li>
            <div class="news_title">印度再度上调电子产品关税，苹果公司受影响最大</div>
            <div class="news_cont">驱动中国2018年2月2日消息 在国内手机市场陷入血海纷争的时候，作为第二人口大国的印度成了厂商眼中的香饽饽。</div>
            <div class="news_detail"><a href="prospect_detail.html">2018-02-01 10:00 详细>></a><div class="clear"></div></div>
          </li>
        </ul>
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
          getListArticle:[],//栏目列表文章
        }
      },
      watch: {

      },
      created() {//创建完成
        this.$on('getListArticle', msg => { // 栏目列表文章
          this._api('Wapcate/getListArticle', {catid:this.$route.query.cid}).then(r => {
            r=r.body;
            r.status === 'ok' ? (() => {
              r=r.data;
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
        this.$emit('getListArticle','栏目列表文章');
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
