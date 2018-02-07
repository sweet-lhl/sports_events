<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  updated() {
    let number = 1;
    try {
      document.title = document.querySelector('header>.title').innerText;//全局标题处理机制
      document.querySelector('.pull-left') !== null ? (//全局返回處理機制
        document.querySelector('.pull-left').addEventListener('click', () => {
          console.log('back watched!');
          this.$router.back();
        })) : null;
    } catch (error) {
      console.info('error<==title/pull-left');
      console.warn(error)
    } finally {
      console.log(`操作次数：${number}`);
      number++
    }

  },
}
</script>

<style lang="scss">
  @import "./assets/style/base.css"; /*css base*/
  @import "./assets/style/main.css"; /*css main*/
  @import "./assets/style/style.css"; /*css style*/
</style>
