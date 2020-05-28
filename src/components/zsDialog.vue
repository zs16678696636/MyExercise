<template>
  <transition name="dialog-mobile">
    <div class='zs-dialog' v-show="data" @click.self="dialogHide">
      <div class="zs-dialog-box" :style="{width, marginTop}">
        <header class="zs-dialog-header">
          <span v-if="title">{{title}}</span>
          <i class="iconfont iconclose" @click="dialogHide"></i>
        </header>
        <main class="zs-dialog-body" :style="{height}">
          <slot></slot>
        </main>
        <footer class="zs-dialog-footer" v-if="this.$slots.footer">
          <slot name="footer"></slot>
        </footer>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'zs-dialog',
  props: {
    // 显示隐藏
    data: {
      type: Boolean,
      default: false
    },
    // 提示
    title: {
      type: String,
      default: ''
    },
    // 宽
    width: {
      type: String,
      default: ''
    },
    height: {
      type: String,
      default: ''
    },
    // 上边距
    marginTop: {
      type: String,
      default: '10%'
    }
  },
  data () {
    return {}
  },
  methods: {
    dialogHide () {
      console.log(this.$slots)
      this.$emit('update:data', false)
    }
  },
  filters: {},
  computed: {},
  components: {},
  watch: {
    data (Rear, before) {
      if (this._events.show) {
        if (Rear) {
          this.$emit('show')
        }
      }
      if (this._events.hiden) {
        if (!Rear) {
          this.$emit('hiden')
        }
      }
    }
  },
  created () {}
}
</script>

<style lang="less" scoped>
.zs-dialog {
  position: fixed;
  top: 0;
  left: 0;
  bottom: -20px;
  right: 0;
  overflow-y: scroll;
  background-color: red;
  z-index: 999;
  background: rgba(0,0,0,0.5);
  padding-bottom: 20px;
  .zs-dialog-box {
    background-color: #fff;
    opacity: 1;
    position: relative;
    margin-left: 50%;
    transform: translate(-50%);
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
    padding-bottom: 10px;
    .zs-dialog-header {
      padding: 15px;
      padding-bottom: 10px;
      margin: 0;
      overflow: hidden;
      span {
        font-size: 18px;
        color: #303133;
        font-weight: 400;
        float: left;
      }
      .iconclose {
        float: right;
        font-size: 12px;
        color: #999;
        font-weight: 400;
      }
      .iconclose:hover {
        color: #409eff;
        cursor: pointer;
      }
    }
    .zs-dialog-body {
      width: 90%;
      padding: 30px 3%;
      color: #606266;
      font-size: 14px;
      overflow-y: scroll;
    }
    .zs-dialog-body::-webkit-scrollbar {
      display: none;
    }
    .zs-dialog-footer {
      width: 100%;
      padding: 10px 15px 0;
      text-align: right;
      box-sizing: border-box;
    }
  }
}
.zs-dialog::-webkit-scrollbar {
  display: none;
}
@keyframes mobile {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}
.dialog-mobile-enter-active {
  animation: mobile .3s;
}
.dialog-mobile-leave-active {
  animation: mobile .3s reverse;
}
</style>
