<template>
    <div id="immediate">
      <mainNavigation></mainNavigation>
      <div class="conttwo">
        <div class="footballvs">
          <div class="footballvs_list">
            <div class="footballvs_list_img"><img :src="ScheduleDetails.h_img"></div>
            <div class="footballvs_list_name" v-text="ScheduleDetails.home_team"></div>
          </div>
          <div class="footballvs_list">
            <div class="footballvs_list_vs">VS</div>
            <div class="footballvs_list_time" v-text="parseInt(ScheduleDetails.start_time).getTime()"></div>
            <div class="footballvs_list_status"><span :class="[ScheduleDetails.status==0?'stone':ScheduleDetails.status==1?'sttwo':ScheduleDetails.status==2?'stthree':'stfour']">
              {{ScheduleDetails.status==0?'未开':ScheduleDetails.status==1?'进行':ScheduleDetails.status==2?'结束':'推迟'}}
            </span></div>
          </div>
          <div class="footballvs_list">
            <div class="footballvs_list_img"><img :src="ScheduleDetails.v_img"></div>
            <div class="footballvs_list_name" v-text="ScheduleDetails.visiting_team"></div>
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
            <!--比赛事件-->
           <div v-if="ScheduleEvent.length>0">
             <div class="fenxiBar">
               【比赛事件】
             </div>
             <table width="100%" border="0" cellpadding="0" cellspacing="0" class="mytable mytabletwo">
               <tbody>
               <tr v-for="x in ScheduleEvent">
                 <td width="45%" align="right">&nbsp;<span v-if="x.home_team==1"><img :src="x.eimg" class="sjImg">{{x.pname}}</span></td>
                 <td width="10%" class="huibg" align="center">{{`${_appendZero(new Date(x.time*1000).getHours())}:${_appendZero(new Date(x.time*1000).getMinutes())}`}}</td>
                 <td width="45%" align="left"><span v-if="x.home_team==0">{{x.pname}}<img :src="x.eimg" class="sjImg"></span></td>
               </tr>
               <tr>
                 <td colspan="3" align="center">
                   <span v-for="x in EventList"><img :src="x.img" class="sjImg">{{x.name}}&nbsp;</span>
                   <!-- <img src="../assets/images/img10.png" class="sjImg">入球&nbsp;-->
                 </td>
               </tr>

               </tbody>
             </table>
           </div>
            <!--技术统计-->
            <div v-if="Statistics.length>0">
              <div class="fenxiBar">
                【技术统计】
              </div>
              <table width="100%" border="0" cellpadding="0" cellspacing="0" class="mytable  mytabletwo">
                <tbody>
                <tr align="center" v-for="x in Statistics">
                  <td width="30%" v-text="x.home_team"></td>
                  <td width="30%" class="huibg" v-text="x.ename"></td>
                  <td width="30%" v-text="x.visiting_team"></td>
                </tr>
                </tbody>
              </table>
            </div>
            <!--【半场/全场胜负统计(近两赛季)】-->
           <div v-if="SeasonSta.length>0">
             <div class="fenxiBar">
               【半场/全场胜负统计(近两赛季)】
             </div>
             <table width="100%" border="0" cellpadding="0" cellspacing="0" class="mytable mytabletwo">
               <tbody>
               <tr align="center">
                 <td width="15%">主场({{SeasonSta.top['one']}})</td>
                 <td width="15%">客场({{SeasonSta.top.tow}})</td>
                 <td width="30%" class="huibg">&nbsp;</td>
                 <td width="15%">主场({{SeasonSta.top.tree}})</td>
                 <td width="15%">客场({{SeasonSta.top.four}})</td>
               </tr>

               <tr align="center">
                 <td v-text="SeasonSta.bs['one']">0</td>
                 <td v-text="SeasonSta.bs.tow">2</td>
                 <td class="huibg" v-text="SeasonSta.bs.k"></td>
                 <td v-text="SeasonSta.bs.tree">1</td>
                 <td v-text="SeasonSta.bs.four">0</td>
               </tr>

               <tr align="center">
                 <td v-text="SeasonSta.qs['one']">0</td>
                 <td v-text="SeasonSta.qs.tow">2</td>
                 <td class="huibg" v-text="SeasonSta.qs.k"></td>
                 <td v-text="SeasonSta.qs.tree">1</td>
                 <td v-text="SeasonSta.qs.four">0</td>
               </tr>
             <!--  <tr align="center">
                 <td>0</td>
                 <td>0</td>
                 <td class="huibg">半负/全胜</td>
                 <td>0</td>
                 <td>0</td>
               </tr>-->
               </tbody>
             </table>
           </div>
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
</template>

<script>
    export default {
        name: "immediate",
      data() {
        return {
          msg: 'Welcome to Your Vue.js App',
          tabKey:'',//即时详情>大小导航切换
          ScheduleDetails:[],//赛事详情头信息
          ScheduleEvent:[],//赛事详情事件
          EventList:[],//赛事事件列表
          Statistics:[],//赛事技术统计
          SeasonSta:[],//赛季胜负统计
          home_team:'',//主场团队id
          visiting_team:''//客场团队id
        }
      },
      watch: {

      },
      created() {//创建完成
        this.$on('ScheduleDetails', msg => { // 赛事详情头信息接口
          this._api('ScheduleDetails/Scheduledetails', {mid:this.$route.query.id}).then(r => {
            r=r.body;
            r.status === 'ok' ? (() => {
              r=r.data;
              [this.ScheduleDetails,this.home_team,this.visiting_team]=[r,r.hid,r.vid];
              this.$emit('SeasonSta','获取赛季胜负统计');
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
        this.$on('ScheduleEvent', msg => { // 赛事详情事件
          this._api('ScheduleDetails/ScheduleEvent', {mid:this.$route.query.id}).then(r => {
            r=r.body;
            r.status === 'ok' ? (() => {
              r=r.data;
              this.ScheduleEvent=r;
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
        this.$on('EventList', msg => { // 赛事事件列表接口
          this._api('ScheduleDetails/EventList', {mid:this.$route.query.id}).then(r => {
            r=r.body;
            r.status === 'ok' ? (() => {
              r=r.data;
              this.EventList=r;
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
        this.$on('Statistics', msg => { // 赛事技术统计
          this._api('ScheduleDetails/Statistics', {mid:this.$route.query.id}).then(r => {
            r=r.body;
            r.status === 'ok' ? (() => {
              r=r.data;
              this.Statistics=r;
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
        this.$on('SeasonSta', msg => { // 赛季胜负统计
          this._api('ScheduleDetails/SeasonSta', {
            mid:this.$route.query.id,
            home_team:this.home_team,
            visiting_team:this.visiting_team,
          }).then(r => {
            r=r.body;
            r.status === 'ok' ? (() => {
              r=r.data;
              this.SeasonSta=r;
              console.log(this.SeasonSta)
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
        this.$emit('ScheduleDetails','获取赛事详情头信息');
        this.$emit('ScheduleEvent','获取赛事详情事件');
        this.$emit('EventList','获取赛事事件列表');
        this.$emit('Statistics','获取赛事技术统计');
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
