<template>
  <div id="home">
    <mainNavigation></mainNavigation>
    <div>
        <div v-if="$route.query.screen===true">
          <div class="mark_screen_cont">
            <div v-for="x in getClassifyInfo" class="mark_screen_list" :class="[selectAll?'':'active']" @click.capture="selectAll=false" v-text="x.name"></div>
            <div class="clear"></div>
            <div class="screen_btn"><span @click.capture="screen=false">确定</span><span @click.capture="screen=false">取消</span></div>
          </div>
          <div class="screen_nav">
            <ul>
              <li :class="[screenNav===''?'active':'']" @click.capture="screenNav=''"><a href="#">全部</a></li>
              <li :class="[screenNav===1?'active':'']" @click.capture="screenNav=1"><a href="#">一级</a></li>
              <li :class="[screenNav===2?'active':'']" @click.capture="screenNav=2"><a href="#">足彩</a></li>
              <li :class="[screenNav===3?'active':'']" @click.capture="screenNav=3"><a href="#">竞彩</a></li>
              <li :class="[screenNav===4?'active':'']" @click.capture="screenNav=4"><a href="#">单场</a></li>
              <div class="clear"></div>
            </ul>
          </div>
          <div class="screen_bottom">
            <div>已隐藏赛事<span id="screen_num">0</span>场</div>
            <span :class="[selectAll?'':'active']" @click.capture="selectAll=false" class="check">全不选</span>
            <span :class="[selectAll?'active':'']" @click.capture="selectAll=true" class="check">全选</span></div>
        </div>
        <div class="cont">
          <ul id="football">
            <li v-for="x in getSchedule" :key="x.id">
              <div class="listtop">
                <div class="listtop_left" v-text="x.cname">澳洲超</div>
                <div class="listtop_mobile">{{`${_appendZero(new Date(x.start_time*1000).getHours())}:${_appendZero(new Date(x.start_time*1000).getMinutes())}`}}</div>
                <div class="listtop_right">
                  <span :class="[x.status==0?'stone':x.status==1?'sttwo':x.status==2?'stthree':'stfour']">
                    {{x.status==0?'未开':x.status==1?'进行':x.status==2?'结束':'推迟'}}
                  </span>
                </div>
                <div class="clear"></div>
              </div>
              <div class="listvs" @click.capture="$router.push({path:`/${mid===2?'basketballImmediate':'immediate'}`,query:{id:x.id}})">
                <div class="listtop_left"><span v-text="x.home_team"></span></div>
                <div class="listtop_mobile"><span v-text="x.total_score"></span></div>
                <div class="listtop_right"><span v-text="x.visiting_team"></span><a v-if="mid!==2">详情>></a></div>
                <div class="clear"></div>
              </div>
              <div class="listodd" v-if="mid===2" @click.capture="$router.push({path:'/basketballImmediate',query:{id:x.id}})">
                <div class="listtop_left"><span>0</span><span>0</span><span>0</span><span>0</span><span>0</span></div>
                <div class="listtop_mobile"><img style="width: 16px" src="../assets/images/img19.png"></div>
                <div class="listtop_right"><span>0</span><span>0</span><span>0</span><span>0</span><span>0</span><a>详情>></a></div>
                <div class="clear"></div>
              </div>
            </li>
          </ul>
        </div>
    </div>
    <my-footer></my-footer>
  </div>
</template>

<script>
  export default {
    name: "home",
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        tabKey:'',//即时详情>大小导航切换
        screen: false,//筛选
        screenNav: '',//筛选导航
        selectAll:true,//筛选>全选&&全不选
        getSchedule:[],//存放即时数据
        getClassifyInfo:[],//赛程分类接口
        mid:''//存放类型id
      }
    },
    watch: {
      "$route": "fetchDate"
    },
    created() {
      this.$on('getSchedule', msg => { // 获取即时页面
        this._api('Schedule/getSchedule', {mid:msg.mid||1}).then(r => {
          r=r.body;
          r.status === 'ok' ? (() => {
           r=r.data;
           this.getSchedule=r;
            console.log(this.$route.query.id)
           console.log(r)
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
      this.$on('getClassifyInfo', msg => { // 赛程分类接口
        this._api('Classify/getClassifyInfo', {mid:msg.mid||1}).then(r => {
          r=r.body;
          r.status === 'ok' ? (() => {
            r=r.data;
            this.getClassifyInfo=r;
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
   /*   this.$on('getListArticle', msg => { // 即时
        this._api('Wapcate/getListArticle', {catid:19}).then(r => {
          r.status === 'ok' ? (() => {
           r=r.data;
           this.topCate=r;
           console.log(r)
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
      });*/
    },
    mounted() {
      this.$emit('getSchedule','获取当前即时页面');
      this.$emit('getClassifyInfo','赛程分类接口');
    },
    methods: {
      fetchDate(){
        this.getSchedule=[];
        this.mid=this.$route.query.pid||this.$route.query.id;
        this.$emit('getSchedule',{mid:this.mid,msg:'获取当前即时页面'});
      }
    },
    destroyed() {

    }
  }
</script>

<style scoped>

</style>
