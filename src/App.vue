<template>
  <div id="app">
    <router-view></router-view>
    <zs-loading :show="$store.state.loading.loadingFlage"></zs-loading>
  </div>
</template>

<style lang="less">
html,body {
  height: 100%;
  width: 100%;
}
#app {
  width: 100%;
  height: 100%;
}
</style>
