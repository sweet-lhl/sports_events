<template>
    <div id="marke">
      <div class="head">
        <div class="head_nav">
          <div class="head_logo"><a href="index.html"><img src="../assets/images/img04.png"></a></div>
          <div class="head_nav_list">
            <div class="head_nav_word active">足球</div>
            <div class="head_nav_word">篮球</div>
            <div class="clear"></div>
          </div>
          <div class="head_nav_set">
            <div class="head_nav_screen"><img src="../assets/images/img02.png"></div>
            <div class="head_nav_up" @click.captrue="mark=!mark"><img src="../assets/images/img01.png"></div>
          </div>
        </div>
      </div>
      <!--指数-->
      <div v-if="mark===true">
        <div class="head">
          <div class="head_childnavfour">
            <span class="mark_word">即时足球指数</span>
            <div v-if="totalSwitch===true">
              <span class="mark_btn" @click.captrue="totalSwitch=false;cancel=true;company.cancel=false">赛事</span>
              <span class="mark_btn" @click.captrue="totalSwitch=false;cancel=true;company.cancel=true">公司</span>
            </div>
            <div v-else>
              <span class="mark_btn" @click.captrue="totalSwitch=true;cancel=false">确定</span>
              <span class="mark_btntwo" @click.captrue="totalSwitch=true;cancel=false">取消</span>
            </div>
          </div>
        </div>
        <div class="cont">
          <div v-if="cancel===false">
            <table border="0" cellpadding="0" cellspacing="1" class="mytable3 huibg">
              <tbody>
              <tr class="mark_title">
                <td colspan="5"><a href="#"><span>02-02 16:30 中国室内足球队 VS 伊拉克室内足球队</span><img src="../assets/images/img18.png"></a></td>
              </tr>
              <tr>
                <td class="huibg" width="40%" colspan="2">公司</td>
                <td class="huibg" width="20%">主队</td>
                <td class="grayCol huibg" width="20%">盘口</td>
                <td class="huibg" width="20%">客队</td>
              </tr>
              <tr>
                <td rowspan="2">SB</td>
                <td class="grayCol panCol">初盘</td>
                <td>1.08</td>
                <td>-0.5</td>
                <td>0.72</td>
              </tr>
              <tr>
                <td class="grayCol">即盘</td>
                <td class="red">1.31</td>
                <td class="red">-1</td>
                <td class="green">0.56</td>
              </tr>
              </tbody>
            </table>
            <table border="0" cellpadding="0" cellspacing="1" class="mytable3 huibg">
              <tbody>
              <tr class="mark_title">
                <td colspan="5"><a href="#"><span>02-02 16:30 中国室内足球队 VS 伊拉克室内足球队</span><img src="../assets/images/img18.png"></a></td>
              </tr>
              <tr>
                <td class="huibg" colspan="2" width="40%">公司</td>
                <td class="huibg" width="20%">主队</td>
                <td class="grayCol huibg" width="20%">盘口</td>
                <td class="huibg" width="20%">客队</td>
              </tr>
              <tr>
                <td rowspan="2">SB</td>
                <td class="grayCol panCol">初盘</td>
                <td>1.08</td>
                <td>-0.5</td>
                <td>0.72</td>
              </tr>
              <tr>
                <td class="grayCol">即盘</td>
                <td class="red">1.31</td>
                <td class="red">-1</td>
                <td class="green">0.56</td>
              </tr>
              </tbody>
            </table>
          </div>
          <div v-if="cancel===true">
            <div v-if="company.cancel===true">
              <div class="mark_screen">
                <div class="mark_screen_title">赔率类型选择</div>
                <div class="mark_screen_cont">
                  <div class="mark_screen_list">亚赔</div>
                  <div class="mark_screen_list">欧赔</div>
                  <div class="mark_screen_list">大小</div>
                  <div class="clear"></div>
                </div>
                <div class="mark_screen_title">公司选择(最多四家)</div>
                <div class="mark_screen_cont">
                  <div class="mark_screen_list">亚赔</div>
                  <div class="mark_screen_list">韦德</div>
                  <div class="mark_screen_list">SB</div>
                  <div class="mark_screen_list">利记</div>
                  <div class="clear"></div>
                </div>
              </div>
            </div>
            <div v-else class="mark_screen" id="mark_match">
              <div class="mark_screen_cont">
                <div class="mark_screen_list">英超</div>
                <div class="mark_screen_list">自由杯</div>
                <div class="mark_screen_list">意甲</div>
                <div class="mark_screen_list">西杯</div>
                <div class="mark_screen_list">荷兰杯</div>
                <div class="mark_screen_list">英女足</div>
                <div class="clear"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--设置-->
      <div v-else>
        <div class="cont setbg">
          <div class="setup_title">提示设置</div>
          <div class="setup_cont">
            <div class="setup_list">
              <div class="setup_list_left">进球提示</div>
              <div class="setup_list_right"><span><input type="checkbox" name="">声音</span><span><input type="checkbox"
                                                                                                       name="">弹窗</span>
              </div>
              <div class="clear"></div>
            </div>
            <div class="setup_list">
              <div class="setup_list_left">红牌提示</div>
              <div class="setup_list_right"><span><input type="checkbox" name="">声音</span><span><input type="checkbox"
                                                                                                       name="">弹窗</span>
              </div>
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
              <div class="setup_list_right"><span><input type="checkbox" name="">简体</span><span><input type="checkbox"
                                                                                                       name="">繁体</span>
              </div>
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
      </div>
      <my-footer></my-footer>
    </div>
</template>

<script>
    export default {
        name: "marke",
      data() {
        return {
          msg: 'Welcome to Your Vue.js App',
          screen: false,//筛选
          mark: true,//指数
          totalSwitch:true,//公司&赛事总开关
          cancel:false,//取消
          company:{//指数=>公司&赛事切换
            choice:false,//选择
            cancel:false,//取消
          },
          setupMark:true,//主页
          setup: false,//设置
        }
      }
    }
</script>

<style scoped>

</style>
