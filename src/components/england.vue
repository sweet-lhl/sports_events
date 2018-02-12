<template>
  <div id="england">
    <header>
      <span class="pull-left icon icon-left"></span>
      <div class="title text-left">世界杯欧洲区预选赛
        <div class="match-item">
          <span>赛季</span>
          <select v-model="selected" @change="selection($event)">
            <option :value="x.sid" v-for="x in getSeasonList" v-text="x.name"></option>
          </select>
        </div>
      </div>
    </header>
    <content>
      <div class="must"></div>
      <div class="flex-box col-2 text-center cont-naw">
        <div :class="[tabKey===''?'active':'']" @click.capture="tabKey=''">积分</div>
        <div :class="[tabKey===1?'active':'']" @click.capture="tabKey=1">赛程</div>
        <div :class="[tabKey===2?'active':'']" @click.capture="tabKey=2">让球</div>
        <div :class="[tabKey===3?'active':'']" @click.capture="tabKey=3">大小</div>
        <div :class="[tabKey===4?'active':'']" @click.capture="tabKey=4">射手榜</div>
      </div>
      <div id="proportion" class="proportion">
        <!--积分-->
        <div v-if="tabKey===''" class="active-block" id="table-integral">
          <table>
            <thead>
            <tr>
              <th style="width: 10%">排名</th>
              <th class="thead-ball">球队</th>
              <th>赛</th>
              <th>胜</th>
              <th>平</th>
              <th>负</th>
              <th>得</th>
              <th>失</th>
              <th>积</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(x,i) in matchIntegral" :key="i">
              <td v-text="i"></td>
              <td class="ellipsis" v-text="x.tname"></td>
              <td v-text="x.count"></td>
              <td v-text="x.win"></td>
              <td v-text="x.tie"></td>
              <td v-text="x.lose"></td>
              <td v-text="x.get"></td>
              <td v-text="x.miss"></td>
              <td v-text="x.integral"></td>
            </tr>
            </tbody>
            <tfoot>
            <tr>
              <th>备注:</th>
              <td colspan="8">
                <p class="ranking">
                  <span class="orange">欧冠杯小组赛资格</span>
                  <span class="green">冠杯小组资格</span>
                </p>
                <p class="ranking">
                  <span class="blue-smail">组赛资格</span>
                  <span class="gray">欧冠杯小组赛</span>
                </p>
              </td>
            </tr>
            </tfoot>
          </table>
        </div>
        <!--赛程-->
        <div v-if="tabKey===1">
          <div class="table-match table-match_1">
            <select v-model="selected_1" @change="selection_1($event)">
              <option :value="x.id" v-for="x in Information" v-text="x.name"></option>
            </select>
          </div>
          <div>
            <table>
              <thead>
              <tr>
                <th>时间</th>
                <th>状态</th>
                <th class="thead-ellipsis">主队</th>
                <th>比分</th>
                <th class="thead-ellipsis">客队</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="x in getFootSchedule" :key="x.id">
                <td><p>{{`${new Date(x.start_time).getHours()}:${new Date(x.start_time).getMinutes()}`}}</p>
                  <p>{{`${new Date(x.end_time).getHours()}:${new Date(x.end_time).getMinutes()}`}}</p></td>
                <td :class="[x.status==2?'td-red':'']">{{x.status==0?'未开始':x.status==1?'进行中':'已结束'}}</td>
                <td class="ellipsis" v-text="x.tname">额诺斯</td>
                <td v-if="x.status==0">VS</td>
                <td v-else><span class="td-red" v-text="x.total_score">4:1</span><span class="td-blue">({{x.half_score}})</span></td>
                <td class="ellipsis" v-text="x.vname">沙特忘啦博</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
        <!--让球-->
        <div v-if="tabKey===2">
          <table>
            <thead>
            <tr>
              <th class="thead-ball">球队</th>
              <th>赛</th>
              <th>上</th>
              <th>平</th>
              <th>下</th>
              <th>胜</th>
              <th>走</th>
              <th>输</th>
              <th>净</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td class="ellipsis">曼切斯特城</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
            </tr>
            <tr>
              <td class="ellipsis">斯特城</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
            </tr>
            <tr>
              <td class="ellipsis">曼切斯</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
            </tr>
            <tr>
              <td class="ellipsis">特城</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
            </tr>
            </tbody>
          </table>
        </div>
        <!--大小-->
        <div v-if="tabKey===3">
          <table>
            <thead>
            <tr>
              <th class="thead-ball">球队</th>
              <th>赛</th>
              <th>大</th>
              <th>走</th>
              <th>小</th>
              <th>大%</th>
              <th>走%</th>
              <th>小%</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td class="ellipsis">曼切斯特城</td>
              <td>25</td>
              <td>15</td>
              <td>2</td>
              <td>8</td>
              <td>60%</td>
              <td>8%</td>
              <td>32</td>
            </tr>
            <tr>
              <td class="ellipsis">曼切斯特城</td>
              <td>25</td>
              <td>15</td>
              <td>2</td>
              <td>8</td>
              <td>60%</td>
              <td>8%</td>
              <td>32</td>
            </tr>
            <tr>
              <td class="ellipsis">曼切斯特城</td>
              <td>25</td>
              <td>15</td>
              <td>2</td>
              <td>8</td>
              <td>60%</td>
              <td>8%</td>
              <td>32</td>
            </tr>
            <tr>
              <td class="ellipsis">曼切斯特城</td>
              <td>25</td>
              <td>15</td>
              <td>2</td>
              <td>8</td>
              <td>60%</td>
              <td>8%</td>
              <td>32</td>
            </tr>
            <tr>
              <td class="ellipsis">曼切斯特城</td>
              <td>25</td>
              <td>15</td>
              <td>2</td>
              <td>8</td>
              <td>60%</td>
              <td>8%</td>
              <td>32</td>
            </tr>
            <tr>
              <td class="ellipsis">曼切斯特城</td>
              <td>25</td>
              <td>15</td>
              <td>2</td>
              <td>8</td>
              <td>60%</td>
              <td>8%</td>
              <td>32</td>
            </tr>
            </tbody>
          </table>
        </div>
        <!--射手榜-->
        <div v-if="tabKey===4">
          <table>
            <thead>
            <tr>
              <th>排名</th>
              <th class="thead-ball">球员</th>
              <th class="thead-ball">球队</th>
              <th>进球</th>
              <th>主进</th>
              <th>客进</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(x,i) in getFootPlayerGoal">
              <td v-text="i"></td>
              <td class="ellipsis" v-text="x.pname"></td>
              <td class="ellipsis" v-text="x.tname"></td>
              <td v-text="x.goal"></td>
              <td v-text="x.home_goal"></td>
              <td v-text="x.sports_goal"></td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </content>
    <my-footer></my-footer>
  </div>
