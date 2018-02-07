<template>
    <div id="data-ceania">
      <header>
        <span class="pull-left icon icon-left"></span>
        <h1 class="title text-center">足球资料库</h1>
      </header>
      <content>
        <div class="cont-search flex-box">
          <input type="text" placeholder="请输入国家或者联赛名称搜索">
          <div class="icon icon-search text-center">搜索</div>
        </div>
        <div class="flex-box col-2 text-center cont-naw">
          <div :class="[tabKey===''?'active':'']" @click.capture="tabKey=''">国际</div>
          <div :class="[tabKey===1?'active':'']" @click.capture="tabKey=1">欧洲</div>
          <div :class="[tabKey===2?'active':'']" @click.capture="tabKey=2">美洲</div>
          <div :class="[tabKey===3?'active':'']" @click.capture="tabKey=3">亚洲</div>
          <div :class="[tabKey===4?'active':'']" @click.capture="tabKey=4">大洋洲</div>
          <div :class="[tabKey===5?'active':'']" @click.capture="tabKey=5">非洲</div>
        </div>
        <div>
          <ul v-if="tabKey===''" class="con-list">
            <li @click.capture="$router.push({path:'/dataInternational'})">阿尔及利亚</li>
            <li>埃及</li>
            <li>陌路哥</li>
            <li>突尼斯</li>
            <li>利比亚</li>
            <li>尼日利亚</li>
            <li>南非</li>
            <li>安哥拉</li>
            <li>基纳</li>
            <li>苏丹</li>
            <li>非洲赛事</li>
            <li>阿尔及利亚</li>
            <li>埃及</li>
            <li>陌路哥</li>
            <li>突尼斯</li>
            <li>利比亚</li>
            <li>尼日利亚</li>
            <li>南非</li>
            <li>安哥拉</li>
            <li>基纳</li>
            <li>苏丹</li>
            <li>非洲赛事</li>
            <li>阿尔是的骄傲是打飞机及利亚</li>
            <li>埃及</li>
            <li>陌路哥</li>
            <li>突尼斯</li>
            <li>利比亚</li>
            <li>尼日利亚</li>
            <li>南非</li>
            <li>安哥拉</li>
            <li>基纳</li>
            <li>苏丹</li>
            <li>非洲赛事</li>
          </ul>
          <ul v-if="tabKey===1" class="con-list">
            <li>阿尔及利亚</li>
            <li>阿尔是的骄傲是打飞机及利亚</li>
            <li>埃及</li>
            <li>陌路哥</li>
            <li>突尼斯</li>
            <li>利比亚</li>
            <li>尼日利亚</li>
            <li>南非</li>
            <li>安哥拉</li>
            <li>基纳</li>
            <li>苏丹</li>
            <li>非洲赛事</li>
          </ul>
          <ul v-if="tabKey===2" class="con-list">
            <li>阿尔及利亚</li>
            <li>阿尔是的骄傲是打飞机及利亚</li>
            <li>埃及</li>
            <li>阿尔及利亚</li>
            <li>阿尔是的骄傲是打飞机及利亚</li>
            <li>埃及</li>
            <li>阿尔及利亚</li>
            <li>阿尔是的骄傲是打飞机及利亚</li>
            <li>埃及</li>
            <li>阿尔及利亚</li>
            <li>阿尔是的骄傲是打飞机及利亚</li>
            <li>埃及</li>
            <li>陌路哥</li>
          </ul>
          <ul v-if="tabKey===4" class="con-list">
            <li>阿尔及利亚</li>
            <li>阿尔是的骄傲是打飞机及利亚</li>
            <li>埃及</li>
            <li>陌路哥</li>
          </ul>
          <ul v-if="tabKey===5" class="con-list">
            <li>阿尔及利亚</li>
            <li>lala</li>
            <li>埃及</li>
            <li>陌路哥</li>
            <li>lala</li>
            <li>埃及</li>
            <li>陌路哥</li>
            <li>lala</li>
            <li>埃及</li>
            <li>陌路哥</li>
          </ul>
          <ul v-if="tabKey===6" class="con-list">
            <li>阿尔及利亚</li>
            <li>阿尔是的骄傲是打飞机及利亚</li>
            <li>埃及</li>
            <li>陌路哥</li>
            <li>突尼斯</li>
            <li>利比亚</li>
            <li>尼日利亚</li>
            <li>南非</li>
            <li>安哥拉</li>
            <li>基纳</li>
            <li>苏丹</li>
            <li>非洲赛事</li>
          </ul>
        </div>
      </content>
      <my-footer></my-footer>
    </div>
</template>

<script>
    export default {
        name: "data-ceania",
      data() {
        return {
          tabKey: '',
          isTab:'',
        }
      },
      computed: {

      },
      watch: {
        ['tabKey'](...e) {
          e[0] !== e[1] ? (() => {

          })() : null
        }
      },
      created() {//创建完成

      },
      mounted() {//组件渲染完成

      },
      methods: {//事件
        linkTo_c() {

        },
      }
    }
</script>

<style scoped>

</style>
