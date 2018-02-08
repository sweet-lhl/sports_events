<template>
    <div id="set-up">
      <mainNavigation></mainNavigation>
      <div class="setUP">
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
  .setUP{
    position: absolute;
    top: 3.75rem;
    right: 0;
    left: 0;
    bottom: 6rem;
  }
  #my-footer{
    position: absolute;
    right: 0;
    left: 0;
    bottom:0;
  }
</style>