</template>

<script>
  export default {
    name: "england",
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        tabKey: '',//积分 赛程 大小..切换
        selected:'2017-2018',
        selected_1:{},//第几轮
        Information: [],//资料库子级分类列表
        getSeasonList: [],//赛季列表
        getCateInfo: [],//赛事分类详情
        matchIntegral: [],//足球赛事总积分统计
        getFootSchedule: [],//赛程统计
        getFootPlayerGoal: [],//进球统计
      }
    },
    watch: {},
    created() {//创建完成
      this.$on('getCateInfo', msg => { // 赛事分类详情
        this._api('Information/getCateInfo', {cid: this.$route.query.cid}).then(r => {
          r = r.body;
          r.status === 'ok' ? (() => {
            r = r.data;
            this.getCateInfo = r;
            this.$emit('matchIntegral', '足球赛事总积分统计');
            this.$emit('getFootSchedule', '赛程统计');
            this.$emit('getFootPlayerGoal', '进球统计');
            this.$emit('Information', '资料库子级分类列表');
            this.$emit('getSeasonList', '赛季列表');
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
      this.$on('Information', msg => { // 资料库子级分类列表
        this._api('Information/getCateChildList', {cid: this.$route.query.cid}).then(r => {
          r = r.body;
          r.status === 'ok' ? (() => {
            r = r.data;
            this.Information = r;
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
      this.$on('getSeasonList', msg => { // 赛季列表
        this._api('Information/getSeasonList', {}).then(r => {
          r = r.body;
          r.status === 'ok' ? (() => {
            r = r.data;
            this.getSeasonList = r;
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
      this.$on('matchIntegral', msg => { // 足球赛事总积分统计
        this._api('Information/getFootMatchIntegral', {
          chid: this.getCateInfo.chnew.id,
          mcid: this.getCateInfo.mcid,
          sid: msg.sid||this.getCateInfo.snew.sid
        }).then(r => {
          r = r.body;
          r.status === 'ok' ? (() => {
            r = r.data;
            this.matchIntegral=[];
            this.matchIntegral = r;
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
      this.$on('getFootSchedule', msg => { // 赛程统计
        this._api('Information/getFootSchedule', {
          chid: msg.chid||this.getCateInfo.chnew.id,
          cid: this.getCateInfo.chnew.cid,
          typeid: this.getCateInfo.typelist,
          sid: msg.sid||this.getCateInfo.snew.sid
        }).then(r => {
          r = r.body;
          r.status === 'ok' ? (() => {
            r = r.data;
            this.getFootSchedule=[];
            this.getFootSchedule = r;
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
      this.$on('getFootPlayerGoal', msg => { // 进球统计
        this._api('Information/getFootPlayerGoal', {
          mcid: this.getCateInfo.chnew.cid,
          sid: msg.sid||this.getCateInfo.snew.sid
        }).then(r => {
          r = r.body;
          r.status === 'ok' ? (() => {
            r = r.data;
            this.getFootPlayerGoal=[];
            this.getFootPlayerGoal = r;
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
      this.$emit('getCateInfo', '赛事分类详情');
    },
    methods: {//事件
      selection(e) {
        this.matchIntegral=[];
        this.getFootPlayerGoal=[];
        this.$emit('matchIntegral', {sid:this.selected,msg:'足球赛事总积分统计'});
        this.$emit('getFootPlayerGoal', {sid:this.selected,msg:'进球统计'})
      },
      selection_1(e) {
        console.log(this.selected_1);
        this.getFootSchedule=[];
        this.$emit('getFootSchedule', {chid:this.selected_1,msg:'赛程统计'})
      },

    }
  }
</script>

<style scoped>

</style>
