<template>
  <div id="home">
    <mainNavigation></mainNavigation>
    <div>
      <!--<div class="head_childnav">
        <ul>
          <li class="active"><a href="#">即时</a></li>
          <li>
            <router-link tag="a" to="/schedule">赛程</router-link>
          </li>
          <li>
            <router-link tag="a" to="/prospect">前瞻</router-link>
          </li>
          <li><router-link tag="a" to="/dataCeania">资料</router-link></li>
          <li>
            <router-link tag="a" to="/mark">指数</router-link>
            &lt;!&ndash;<a @click.captrue="mark=true;setupMark=false">指数</a>&ndash;&gt;
          </li>
          <div class="screen" :class="[screen?'active':'']"><a @click.captrue="screen=!screen">筛选</a></div>
        </ul>
      </div>-->
      <div v-if="instantDetails===false">
        <div v-if="screen===true">
          <div class="mark_screen_cont">
            <div class="mark_screen_list" :class="[selectAll?'':'active']" @click.capture="selectAll=false">英超</div>
            <div class="mark_screen_list" :class="[selectAll?'':'active']" @click.capture="selectAll=false">自由杯</div>
            <div class="mark_screen_list" :class="[selectAll?'':'active']" @click.capture="selectAll=false">意甲</div>
            <div class="mark_screen_list" :class="[selectAll?'':'active']" @click.capture="selectAll=false">西杯</div>
            <div class="mark_screen_list" :class="[selectAll?'':'active']" @click.capture="selectAll=false">荷兰杯</div>
            <div class="mark_screen_list" :class="[selectAll?'':'active']" @click.capture="selectAll=false">英女足</div>
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
      </div>
      <!--即时详情-->
      <div v-else>
        <div class="conttwo">
          <div class="footballvs">
            <div class="footballvs_list">
              <div class="footballvs_list_img"><img src="../assets/images/img08.png"></div>
              <div class="footballvs_list_name">墨尔本城</div>
            </div>
            <div class="footballvs_list">
              <div class="footballvs_list_vs">VS</div>
              <div class="footballvs_list_time">2018-02-01 15:30</div>
              <div class="footballvs_list_status"><span class="stone">未开</span></div>
            </div>
            <div class="footballvs_list">
              <div class="footballvs_list_img"><img src="../assets/images/img09.png"></div>
              <div class="footballvs_list_name">新城堡联队</div>
            </div>
            <div class="clear"></div>
          </div>
          <div class="foot_child_nav">
            <ul>
              <li :class="[tabKey===''?'active_yellow':'']" @click.capture="tabKey=''"><a>事件</a></li>
              <li :class="[tabKey===1?'active_yellow':'']" @click.capture="tabKey=1"><a>阵容</a></li>
              <li :class="[tabKey===2?'active_yellow':'']" @click.capture="tabKey=2"><a>分析</a></li>
              <li :class="[tabKey===3?'active_yellow':'']" @click.capture="tabKey=3"><a>亚赔</a></li>
              <li :class="[tabKey===4?'active_yellow':'']" @click.capture="tabKey=4"><a>欧赔</a></li>
              <li :class="[tabKey===5?'active_yellow':'']" @click.capture="tabKey=5"><a>大小</a></li>
            </ul>
          </div>
          <div class="cont">
            <div v-if="tabKey===''">
              <div class="fenxiBar">
              【比赛事件】
            </div>
              <table width="100%" border="0" cellpadding="0" cellspacing="0" class="mytable mytabletwo">
                <tbody>
                <tr>
                  <td width="45%" align="right">&nbsp;<img src="../assets/images/img10.png" class="sjImg">Badocha</td>
                  <td width="10%" class="huibg" align="center">40</td>
                  <td width="45%" align="left">
                  </td>
                </tr>
                <tr>
                  <td width="45%" align="right">&nbsp;</td>
                  <td width="10%" class="huibg" align="center">53</td>
                  <td width="45%" align="left">Musiol<img src="../assets/images/img10.png" class="sjImg"></td>
                </tr>
                <tr>
                  <td width="45%" align="right">&nbsp;<img src="../assets/images/img11.png" class="sjImg">&nbsp;</td>
                  <td width="10%" class="huibg" align="center">77</td>
                  <td width="45%" align="left">
                  </td>
                </tr>
                <tr>
                  <td width="45%" align="right">&nbsp;<img src="../assets/images/img12.png" class="sjImg">&nbsp;</td>
                  <td width="10%" class="huibg" align="center">89</td>
                  <td width="45%" align="left">
                  </td>
                </tr>
                <tr>
                  <td colspan="3" align="center"><img src="../assets/images/img10.png" class="sjImg">入球&nbsp;<img src="../assets/images/img11.png" class="sjImg">点球&nbsp;<img src="../assets/images/img12.png" class="sjImg">乌龙&nbsp;<img src="../assets/images/img13.png" class="sjImg">两黄变红&nbsp;<img src="../assets/images/img15.png" class="sjImg">换人</td>
                </tr>

                </tbody>
              </table>
              <div class="fenxiBar">
                【技术统计】
              </div>
              <table width="100%" border="0" cellpadding="0" cellspacing="0" class="mytable  mytabletwo">
                <tbody>
                <tr align="center">
                  <td width="30%">8</td>
                  <td width="30%" class="huibg">角球</td>
                  <td width="30%">5</td>
                </tr>
                <tr align="center">
                  <td width="30%">1</td>
                  <td width="30%" class="huibg">黄牌</td>
                  <td width="30%">0</td>
                </tr>
                <tr align="center">
                  <td width="30%">11</td>
                  <td width="30%" class="huibg">射门次数</td>
                  <td width="30%">19</td>
                </tr>
                <tr align="center">
                  <td width="30%">6</td>
                  <td width="30%" class="huibg">射正次数</td>
                  <td width="30%">9</td>
                </tr>
                <tr align="center">
                  <td width="30%">5</td>
                  <td width="30%" class="huibg">射门不中</td>
                  <td width="30%">10</td>
                </tr>
                </tbody>
              </table>
              <div class="fenxiBar">
                【半场/全场胜负统计(近两赛季)】
              </div>
              <table width="100%" border="0" cellpadding="0" cellspacing="0" class="mytable mytabletwo">
                <tbody>
                <tr align="center">
                  <td width="15%">主场(5)</td>
                  <td width="15%">客场(18)</td>
                  <td width="30%" class="huibg">&nbsp;</td>
                  <td width="15%">主场(3)</td>
                  <td width="15%">客场(7)</td>
                </tr>
                <tr align="center">
                  <td>0</td>
                  <td>2</td>
                  <td class="huibg">半胜/全胜</td>
                  <td>1</td>
                  <td>0</td>
                </tr>
                <tr align="center">
                  <td>0</td>
                  <td>2</td>
                  <td class="huibg">半平/全胜</td>
                  <td>0</td>
                  <td>1</td>
                </tr>
                <tr align="center">
                  <td>0</td>
                  <td>0</td>
                  <td class="huibg">半负/全胜</td>
                  <td>0</td>
                  <td>0</td>
                </tr>
                <tr align="center">
                  <td>1</td>
                  <td>0</td>
                  <td class="huibg">半胜/全平</td>
                  <td>0</td>
                  <td>0</td>
                </tr>
                <tr align="center">
                  <td>0</td>
                  <td>4</td>
                  <td class="huibg">半平/全平</td>
                  <td>0</td>
                  <td>1</td>
                </tr>
                <tr align="center">
                  <td>0</td>
                  <td>0</td>
                  <td class="huibg">半负/全平</td>
                  <td>0</td>
                  <td>0</td>
                </tr>
                <tr align="center">
                  <td>0</td>
                  <td>1</td>
                  <td class="huibg">半胜/全负</td>
                  <td>0</td>
                  <td>1</td>
                </tr>
                <tr align="center">
                  <td>0</td>
                  <td>2</td>
                  <td class="huibg">半平/全负</td>
                  <td>1</td>
                  <td>4</td>
                </tr>
                <tr align="center">
                  <td>4</td>
                  <td>7</td>
                  <td class="huibg">半负/全负</td>
                  <td>1</td>
                  <td>0</td>
                </tr>
                </tbody>
              </table>
            </div>
            <div v-if="tabKey===1" class="nodata">暂无数据</div>
            <div v-if="tabKey===2">
              <div class="fenxiBar">
                【积分排名】
              </div>
              <div class="resultBar">
                墨尔本城
              </div>
              <table class="mytable" width="100%" border="0" cellspacing="0" cellpadding="0">
                <tbody>
                <tr>
                  <th>全场</th>
                  <th>赛</th>
                  <th>胜</th>
                  <th>平</th>
                  <th>负</th>
                  <th>得</th>
                  <th>失</th>
                  <th>净</th>
                  <th>积分</th>
                  <th>排名</th>
                  <th>胜率</th>
                </tr>
                <tr align="center">
                  <td>总</td>
                  <td>20</td>
                  <td>8</td>
                  <td>7</td>
                  <td>5</td>
                  <td>34</td>
                  <td>24</td>
                  <td>10</td>
                  <td>31</td>
                  <td>6</td>
                  <td>40%</td>
                </tr>
                <tr align="center">
                  <td>主</td>
                  <td>9</td>
                  <td>2</td>
                  <td>5</td>
                  <td>2</td>
                  <td>14</td>
                  <td>12</td>
                  <td>2</td>
                  <td>11</td>
                  <td>11</td>
                  <td>22%</td>
                </tr>
                <tr align="center">
                  <td>客</td>
                  <td>11</td>
                  <td>6</td>
                  <td>2</td>
                  <td>3</td>
                  <td>20</td>
                  <td>12</td>
                  <td>8</td>
                  <td>20</td>
                  <td>4</td>
                  <td>55%</td>
                </tr>
                <tr align="center">
                  <td>近</td>
                  <td>6</td>
                  <td>2</td>
                  <td>3</td>
                  <td>1</td>
                  <td>8</td>
                  <td>7</td>
                  <td>1</td>
                  <td>9</td>
                  <td></td>
                  <td>33%</td>
                </tr>
                </tbody>
              </table>
              <div class="resultBar">
                新城堡联队
              </div>
              <table class="mytable" width="100%" border="0" cellspacing="0" cellpadding="0">
                <tbody>
                <tr>
                  <th>全场</th>
                  <th>赛</th>
                  <th>胜</th>
                  <th>平</th>
                  <th>负</th>
                  <th>得</th>
                  <th>失</th>
                  <th>净</th>
                  <th>积分</th>
                  <th>排名</th>
                  <th>胜率</th>
                </tr>
                <tr align="center">
                  <td>总</td>
                  <td>20</td>
                  <td>5</td>
                  <td>7</td>
                  <td>8</td>
                  <td>34</td>
                  <td>34</td>
                  <td>0</td>
                  <td>22</td>
                  <td>13</td>
                  <td>25%</td>
                </tr>
                <tr align="center">
                  <td>主</td>
                  <td>11</td>
                  <td>4</td>
                  <td>5</td>
                  <td>2</td>
                  <td>22</td>
                  <td>17</td>
                  <td>5</td>
                  <td>17</td>
                  <td>7</td>
                  <td>36%</td>
                </tr>
                <tr align="center">
                  <td>客</td>
                  <td>9</td>
                  <td>1</td>
                  <td>2</td>
                  <td>6</td>
                  <td>12</td>
                  <td>17</td>
                  <td>-5</td>
                  <td>5</td>
                  <td>14</td>
                  <td>11%</td>
                </tr>
                <tr align="center">
                  <td>近</td>
                  <td>6</td>
                  <td>1</td>
                  <td>4</td>
                  <td>1</td>
                  <td>13</td>
                  <td>11</td>
                  <td>2</td>
                  <td>7</td>
                  <td></td>
                  <td>17%</td>
                </tr>
                </tbody>
              </table>
              <div class="fenxiBar">
                【对赛往绩】
              </div>
              <table class="mytable oldmatch" width="100%" border="0" cellspacing="0" cellpadding="0">
                <tbody>
                <tr>
                  <th>日期</th>
                  <th>赛事</th>
                  <th>主场 </th>
                  <th>比分</th>
                  <th>客场</th>
                  <th>盘路</th>
                </tr>
                <tr align="center">
                  <td>2017</td>
                  <td rowspan="2">荷甲</td>
                  <td rowspan="2">格罗宁根</td>
                  <td>4-2</td>
                  <td rowspan="2">维迪斯</td>
                  <td><div>-0.25</div></td>
                </tr>
                <tr align="center">
                  <td>11-19</td>
                  <td>(0-1)</td>
                  <td>
                    输
                  </td>
                </tr>
                <tr align="center">
                  <td>2017</td>
                  <td rowspan="2">荷甲</td>
                  <td rowspan="2">格罗宁根</td>
                  <td>1-1</td>
                  <td rowspan="2">维迪斯</td>
                  <td><div>0</div></td>
                </tr>
                <tr align="center">
                  <td>01-22</td>
                  <td>(1-0)</td>
                  <td>
                    走
                  </td>
                </tr>
                <tr align="center">
                  <td>2016</td>
                  <td rowspan="2">荷甲</td>
                  <td rowspan="2">维迪斯</td>
                  <td>2-1</td>
                  <td rowspan="2">格罗宁根</td>
                  <td><div>1</div></td>
                </tr>
                <tr align="center">
                  <td>10-02</td>
                  <td>(1-1)</td>
                  <td>
                    走
                  </td>
                </tr>
                <tr align="center">
                  <td>2016</td>
                  <td rowspan="2">荷甲</td>
                  <td rowspan="2">格罗宁根</td>
                  <td>0-3</td>
                  <td rowspan="2">维迪斯</td>
                  <td><div>-0.25</div></td>
                </tr>
                <tr align="center">
                  <td>03-20</td>
                  <td>(0-0)</td>
                  <td>
                    赢
                  </td>
                </tr>
                <tr align="center">
                  <td>2015</td>
                  <td rowspan="2">荷甲</td>
                  <td rowspan="2">维迪斯</td>
                  <td>5-0</td>
                  <td rowspan="2">格罗宁根</td>
                  <td><div>1.25</div></td>
                </tr>
                <tr align="center">
                  <td>10-04</td>
                  <td>(1-0)</td>
                  <td>
                    赢
                  </td>
                </tr>
                <tr align="center">
                  <td>2015</td>
                  <td rowspan="2">荷甲</td>
                  <td rowspan="2">维迪斯</td>
                  <td>1-1</td>
                  <td rowspan="2">格罗宁根</td>
                  <td><div>1.25</div></td>
                </tr>
                <tr align="center">
                  <td>04-05</td>
                  <td>(0-1)</td>
                  <td>
                    输
                  </td>
                </tr>
                <tr align="center">
                  <td>2015</td>
                  <td rowspan="2">荷兰杯</td>
                  <td rowspan="2">格罗宁根</td>
                  <td>4-0</td>
                  <td rowspan="2">维迪斯</td>
                  <td><div>-0.25</div></td>
                </tr>
                <tr align="center">
                  <td>01-29</td>
                  <td>(0-0)</td>
                  <td>
                    输
                  </td>
                </tr>
                <tr align="center">
                  <td>2014</td>
                  <td rowspan="2">荷甲</td>
                  <td rowspan="2">格罗宁根</td>
                  <td>1-1</td>
                  <td rowspan="2">维迪斯</td>
                  <td><div>-0.25</div></td>
                </tr>
                <tr align="center">
                  <td>12-14</td>
                  <td>(0-1)</td>
                  <td>
                    输
                  </td>
                </tr>
                <tr align="center">
                  <td>2014</td>
                  <td rowspan="2">荷甲</td>
                  <td rowspan="2">维迪斯</td>
                  <td>1-4</td>
                  <td rowspan="2">格罗宁根</td>
                  <td><div>0.75</div></td>
                </tr>
                <tr align="center">
                  <td>05-11</td>
                  <td>(0-1)</td>
                  <td>
                    输
                  </td>
                </tr>
                <tr align="center">
                  <td>2014</td>
                  <td rowspan="2">荷甲</td>
                  <td rowspan="2">格罗宁根</td>
                  <td>1-0</td>
                  <td rowspan="2">维迪斯</td>
                  <td><div>0</div></td>
                </tr>
                <tr align="center">
                  <td>05-08</td>
                  <td>(0-0)</td>
                  <td>
                    输
                  </td>
                </tr>
                <tr>
                  <td colspan="6" align="center">共&nbsp;10&nbsp;场，
                    胜&nbsp;<div style="color:red;display:inline;">3</div>&nbsp;&nbsp;
                    平&nbsp;&nbsp;<div style="color:blue;display:inline;">3</div>&nbsp;
                    负&nbsp;&nbsp;<div style="color:green;display:inline;">4</div>
                    &nbsp;&nbsp;胜率&nbsp;<div style="color:red;display:inline;">30%</div>
                  </td>
                </tr>
                </tbody>
              </table>
              <div class="fenxiBar">
                【近期战绩】
              </div>
              <div class="resultBar">
                墨尔本城
              </div>
              <table class="mytable oldmatch" width="100%" border="0" cellspacing="0" cellpadding="0">
                <tbody>
                <tr>
                  <th>日期</th>
                  <th>赛事</th>
                  <th>主场 </th>
                  <th>比分</th>
                  <th>客场</th>
                  <th>盘路</th>
                </tr>
                <tr align="center">
                  <td>2017</td>
                  <td rowspan="2">荷甲</td>
                  <td rowspan="2">格罗宁根</td>
                  <td>4-2</td>
                  <td rowspan="2">维迪斯</td>
                  <td><div>-0.25</div></td>
                </tr>
                <tr align="center">
                  <td>11-19</td>
                  <td>(0-1)</td>
                  <td>
                    输
                  </td>
                </tr>
                <tr align="center">
                  <td>2017</td>
                  <td rowspan="2">荷甲</td>
                  <td rowspan="2">格罗宁根</td>
                  <td>1-1</td>
                  <td rowspan="2">维迪斯</td>
                  <td><div>0</div></td>
                </tr>
                <tr align="center">
                  <td>01-22</td>
                  <td>(1-0)</td>
                  <td>
                    走
                  </td>
                </tr>
                <tr align="center">
                  <td>2016</td>
                  <td rowspan="2">荷甲</td>
                  <td rowspan="2">维迪斯</td>
                  <td>2-1</td>
                  <td rowspan="2">格罗宁根</td>
                  <td><div>1</div></td>
                </tr>
                <tr align="center">
                  <td>10-02</td>
                  <td>(1-1)</td>
                  <td>
                    走
                  </td>
                </tr>
                <tr align="center">
                  <td>2016</td>
                  <td rowspan="2">荷甲</td>
                  <td rowspan="2">格罗宁根</td>
                  <td>0-3</td>
                  <td rowspan="2">维迪斯</td>
                  <td><div>-0.25</div></td>
                </tr>
                <tr align="center">
                  <td>03-20</td>
                  <td>(0-0)</td>
                  <td>
                    赢
                  </td>
                </tr>
                <tr align="center">
                  <td>2015</td>
                  <td rowspan="2">荷甲</td>
                  <td rowspan="2">维迪斯</td>
                  <td>5-0</td>
                  <td rowspan="2">格罗宁根</td>
                  <td><div>1.25</div></td>
                </tr>
                <tr align="center">
                  <td>10-04</td>
                  <td>(1-0)</td>
                  <td>
                    赢
                  </td>
                </tr>
                <tr align="center">
                  <td>2015</td>
                  <td rowspan="2">荷甲</td>
                  <td rowspan="2">维迪斯</td>
                  <td>1-1</td>
                  <td rowspan="2">格罗宁根</td>
                  <td><div>1.25</div></td>
                </tr>
                <tr align="center">
                  <td>04-05</td>
                  <td>(0-1)</td>
                  <td>
                    输
                  </td>
                </tr>
                <tr align="center">
                  <td>2015</td>
                  <td rowspan="2">荷兰杯</td>
                  <td rowspan="2">格罗宁根</td>
                  <td>4-0</td>
                  <td rowspan="2">维迪斯</td>
                  <td><div>-0.25</div></td>
                </tr>
                <tr align="center">
                  <td>01-29</td>
                  <td>(0-0)</td>
                  <td>
                    输
                  </td>
                </tr>
                <tr align="center">
                  <td>2014</td>
                  <td rowspan="2">荷甲</td>
                  <td rowspan="2">格罗宁根</td>
                  <td>1-1</td>
                  <td rowspan="2">维迪斯</td>
                  <td><div>-0.25</div></td>
                </tr>
                <tr align="center">
                  <td>12-14</td>
                  <td>(0-1)</td>
                  <td>
                    输
                  </td>
                </tr>
                <tr align="center">
                  <td>2014</td>
                  <td rowspan="2">荷甲</td>
                  <td rowspan="2">维迪斯</td>
                  <td>1-4</td>
                  <td rowspan="2">格罗宁根</td>
                  <td><div>0.75</div></td>
                </tr>
                <tr align="center">
                  <td>05-11</td>
                  <td>(0-1)</td>
                  <td>
                    输
                  </td>
                </tr>
                <tr align="center">
                  <td>2014</td>
                  <td rowspan="2">荷甲</td>
                  <td rowspan="2">格罗宁根</td>
                  <td>1-0</td>
                  <td rowspan="2">维迪斯</td>
                  <td><div>0</div></td>
                </tr>
                <tr align="center">
                  <td>05-08</td>
                  <td>(0-0)</td>
                  <td>
                    输
                  </td>
                </tr>
                <tr>
                  <td colspan="6" align="center">共&nbsp;10&nbsp;场，
                    胜&nbsp;<div style="color:red;display:inline;">3</div>&nbsp;&nbsp;
                    平&nbsp;&nbsp;<div style="color:blue;display:inline;">3</div>&nbsp;
                    负&nbsp;&nbsp;<div style="color:green;display:inline;">4</div>
                    &nbsp;&nbsp;胜率&nbsp;<div style="color:red;display:inline;">30%</div>
                  </td>
                </tr>
                </tbody>
              </table>
              <div class="resultBar">
                新城堡联队
              </div>
              <table class="mytable oldmatch" width="100%" border="0" cellspacing="0" cellpadding="0">
                <tbody>
                <tr>
                  <th>日期</th>
                  <th>赛事</th>
                  <th>主场 </th>
                  <th>比分</th>
                  <th>客场</th>
                  <th>盘路</th>
                </tr>
                <tr align="center">
                  <td>2017</td>
                  <td rowspan="2">荷甲</td>
                  <td rowspan="2">格罗宁根</td>
                  <td>4-2</td>
                  <td rowspan="2">维迪斯</td>
                  <td><div>-0.25</div></td>
                </tr>
                <tr align="center">
                  <td>11-19</td>
                  <td>(0-1)</td>
                  <td>
                    输
                  </td>
                </tr>
                <tr align="center">
                  <td>2017</td>
                  <td rowspan="2">荷甲</td>
                  <td rowspan="2">格罗宁根</td>
                  <td>1-1</td>
                  <td rowspan="2">维迪斯</td>
                  <td><div>0</div></td>
                </tr>
                <tr align="center">
                  <td>01-22</td>
                  <td>(1-0)</td>
                  <td>
                    走
                  </td>
                </tr>
                <tr align="center">
                  <td>2016</td>
                  <td rowspan="2">荷甲</td>
                  <td rowspan="2">维迪斯</td>
                  <td>2-1</td>
                  <td rowspan="2">格罗宁根</td>
                  <td><div>1</div></td>
                </tr>
                <tr align="center">
                  <td>10-02</td>
                  <td>(1-1)</td>
                  <td>
                    走
                  </td>
                </tr>
                <tr align="center">
                  <td>2016</td>
                  <td rowspan="2">荷甲</td>
                  <td rowspan="2">格罗宁根</td>
                  <td>0-3</td>
                  <td rowspan="2">维迪斯</td>
                  <td><div>-0.25</div></td>
                </tr>
                <tr align="center">
                  <td>03-20</td>
                  <td>(0-0)</td>
                  <td>
                    赢
                  </td>
                </tr>
                <tr align="center">
                  <td>2015</td>
                  <td rowspan="2">荷甲</td>
                  <td rowspan="2">维迪斯</td>
                  <td>5-0</td>
                  <td rowspan="2">格罗宁根</td>
                  <td><div>1.25</div></td>
                </tr>
                <tr align="center">
                  <td>10-04</td>
                  <td>(1-0)</td>
                  <td>
                    赢
                  </td>
                </tr>
                <tr align="center">
                  <td>2015</td>
                  <td rowspan="2">荷甲</td>
                  <td rowspan="2">维迪斯</td>
                  <td>1-1</td>
                  <td rowspan="2">格罗宁根</td>
                  <td><div>1.25</div></td>
                </tr>
                <tr align="center">
                  <td>04-05</td>
                  <td>(0-1)</td>
                  <td>
                    输
                  </td>
                </tr>
                <tr align="center">
                  <td>2015</td>
                  <td rowspan="2">荷兰杯</td>
                  <td rowspan="2">格罗宁根</td>
                  <td>4-0</td>
                  <td rowspan="2">维迪斯</td>
                  <td><div>-0.25</div></td>
                </tr>
                <tr align="center">
                  <td>01-29</td>
                  <td>(0-0)</td>
                  <td>
                    输
                  </td>
                </tr>
                <tr align="center">
                  <td>2014</td>
                  <td rowspan="2">荷甲</td>
                  <td rowspan="2">格罗宁根</td>
                  <td>1-1</td>
                  <td rowspan="2">维迪斯</td>
                  <td><div>-0.25</div></td>
                </tr>
                <tr align="center">
                  <td>12-14</td>
                  <td>(0-1)</td>
                  <td>
                    输
                  </td>
                </tr>
                <tr align="center">
                  <td>2014</td>
                  <td rowspan="2">荷甲</td>
                  <td rowspan="2">维迪斯</td>
                  <td>1-4</td>
                  <td rowspan="2">格罗宁根</td>
                  <td><div>0.75</div></td>
                </tr>
                <tr align="center">
                  <td>05-11</td>
                  <td>(0-1)</td>
                  <td>
                    输
                  </td>
                </tr>
                <tr align="center">
                  <td>2014</td>
                  <td rowspan="2">荷甲</td>
                  <td rowspan="2">格罗宁根</td>
                  <td>1-0</td>
                  <td rowspan="2">维迪斯</td>
                  <td><div>0</div></td>
                </tr>
                <tr align="center">
                  <td>05-08</td>
                  <td>(0-0)</td>
                  <td>
                    输
                  </td>
                </tr>
                <tr>
                  <td colspan="6" align="center">共&nbsp;10&nbsp;场，
                    胜&nbsp;<div style="color:red;display:inline;">3</div>&nbsp;&nbsp;
                    平&nbsp;&nbsp;<div style="color:blue;display:inline;">3</div>&nbsp;
                    负&nbsp;&nbsp;<div style="color:green;display:inline;">4</div>
                    &nbsp;&nbsp;胜率&nbsp;<div style="color:red;display:inline;">30%</div>
                  </td>
                </tr>
                </tbody>
              </table>
              <div class="fenxiBar">
                【联赛盘路走势】
              </div>
              <div class="resultBar">
                墨尔本城
              </div>
              <table class="mytable" width="100%" border="0" cellspacing="0" cellpadding="0">
                <tbody>
                <tr>
                  <th>全场</th>
                  <th>赢盘</th>
                  <th>走水</th>
                  <th>输盘</th>
                  <th>赢盘率</th>
                  <th>大球</th>
                  <th>大球率</th>
                  <th>小球</th>
                  <th>小球率</th>
                </tr>
                <tr align="center">
                  <td>全场</td>
                  <td>10</td>
                  <td>0</td>
                  <td>10</td>
                  <td>50.0%</td>
                  <td>9</td>
                  <td>45.0%</td>
                  <td>11</td>
                  <td>55.0%</td>
                </tr>
                <tr align="center">
                  <td>主</td>
                  <td>2</td>
                  <td>0</td>
                  <td>7</td>
                  <td>22.2%</td>
                  <td>4</td>
                  <td>44.4%</td>
                  <td>5</td>
                  <td>55.6%</td>
                </tr>
                <tr align="center">
                  <td>客</td>
                  <td>8</td>
                  <td>0</td>
                  <td>3</td>
                  <td>72.7%</td>
                  <td>5</td>
                  <td>45.5%</td>
                  <td>6</td>
                  <td>54.5%</td>
                </tr>
                <tr>
                  <td>近六</td>
                  <td colspan="4"><span style="color:red;display:inline;">赢</span><span style="color:#339900;display:inline;">输</span><span style="color:red;display:inline;">赢</span><span style="color:red;display:inline;">赢</span><span style="color:#339900;display:inline;">输</span><span style="color:#339900;display:inline;">输</span></td>
                  <td colspan="4"><span style="color:red;display:inline;">大</span><span style="color:#339900;display:inline;">小</span><span style="color:#339900;display:inline;">小</span><span style="color:#339900;display:inline;">小</span><span style="color:#339900;display:inline;">小</span><span style="color:red;display:inline;">大</span></td>
                </tr>
                </tbody>
              </table>
              <div class="resultBar">
                新城堡联队
              </div>
              <table class="mytable" width="100%" border="0" cellspacing="0" cellpadding="0">
                <tbody>
                <tr>
                  <th>全场</th>
                  <th>赢盘</th>
                  <th>走水</th>
                  <th>输盘</th>
                  <th>赢盘率</th>
                  <th>大球</th>
                  <th>大球率</th>
                  <th>小球</th>
                  <th>小球率</th>
                </tr>
                <tr align="center">
                  <td>全场</td>
                  <td>7</td>
                  <td>2</td>
                  <td>11</td>
                  <td>35.0%</td>
                  <td>12</td>
                  <td>60.0%</td>
                  <td>7</td>
                  <td>35.0%</td>
                </tr>
                <tr align="center">
                  <td>主</td>
                  <td>5</td>
                  <td>1</td>
                  <td>5</td>
                  <td>45.5%</td>
                  <td>6</td>
                  <td>54.5%</td>
                  <td>5</td>
                  <td>45.5%</td>
                </tr>
                <tr align="center">
                  <td>客</td>
                  <td>2</td>
                  <td>1</td>
                  <td>6</td>
                  <td>22.2%</td>
                  <td>6</td>
                  <td>66.7%</td>
                  <td>2</td>
                  <td>22.2%</td>
                </tr>
                <tr>
                  <td>近六</td>
                  <td colspan="4"><span style="color:red;display:inline;">赢</span><span style="color:#339900;display:inline;">输</span><span style="color:red;display:inline;">赢</span><span style="color:red;display:inline;">赢</span><span style="color:#339900;display:inline;">输</span><span style="color:#339900;display:inline;">输</span></td>
                  <td colspan="4"><span style="color:red;display:inline;">大</span><span style="color:#339900;display:inline;">小</span><span style="color:#339900;display:inline;">小</span><span style="color:#339900;display:inline;">小</span><span style="color:#339900;display:inline;">小</span><span style="color:red;display:inline;">大</span></td>
                </tr>
                </tbody>
              </table>
              <div class="fenxiBar">
                【相同历史亚赔】
              </div>
              <div class="resultBar">
                墨尔本城
              </div>
              <table class="mytable hismatch" width="100%" border="0" cellspacing="0" cellpadding="0">
                <tbody>
                <tr>
                  <th>赛事</th>
                  <th>时间</th>
                  <th>上盘</th>
                  <th>初盘</th>
                  <th>下盘</th>
                  <th>比分</th>
                  <th>盘路</th>
                </tr>
                <tr align="center">
                  <td rowspan="2">球会友谊</td>
                  <td>2018</td>
                  <td rowspan="2">维迪斯</td>
                  <td rowspan="2">0.75</td>
                  <td rowspan="2">哈茨</td>
                  <td rowspan="2">1-1</td>
                  <td rowspan="2"><div >输</div></td>
                </tr>
                <tr align="center">
                  <td>01-12</td>
                </tr>
                <tr align="center">
                  <td rowspan="2">荷甲</td>
                  <td>2017</td>
                  <td rowspan="2">维迪斯</td>
                  <td rowspan="2">0.75</td>
                  <td rowspan="2">威廉二世</td>
                  <td rowspan="2">2-2</td>
                  <td rowspan="2"><div >输</div></td>
                </tr>
                <tr align="center">
                  <td>12-14</td>
                </tr>
                <tr align="center">
                  <td rowspan="2">球会友谊</td>
                  <td>2017</td>
                  <td rowspan="2">维迪斯</td>
                  <td rowspan="2">0.75</td>
                  <td rowspan="2">亚历山德里亚</td>
                  <td rowspan="2">0-2</td>
                  <td rowspan="2"><div >输</div></td>
                </tr>
                <tr align="center">
                  <td>07-01</td>
                </tr>
                <tr align="center">
                  <td rowspan="2">荷甲</td>
                  <td>2017</td>
                  <td style="color:red;" rowspan="2">维迪斯</td>
                  <td rowspan="2">0.75</td>
                  <td rowspan="2">罗达JC</td>
                  <td rowspan="2">3-0</td>
                  <td rowspan="2"><div style="color:red;display:inline;">赢</div></td>
                </tr>
                <tr align="center">
                  <td>05-14</td>
                </tr>
                <tr align="center">
                  <td rowspan="2">荷甲</td>
                  <td>2017</td>
                  <td style="color:red;" rowspan="2">维迪斯</td>
                  <td rowspan="2">0.75</td>
                  <td rowspan="2">鹿特丹斯巴达</td>
                  <td rowspan="2">5-0</td>
                  <td rowspan="2"><div style="color:red;display:inline;">赢</div></td>
                </tr>
                <tr align="center">
                  <td>03-11</td>
                </tr>
                <tr align="center">
                  <td rowspan="2">荷甲</td>
                  <td>2017</td>
                  <td rowspan="2">维迪斯</td>
                  <td rowspan="2">0.75</td>
                  <td rowspan="2">威廉二世</td>
                  <td rowspan="2">0-2</td>
                  <td rowspan="2"><div >输</div></td>
                </tr>
                <tr align="center">
                  <td>02-12</td>
                </tr>
                </tbody>
              </table>
              <div class="resultBar">
                新城堡联队
              </div>
              <table class="mytable hismatch" width="100%" border="0" cellspacing="0" cellpadding="0">
                <tbody>
                <tr>
                  <th>赛事</th>
                  <th>时间</th>
                  <th>上盘</th>
                  <th>初盘</th>
                  <th>下盘</th>
                  <th>比分</th>
                  <th>盘路</th>
                </tr>
                <tr align="center">
                  <td rowspan="2">球会友谊</td>
                  <td>2018</td>
                  <td rowspan="2">维迪斯</td>
                  <td rowspan="2">0.75</td>
                  <td rowspan="2">哈茨</td>
                  <td rowspan="2">1-1</td>
                  <td rowspan="2"><div >输</div></td>
                </tr>
                <tr align="center">
                  <td>01-12</td>
                </tr>
                <tr align="center">
                  <td rowspan="2">荷甲</td>
                  <td>2017</td>
                  <td rowspan="2">维迪斯</td>
                  <td rowspan="2">0.75</td>
                  <td rowspan="2">威廉二世</td>
                  <td rowspan="2">2-2</td>
                  <td rowspan="2"><div >输</div></td>
                </tr>
                <tr align="center">
                  <td>12-14</td>
                </tr>
                <tr align="center">
                  <td rowspan="2">球会友谊</td>
                  <td>2017</td>
                  <td rowspan="2">维迪斯</td>
                  <td rowspan="2">0.75</td>
                  <td rowspan="2">亚历山德里亚</td>
                  <td rowspan="2">0-2</td>
                  <td rowspan="2"><div >输</div></td>
                </tr>
                <tr align="center">
                  <td>07-01</td>
                </tr>
                <tr align="center">
                  <td rowspan="2">荷甲</td>
                  <td>2017</td>
                  <td style="color:red;" rowspan="2">维迪斯</td>
                  <td rowspan="2">0.75</td>
                  <td rowspan="2">罗达JC</td>
                  <td rowspan="2">3-0</td>
                  <td rowspan="2"><div style="color:red;display:inline;">赢</div></td>
                </tr>
                <tr align="center">
                  <td>05-14</td>
                </tr>
                <tr align="center">
                  <td rowspan="2">荷甲</td>
                  <td>2017</td>
                  <td style="color:red;" rowspan="2">维迪斯</td>
                  <td rowspan="2">0.75</td>
                  <td rowspan="2">鹿特丹斯巴达</td>
                  <td rowspan="2">5-0</td>
                  <td rowspan="2"><div style="color:red;display:inline;">赢</div></td>
                </tr>
                <tr align="center">
                  <td>03-11</td>
                </tr>
                <tr align="center">
                  <td rowspan="2">荷甲</td>
                  <td>2017</td>
                  <td rowspan="2">维迪斯</td>
                  <td rowspan="2">0.75</td>
                  <td rowspan="2">威廉二世</td>
                  <td rowspan="2">0-2</td>
                  <td rowspan="2"><div >输</div></td>
                </tr>
                <tr align="center">
                  <td>02-12</td>
                </tr>
                </tbody>
              </table>
              <div class="fenxiBar">
                【未来三场】
              </div>
              <div class="resultBar">
                墨尔本城
              </div>
              <table class="mytable newmatch" width="100%" border="0" cellspacing="0" cellpadding="0">
                <tbody>
                <tr>
                  <th>时间</th>
                  <th>赛事</th>
                  <th>主队</th>
                  <th>客队</th>
                  <th>间隔</th>
                </tr>
                <tr align="center">
                  <td>2018</td>
                  <td rowspan="2">荷甲</td>
                  <td rowspan="2">海牙</td>
                  <td style="color:red;" rowspan="2">维迪斯</td>
                  <td rowspan="2">6</td>
                </tr>
                <tr align="center">
                  <td>02-09</td>
                </tr>
                <tr align="center">
                  <td>2018</td>
                  <td rowspan="2">荷甲</td>
                  <td style="color:red;" rowspan="2">维迪斯</td>
                  <td rowspan="2">费耶诺德</td>
                  <td rowspan="2">9</td>
                </tr>
                <tr align="center">
                  <td>02-11</td>
                </tr>
                <tr align="center">
                  <td>2018</td>
                  <td rowspan="2">荷甲</td>
                  <td style="color:red;" rowspan="2">维迪斯</td>
                  <td rowspan="2">SBV精英</td>
                  <td rowspan="2">16</td>
                </tr>
                <tr align="center">
                  <td>02-18</td>
                </tr>
                </tbody>
              </table>
              <div class="resultBar">
                新城堡联队
              </div>
              <table class="mytable newmatch" width="100%" border="0" cellspacing="0" cellpadding="0">
                <tbody>
                <tr>
                  <th>时间</th>
                  <th>赛事</th>
                  <th>主队</th>
                  <th>客队</th>
                  <th>间隔</th>
                </tr>
                <tr align="center">
                  <td>2018</td>
                  <td rowspan="2">荷甲</td>
                  <td rowspan="2">费耶诺德</td>
                  <td style="color:red;" rowspan="2">格罗宁根</td>
                  <td rowspan="2">6</td>
                </tr>
                <tr align="center">
                  <td>02-09</td>
                </tr>
                <tr align="center">
                  <td>2018</td>
                  <td rowspan="2">荷甲</td>
                  <td style="color:red;" rowspan="2">格罗宁根</td>
                  <td rowspan="2">海牙</td>
                  <td rowspan="2">9</td>
                </tr>
                <tr align="center">
                  <td>02-11</td>
                </tr>
                <tr align="center">
                  <td>2018</td>
                  <td rowspan="2">荷甲</td>
                  <td rowspan="2">芬洛</td>
                  <td style="color:red;" rowspan="2">格罗宁根</td>
                  <td rowspan="2">16</td>
                </tr>
                <tr align="center">
                  <td>02-18</td>
                </tr>

                </tbody>
              </table>
              <div class="fenxiBar">
                【心水推介】
              </div>
              <table class="mytable" width="100%" border="0" cellspacing="0" cellpadding="0">
                <tbody>
                <tr>
                  <th width="33%">球队</th>
                  <th>近期走势</th>
                  <th width="33%">盘路输赢</th>
                </tr>
                <tr>
                  <td align="center">維迪斯</td>
                  <td align="center">DLDWDW</td>
                  <td align="center">LWLWLW</td>
                </tr>
                <tr>
                  <td align="center">高寧根</td>
                  <td align="center">DLWLDD</td>
                  <td align="center">WLWLWL</td>
                </tr>
                <tr>
                  <td colspan="3" align="center">信心指数 - 維迪斯 ★★★★对赛成绩 - 維迪斯 3勝 3和 4負，進入2018年以來，維迪斯各項賽事錄得2勝2和保持不敗，其發揮明顯強於高寧根，維迪斯今仗主場稱雄在望。</td>
                </tr>
                </tbody>
              </table>
            </div>
            <div v-if="tabKey===3" class="football_cont">
              <table border="0" cellpadding="0" cellspacing="1">
                <tbody>
                <tr>
                  <th>公司</th>
                  <th>初盘</th>
                  <th>即时盘</th>
                  <th>变</th>
                </tr>
                <tr>
                <tr>
                  <td>ManbetX</td>
                  <td>
                    <span class="odds">0.91</span>
                    <span class="odds">0/0.5</span>
                    <span class="odds">0.91</span>
                  </td>
                  <td>
                    <span class="odds red">0.92</span>
                    <span class="odds ">0/0.5</span>
                    <span class="odds red">0.92</span>
                  </td>
                  <td><a @click.capture="tabKey=8"><img src="../assets/images/img06.png"></a></td>
                </tr>
                <tr>
                  <td>Crown</td>
                  <td>
                    <span class="odds">0.90</span>
                    <span class="odds">0/0.5</span>
                    <span class="odds">0.90</span>
                  </td>
                  <td>
                    <span class="odds red">0.91</span>
                    <span class="odds ">0/0.5</span>
                    <span class="odds red">0.91</span>
                  </td>
                  <td><a href="timely_detail_child.html"><img src="../assets/images/img06.png"></a></td>
                </tr>
                <tr>
                  <td>Bet365</td>
                  <td>
                    <span class="odds">0.78</span>
                    <span class="odds">0/0.5</span>
                    <span class="odds">1.02</span>
                  </td>
                  <td>
                    <span class="odds red">0.92</span>
                    <span class="odds ">0/0.5</span>
                    <span class="odds green">0.88</span>
                  </td>
                  <td><a href="#"><img src="../assets/images/img06.png"></a></td>
                </tr>
                </tbody>
              </table>
            </div>
            <div v-if="tabKey===4" class="football_cont">
              <table id="oupei-two" border="0" cellpadding="0" cellspacing="1">
                <tbody>
                <tr>
                  <th colspan="2">公司筛选</th>
                  <th>主胜</th>
                  <th>平局</th>
                  <th>客胜</th>
                </tr>
                <tr>
                  <td>最高值</td>
                  <td class="grayCol"><div class="bottom_line">初盘</div><div>即盘</div></td>
                  <td><div class="bottom_line">2.00</div><div class="">2.00</div></td>
                  <td class="grayCol"><div class="bottom_line">3.40</div><div>3.15</div></td>
                  <td><div class="bottom_line">3.15</div><div class="red">3.35</div></td>
                </tr>
                <tr>
                  <td>最低值</td>
                  <td class="grayCol"><div class="bottom_line">初盘</div><div>即盘</div></td>
                  <td><div class="bottom_line">2.00</div><div class="green">2.00</div></td>
                  <td class="grayCol"><div class="bottom_line">3.40</div><div>3.15</div></td>
                  <td><div class="bottom_line">3.15</div><div class="red">3.35</div></td>
                </tr>
                <tr>
                  <td>平均值</td>
                  <td class="grayCol"><div class="bottom_line">初盘</div><div>即盘</div></td>
                  <td><div class="bottom_line">2.00</div><div class="green">2.00</div></td>
                  <td class="grayCol"><div class="bottom_line">3.40</div><div>3.15</div></td>
                  <td><div class="bottom_line">3.15</div><div class="red">3.35</div></td>
                </tr>
                <tr>
                  <td>十方国际</td>
                  <td class="grayCol"><div class="bottom_line">初盘</div><div>即盘</div></td>
                  <td><div class="bottom_line">2.00</div><div class="">2.00</div></td>
                  <td class="grayCol"><div class="bottom_line">3.40</div><div>3.15</div></td>
                  <td><div class="bottom_line">3.15</div><div class="red">3.35</div></td>
                </tr>
                </tbody>
              </table>
            </div>
            <div v-if="tabKey===5" class="football_cont">
              <table border="0" cellpadding="0" cellspacing="1">
                <tbody>
                <tr>
                  <th>公司</th>
                  <th>初盘</th>
                  <th>即时盘</th>
                  <th>变</th>
                </tr>
                <tr>
                <tr>
                  <td>ManbetX</td>
                  <td>
                    <span class="odds">0.91</span>
                    <span class="odds">2.5</span>
                    <span class="odds">0.91</span>
                  </td>
                  <td>
                    <span class="odds red">0.92</span>
                    <span class="odds ">2.5</span>
                    <span class="odds red">0.92</span>
                  </td>
                  <td><a @click.capture="tabKey=8"><img src="../assets/images/img06.png"></a></td>
                </tr>
                <tr>
                  <td>Crown</td>
                  <td>
                    <span class="odds">0.90</span>
                    <span class="odds">2.5</span>
                    <span class="odds">0.90</span>
                  </td>
                  <td>
                    <span class="odds red">0.91</span>
                    <span class="odds ">2.5</span>
                    <span class="odds red">0.91</span>
                  </td>
                  <td><a href="timely_detail_child.html"><img src="../assets/images/img06.png"></a></td>
                </tr>
                <tr>
                  <td>Bet365</td>
                  <td>
                    <span class="odds">0.78</span>
                    <span class="odds">2.5</span>
                    <span class="odds">1.02</span>
                  </td>
                  <td>
                    <span class="odds red">0.92</span>
                    <span class="odds ">2.5</span>
                    <span class="odds green">0.88</span>
                  </td>
                  <td><a href="#"><img src="../assets/images/img06.png"></a></td>
                </tr>
                </tbody>
              </table>
            </div>
            <!--大小&&亚培详情-->
            <div v-if="tabKey===8" class="football_cont">
                <table id="daxiao-child" border="0" cellpadding="0" cellspacing="1">
                  <tbody>
                  <tr>
                    <th>公司</th>
                    <th colspan="2">赔率变化</th>
                  </tr>
                  <tr>
                    <td>
                      <div id="companys">
                        <a class="company on" href="#" data-id="2">ManbetX</a>
                        <a class="company" href="#" data-id="1">澳门</a>
                        <a class="company" href="#" data-id="3">Crown</a>
                        <a class="company" href="#" data-id="4">Bet365</a>
                      </div>
                    </td>
                    <td colspan="2">
                      <div id="rollingBox" class="rollingBox">
                        <table border="0" cellspacing="0" cellpadding="0" id="hTable">
                          <tbody>
                          <tr>
                            <td class="red">0.91</td>
                            <td class="">2.5/3</td>
                            <td class="green">0.99</td>
                            <td>01-29 07:55</td>
                          </tr>
                          <tr class="alterbg">
                            <td class="red">0.88</td>
                            <td class="">2.5/3</td>
                            <td class="green">1.02</td>
                            <td>01-28 19:03</td>
                          </tr>
                          <tr>
                            <td class="">0.86</td>
                            <td class="">2.5/3</td>
                            <td class="">1.04</td>
                            <td>01-28 19:03</td>
                          </tr>
                          </tbody>
                        </table>
                      </div>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
          </div>
        </div>
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
        mark: false,//指数
        totalSwitch:true,//公司&赛事总开关
        cancel:false,//取消
        instantDetails:false,//即时详情
        setup: false,//设置
        getSchedule:[],//存放即时数据
      }
    },
    created() {
      this.$on('getSchedule', msg => { // 获取即时页面
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
    },
    methods: {},
    destroyed() {

    }
  }
</script>

<style scoped>

</style>
