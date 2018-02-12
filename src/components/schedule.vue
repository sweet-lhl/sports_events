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
            <div class="head_nav_screen"><img src="../assets/images/img02.png"></div>
          </div>
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
              <div class="listtop_mobile">{{`${new Date(x.start_time).getHours()}:${new Date(x.start_time).getMinutes()}`}}</div>
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
          getSchedule:[],//存放赛程数据
          TimeChoice:[],//时间选择
        }
      },
      created() {
        this.$on('getSchedule', msg => { // 获取赛程页面
          this._api('Schedule/getSchedule', {mid:1}).then(r => {
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
          this._api('Schedule/TimeChoice', {mid:1}).then(r => {
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
      },
      mounted() {
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
