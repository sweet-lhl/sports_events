<template>
    <div id="schedule">
      <div class="head">
        <div class="head_nav">
          <div class="head_back"><a href="index.html"><img src="../assets/images/img17.png"></a></div>
          <div class="head_nav_list head_nav_listtwo">
            <div class="head_nav_word head_nav_wordtwo active">完场比分</div>
            <div class="head_nav_word head_nav_wordtwo">下日赛程</div>
            <div class="clear"></div>
          </div>
          <div class="head_nav_set">
            <div class="head_nav_screen" @click.capture="screen=!screen"><img src="../assets/images/img02.png"></div>
          </div>
        </div>
        <div v-if="screen===true">
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
        <div class="head_childnavtwo">
          <ul>
            <li v-for="x in TimeChoice" :class="[tabKey===x.week?'active':'']" @click.capture="tabKey=x.week">
              <p v-text="x.day">02-03</p>
              <p>{{x.week==0?'星期天':x.week==1?'星期一':x.week==2?'星期二':x.week==3?'星期三':x.week==4?'星期四':'星期五'}}</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="cont">
        <ul id="football">
          <li v-for="x in getSchedule" :key="x.id">
            <div class="listtop">
              <div class="listtop_left" v-text="x.cname">澳洲超</div>
              <div class="listtop_mobile">{{`${new Date(x.start_time*1000).getHours()}:${new Date(x.start_time*1000).getMinutes()}`}}</div>
              <div class="listtop_right">
                  <span :class="[x.status===0?'stone':x.status===1?'sttwo':x.status===2?'stthree':'stfour']" class="stone">
                    {{x.status===0?'未开':x.status===0?'进行':x.status===0?'结束':'推迟'}}
                  </span>
              </div>
              <div class="clear"></div>
            </div>
            <div class="listvs" @click.capture="$router.push({path:'/immediate',query:{mid:1}})">
              <div class="listtop_left"><span v-text="x.home_team"></span></div>
              <div class="listtop_mobile"><span v-text="x.total_score"></span></div>
              <div class="listtop_right"><span v-text="x.visiting_team"></span><a>>></a></div>
              <div class="clear"></div>
            </div>
          </li>
        </ul>
      </div>
      <my-footer></my-footer>
    </div>
</template>

<script>
    export default {
        name: "schedule",
      data() {
        return {
          msg: 'Welcome to Your Vue.js App',
          tabKey:1,
          screenNav: '',//筛选导航
          selectAll:true,//筛选>全选&&全不选
          screen:false,//晒选
          getSchedule:[],//存放赛程数据
          TimeChoice:[],//时间选择
          getClassifyInfo:[],//赛程分类接口
        }
      },
      created() {
        this.$on('getSchedule', msg => { // 获取赛程页面
          this._api('Schedule/getSchedule', {mid:this.$route.query.pid}).then(r => {
            r=r.body;
            r.status === 'ok' ? (() => {
              r=r.data;
              this.getSchedule=r;
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
        this.$on('TimeChoice', msg => { // 时间选择接口
          this._api('Schedule/TimeChoice', {mid:this.$route.query.pid}).then(r => {
            r=r.body;
            r.status === 'ok' ? (() => {
              r=r.data;
              this.TimeChoice=r;
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
          this._api('Classify/getClassifyInfo', {mid:this.$route.query.pid}).then(r => {
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
      },
      mounted() {
        this.$emit('getClassifyInfo','赛程分类接口');
        this.$emit('getSchedule','获取当前赛程页面');
        this.$emit('TimeChoice','时间选择接口');
      },
      methods: {},
      destroyed() {

      }
    }
</script>

<style scoped>

</style>
