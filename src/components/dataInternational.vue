<template>
    <div id="dataInternational">
      <header>
        <span class="pull-left icon icon-left"></span>
        <h1 class="title text-center">国际赛事赛事资料库</h1>
      </header>
      <content>
        <div class="international">
          <p class="flex-box col-2" @click.capture="$router.push({path:'/england'})">
            <span class="text-left">世界杯</span>
            <span class="text-right icon icon-right"> </span>
          </p>
          <p class="flex-box col-2" @click.capture="$router.push({path:'/worldCup'})">
            <span class="text-left">世界杯欧洲区预选赛</span>
            <span class="text-right icon icon-right"> </span>
          </p>
          <p class="flex-box col-2" @click.capture="$router.push({path:'/preselection'})">
            <span class="text-left">世界杯欧洲区预选赛</span>
            <span class="text-right icon icon-right"> </span>
          </p>
          <p class="flex-box col-2">
            <span class="text-left">世界杯欧洲区预选赛</span>
            <span class="text-right icon icon-right"> </span>
          </p>
          <p class="flex-box col-2">
            <span class="text-left">世界杯欧洲区预选赛</span>
            <span class="text-right icon icon-right"> </span>
          </p>
        </div>
      </content>
      <my-footer></my-footer>
    </div>
</template>

<script>
    export default {
        name: "data-international"
    }
</script>

<style scoped>

</style>
