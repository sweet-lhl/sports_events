<template>
    <div id="worldCup">
      <header>
        <span class="pull-left icon icon-left"></span>
        <div class="title text-left">世界杯
          <div class="match-item">
            <span>赛季</span>
            <select>
              <option>2018</option>
              <option>2019</option>
              <option>2020</option>
              <option>2024</option>
            </select>
          </div>
        </div>
      </header>
      <content>
        <div class="flex-box classification align-between">
          <select>
            <option>分组赛</option>
            <option>分组</option>
            <option>组赛</option>
          </select>
          <div><span :class="[tabKey?'yellow':'blue']" @click.capture="tabKey=true">赛程赛果</span><span :class="[tabKey?'blue':'yellow']" @click.capture="tabKey=false">小组积分</span></div>
        </div>
        <div v-if="tabKey===true" class="raceResult">
            <table>
              <caption>【A】</caption>
              <!--表头-->
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
              <tr>
                <td><p>06-14</p>
                  <p>23:00</p></td>
                <td>未开</td>
                <td class="ellipsis">额诺斯</td>
                <td>VS</td>
                <td class="ellipsis">沙特忘啦博</td>
              </tr>
              <tr>
                <td><p>06-20</p>
                  <p>12:00</p></td>
                <td>未开</td>
                <td class="ellipsis">埃及</td>
                <td>VS</td>
                <td class="ellipsis">乌拉克</td>
              </tr>
              <tr>
                <td><p>06-14</p>
                  <p>23:00</p></td>
                <td>未开</td>
                <td class="ellipsis">额诺斯</td>
                <td>VS</td>
                <td class="ellipsis">沙特忘啦博沙特忘啦博</td>
              </tr>
              <tr>
                <td><p>06-20</p>
                  <p>12:00</p></td>
                <td>未开</td>
                <td class="ellipsis">埃及</td>
                <td>VS</td>
                <td class="ellipsis">乌拉克</td>
              </tr>
              </tbody>
            </table>
            <table>
              <caption>【B】</caption>
              <!--表头-->
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
              <tr>
                <td><p>06-14</p>
                  <p>23:00</p></td>
                <td>未开</td>
                <td class="ellipsis">额诺斯</td>
                <td>VS</td>
                <td class="ellipsis">沙特忘啦博</td>
              </tr>
              <tr>
                <td><p>06-20</p>
                  <p>12:00</p></td>
                <td>未开</td>
                <td class="ellipsis">埃及</td>
                <td>VS</td>
                <td class="ellipsis">乌拉克</td>
              </tr>
              <tr>
                <td><p>06-14</p>
                  <p>23:00</p></td>
                <td>未开</td>
                <td class="ellipsis">额诺斯</td>
                <td>VS</td>
                <td class="ellipsis">沙特忘啦博</td>
              </tr>
              </tbody>
            </table>
          </div>
        <div v-else class="raceResult">
            <table>
              <caption>【A组积分】</caption>
              <!--表头-->
              <thead>
              <tr>
                <th>排名</th>
                <th class="thead-ellipsis">赛</th>
                <th>胜</th>
                <th>平</th>
                <th>负</th>
                <th>得</th>
                <th>失</th>
                <th>净</th>
                <th>积</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>1</td>
                <td class="ellipsis">埃及</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
              </tr>
              <tr>
                <td>1</td>
                <td class="ellipsis">俄罗斯</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
              </tr>
              <tr>
                <td>1</td>
                <td class="ellipsis">沙特阿拉伯</td>
                <td>32</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>32</td>
              </tr>
              <tr class="ellipsis">
                <td>1</td>
                <td>埃及</td>
                <td>0</td>
                <td>0</td>
                <td>3</td>
                <td>0</td>
                <td>56</td>
                <td>0</td>
                <td>0</td>
              </tr>
              </tbody>
            </table>
            <table>
              <caption>【B组积分】</caption>
              <!--表头-->
              <thead>
              <tr>
                <th>排名</th>
                <th class="thead-ellipsis">赛</th>
                <th>胜</th>
                <th>平</th>
                <th>负</th>
                <th>得</th>
                <th>失</th>
                <th>净</th>
                <th>积</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>1</td>
                <td class="ellipsis">埃及</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
              </tr>
              <tr>
                <td>1</td>
                <td class="ellipsis">沙特阿拉伯是开了</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
              </tr>
              <tr>
                <td>1</td>
                <td class="ellipsis">埃及</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
              </tr>
              <tr>
                <td>1</td>
                <td class="ellipsis">埃及</td>
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
      </content>
      <my-footer></my-footer>
    </div>
</template>

<script>
    export default {
        name: "world-cup",
      data() {
        return {
          msg: 'Welcome to Your Vue.js App',
          tabKey:true,//切换
        }
      }
    }
</script>

<style scoped>

</style>
