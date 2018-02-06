<template>
    <div id="set-up">
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
            <div class="head_nav_up"><img src="../assets/images/img01.png"></div>
          </div>
        </div>

      </div>
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
            <div class="setup_list_right"><span><input type="checkbox" name=""></span></div>
            <div class="clear"></div>
          </div>
          <div class="setup_list">
            <div class="setup_list_left">排名提示</div>
            <div class="setup_list_right"><span><input type="checkbox" name=""></span></div>
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
</template>

<script>
    export default {
        name: "set-up"
    }
</script>

<style scoped>

</style>
