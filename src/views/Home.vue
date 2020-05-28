<template>
  <div class='container'>
    <router-link to="/lx/button" tag="button">按钮</router-link>
    <router-link to="/lx/dialog" tag="button">对话框.提示框</router-link>
    <router-link to="/lx/from" tag="button">表单系列</router-link>
    <router-link to="/lx/tree" tag="button">树状图</router-link>
    <router-link to="/lx/methods" tag="button">方法封装</router-link>
    <router-link to="/lx/container" tag="button">首页布局</router-link>
    <router-link to="/lx/turntable" tag="button">大转盘</router-link>
    <router-link to="/lx/redBaleRain" tag="button">红包雨</router-link>
    <router-link to="/lx/map" tag="button">百度地图</router-link>
    <router-link to="/lx/ccLx" tag="button">练习</router-link>
    <router-link to="/lx/canvas" tag="button">画布</router-link>
    <router-view class="view"></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {},
  filters: {},
  computed: {},
  components: {},
  watch: {},
  created () {}
}
</script>

<style lang="less">
  .container {
    width: 100%;
    height: 100%;
    .view {
      width: 100%;
      height: 95%;
      // background-color: #999;
    }
  }
</style>
