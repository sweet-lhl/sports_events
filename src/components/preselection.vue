<template>
    <div id="preselection">
      <header>
        <span class="pull-left icon icon-left"></span>
        <div class="title text-left">世界杯欧洲区预选赛
          <div class="match-item">
            <span>赛季</span>
            <select>
              <option>2014-2015</option>
              <option>2015-2016</option>
              <option>2019-2020</option>
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
          <div><span class="blue">赛程赛果</span></div>
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
            <tr>
              <td><p>06-14</p>
                <p>23:00</p></td>
              <td class="td-red">完场</td>
              <td class="ellipsis">额诺斯</td>
              <td><span class="td-red">4:1</span><span class="td-blue">(3:1)</span></td>
              <td class="ellipsis">沙特忘啦博</td>
            </tr>
            <tr>
              <td><p>06-20</p>
                <p>12:00</p></td>
              <td class="td-red">完场</td>
              <td class="ellipsis">埃及</td>
              <td><span class="td-red">4:1</span><span class="td-blue">(3:1)</span></td>
              <td class="ellipsis">乌拉克</td>
            </tr>
            <tr>
              <td><p>06-14</p>
                <p>23:00</p></td>
              <td class="td-red">完场</td>
              <td class="ellipsis">额诺斯</td>
              <td><span class="td-red">4:1</span><span class="td-blue">(3:1)</span></td>
              <td class="ellipsis">沙特忘啦博沙特忘啦博</td>
            </tr>
            <tr>
              <td><p>06-20</p>
                <p>12:00</p></td>
              <td class="td-red">完场</td>
              <td class="ellipsis">埃及</td>
              <td><span class="td-red">4:1</span><span class="td-blue">(3:1)</span></td>
              <td class="ellipsis">乌拉克</td>
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
        name: "preselection"
    }
</script>

<style scoped>

</style>
