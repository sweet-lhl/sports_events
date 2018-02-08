<template>
    <div id="mainNavigation">
      <div class="mainNavigation flex-box align-center">
        <div @click.capture="setUp=false"><img src="../images/img04.png"></div>
        <div>
          <div class="flex-box">
            <span :class="[ballGame===''?'active':'']" @click.capture="ballGame='';setUp=false">足球</span>
            <span :class="[ballGame===1?'active':'']" @click.capture="ballGame=1;setUp=false">篮球</span>
            <span :class="[ballGame===2?'active':'']" @click.capture="linkToC">竞猜</span>
            <span :class="[ballGame===3?'active':'']" @click.capture="linkToC">直播</span>
          </div>
        </div>
        <div>
          <img src="../images/img02.png">
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
    </div>
</template>

<script>
    export default {
        name: "main-navigation",
      data() {
        return {
          msg: 'Welcome to Your Vue.js App',
         ballGame:'',//球类导航
          setUp:false,//设置开关
        }
      },
      created() {//创建完成

      },
      mounted() {//组件渲染完成

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

</style>
