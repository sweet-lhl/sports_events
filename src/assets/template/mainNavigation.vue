<template>
    <div id="mainNavigation">
      <div class="mainNavigation flex-box align-center">
        <div @click.capture="setUp=false"><img src="../images/img04.png"><a href="#"></a></div>
        <div>
          <div class="flex-box">
            <span v-for="x in topCate" :class="[ballGame===x.id?'active':'']" @click.capture="$emit('wapcate',{tid:x.id,msg:'获取副导航'});setUp=false;ballGame=x.id;$router.push({path:'/main',query:{id:x.id}})" v-text="x.name"></span>
          </div>
        </div>
        <div>
          <img @click.capture="$router.push({path:'/main',query:{screen:screen}});screen=!screen" src="../images/img02.png">
          <img @click.capture="setUp=!setUp" src="../images/img01.png">
        </div>
      </div>
      <div v-if="setUp" class="setUP">
        <div class="cont setbg">
          <div class="setup_title">提示设置</div>
          <div class="setup_cont">
            <div class="setup_list">
              <div class="setup_list_left">进球提示</div>
              <div class="setup_list_right"><span><input type="checkbox" name="">声音</span><span><input type="checkbox" name="">弹窗</span></div>
              <div class="clear"></div>
            </div>
            <div class="setup_list">
              <div class="setup_list_left">红牌提示</div>
              <div class="setup_list_right"><span><input type="checkbox" name="">声音</span><span><input type="checkbox" name="">弹窗</span></div>
              <div class="clear"></div>
            </div>
          </div>
          <div class="setup_title">首页设置</div>
          <div class="setup_cont">
            <div class="setup_list">
              <div class="setup_list_left">黄牌显示</div>
              <div class="setup_list_right"><span><input type="checkbox" name="">黄牌</span></div>
              <div class="clear"></div>
            </div>
            <div class="setup_list">
              <div class="setup_list_left">排名提示</div>
              <div class="setup_list_right"><span><input type="checkbox" name="">排名</span></div>
              <div class="clear"></div>
            </div>
          </div>
          <div class="setup_title">其他设置</div>
          <div class="setup_cont">
            <div class="setup_list">
              <div class="setup_list_left">语言提示</div>
              <div class="setup_list_right"><span><input type="checkbox" name="">简体</span><span><input type="checkbox" name="">繁体</span></div>
              <div class="clear"></div>
            </div>
            <div class="setup_list">
              <div class="setup_list_left">页面间隔刷新</div>
              <div class="setup_list_right">
					<span>
						<select>
							<option>5秒</option>
							<option>7秒</option>
							<option>10秒</option>
						</select>
					</span>
              </div>
              <div class="clear"></div>
            </div>
          </div>
        </div>
        <my-footer></my-footer>
      </div>
      <div class="flex-box col-2 text-center cont-naw">
        <div v-for="x in wapcate" :class="[tabKey===x.nickname?'active_nav':'']" @click.capture="$router.push({path:`/${x.nickname}`,query:{pid:x.pid,id:x.id}});tabKey=x.nickname" v-text="x.name"></div>
    <!--    <div :class="[tabKey===1?'active_nav':'']" @click.capture="$router.push({path:'/schedule'})">赛程</div>
        <div :class="[tabKey===2?'active_nav':'']" @click.capture="$router.push({path:'/prospect'})">前瞻</div>
        <div :class="[tabKey===3?'active_nav':'']" @click.capture="$router.push({path:'/dataCeania'})">资料</div>
        <div :class="[tabKey===4?'active_nav':'']" @click.capture="$router.push({path:'/mark'})">指数</div>-->
      </div>
    </div>
</template>

<script>
    export default {
        name: "main-navigation",
      data() {
        return {
          msg: 'Welcome to Your Vue.js App',
         ballGame:1,//球类导航
          topCate:[],//存放球类导航数据
          wapcate:[],//存放副导航
          tabKey:'main',//福导航切换
          setUp:false,//设置开关
          screen:true,//筛选
        }
      },
      watch: {

      },
      created() {//创建完成
        this.$on('topCate', msg => { // 获取主页导航
          this._api('Wapcate/getSonId', {tid:''}).then(r => {
            r=r.body;
            r.status === 'ok' ? (() => {
              r=r.data;
              this.topCate=r;
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
        this.$on('wapcate', msg => { // 获取副导航
          this._api('Wapcate/getSonId', {tid:msg.tid}).then(r => {
            r=r.body;
            r.status === 'ok' ? (() => {
              r=r.data;
              this.wapcate=r;
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
        this.$emit('topCate','获取主页导航');
        if(this.ballGame===1){
          this.$emit('wapcate',{tid:1,msg:'获取副导航'});
        }
      },
      methods: {//事件
        linkToC(e) {
          this.setUp=false;
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
  .mainNavigation{
    font-size: 1.2rem;
    z-index: 12;
    height: 3.75rem;
    background-color: #ff5349;
    align-items: center;
  }
  .mainNavigation>*{
    text-align: center;
  }

  .mainNavigation>*:first-child,.mainNavigation>*:last-child{
    flex-basis: 25%;
    -webkit-flex-basis: 25%;
  }
  .mainNavigation>*:nth-child(2){
    color: #ea9b98;
    flex-basis: 50%;
    -webkit-flex-basis: 50%;
  }
  .mainNavigation>*:first-child>*{
    width: 6rem;
  }
  .mainNavigation>*:last-child>*{
    width: 1.95rem;
  }
  .mainNavigation>*:last-child>*:last-child{
    margin-left: .5rem;
  }
  .mainNavigation>*:nth-child(2)>*{
    vertical-align: middle;
    display: inline-block;
    border-radius: .3rem;
    background-color: #dd453d;
    justify-content: center;
  }

  .mainNavigation>*:nth-child(2)>*>*{
    vertical-align: middle;
    display: inline-block;
    font-size: 1.33rem;
    padding: 0 .4rem;
    line-height: 2.5rem;
  }
  .mainNavigation>*:nth-child(2)>*>*:first-child{
    border-bottom-left-radius: .3rem;
    border-top-left-radius: .3rem;
  }
  .mainNavigation>*:nth-child(2)>*>*:last-child{
    border-bottom-right-radius: .3rem;
    border-top-right-radius: .3rem;
  }
  .active{
    color: #e83f36;
    background-color: #ffffff;
  }
  .active_nav{
        background-color: rgb(65,67,107);
  }
  .setUP{
    position: absolute;
    top: 3.75rem;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 111;
    background-color: white;
  }
  #my-footer{
    position: absolute;
    right: 0;
    left: 0;
    bottom:0;
  }
  .cont-naw>*{
    font-size: 1.33rem;
    line-height: 3.16rem;
  }

</style>
