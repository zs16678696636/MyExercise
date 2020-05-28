<template>
  <div class='container'>
    <zs-tree></zs-tree>
    <!-- <button @click="flage = !flage">点我</button>
    <transition name="box">
      <div class="box" v-show="flage"></div>
    </transition> -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      flage: false
    }
  },
  methods: {},
  filters: {},
  computed: {},
  components: {},
  watch: {},
  created () {}
}
</script>

<style lang="less" scoped>
.box {
  width: 200px;
  height: 200px;
  background-color: pink;
}
@keyframes aa {
  0% {
    height: 0;
  }
  100% {
    height: 200px;
  }
}
.box-enter-active {
  animation: aa 3s ease;
}
.box-leave-active {
  animation: aa 3s ease reverse;
}

// .container {
//   padding: 20px;
// }
</style>
