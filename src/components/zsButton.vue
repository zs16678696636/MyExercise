<template>
  <button
  :class="[`zs-button-${type}`, {'is-plain': plain}, {'is-disabled': disabled}]"
  :style="{width, height, marginLeft, marginTop, marginRight, marginBottom}"
  :disabled="disabled"
  @click="btnClick">
    <i class="iconfont iconback" v-if="iconLeft"></i>
    <slot></slot>
    <i class="iconfont iconjf-row" v-if="iconRight"></i>
  </button>
</template>

<script>
export default {
  name: 'zs-button',
  props: {
    // 按钮风格 default 默认 danger 警告 primary 主要
    type: {
      type: String,
      default: 'default'
    },
    // 是否是朴素风格
    plain: {
      type: Boolean,
      default: false
    },
    // 是否禁用
    disabled: {
      type: Boolean,
      default: false
    },
    // 宽度
    width: {
      type: String,
      default: ''
    },
    // 高度
    height: {
      type: String,
      default: ''
    },
    // 左边距
    marginLeft: {
      type: String,
      default: ''
    },
    // 上边距
    marginTop: {
      type: String,
      default: ''
    },
    // 右边距
    marginRight: {
      type: String,
      default: ''
    },
    // 下边距
    marginBottom: {
      type: String,
      default: ''
    },
    // 左箭头
    iconLeft: {
      type: Boolean,
      default: false
    },
    // 右箭头
    iconRight: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    btnClick () {
      this.$emit('click')
    }
  }
}
</script>

<style lang="less" scoped>
  button {
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #fff;
    border: 1px solid #dcdfe6;
    border-color: #dcdfe6;
    color: #606266;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    transition: .1s;
    font-weight: 500;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;
    position: relative;
    &.is-disabled {
      color: #c0c4cc;
      cursor: not-allowed;
      background-image: none;
      background-color: #fff;
      border-color: #ebeef5;
    }
    .iconback {
      position: absolute;
      left: 4px;
      top: 10.5px;
    }
    .iconjf-row {
      position: absolute;
      right: 4px;
      top: 10.5px;
    }
  }
  // 默认按钮
  .zs-button-default:hover {
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
    &.is-disabled {
      color: #c0c4cc;
      background-image: none;
      background-color: #fff;
      border-color: #ebeef5;
    }
    &.is-plain {
      color: #409eff;
      background: #fff;
      border-color: #409eff;
      &.is-disabled {
        color: #c0c4cc;
        background-image: none;
        background-color: #fff;
        border-color: #ebeef5;
      }
    }
  }
  .zs-button-default:active {
    border-color: #409eff;
    &.is-disabled {
      color: #c0c4cc;
      background-image: none;
      background-color: #fff;
      border-color: #ebeef5;
    }
    &.is-plain {
      color: rgba(58, 142, 230);
      background: #fff;
      border-color: rgba(58, 142, 230);
      &.is-disabled {
        color: #c0c4cc;
        background-image: none;
        background-color: #fff;
        border-color: #ebeef5;
      }
    }
  }
  // 警告按钮
  .zs-button-danger {
    background-color: #f56c6c;
    border-color: #f56c6c;
    color: #fff;
    &.is-disabled {
      color: #fff;
      background-color: rgba(250, 182, 182);
      border-color: rgba(250, 182, 182);
    }
    &.is-plain {
      color: #f56c6c;
      background: #fef0f0;
      border-color: #fbc4c4;
      &.is-disabled {
        color: #f9a7a7;
        background-color: #fef0f0;
        border-color: #fde2e2;
      }
    }
  }
  .zs-button-danger:hover {
    background: #f78989;
    border-color: #f78989;
    &.is-disabled {
      color: #fff;
      background-color: rgba(250, 182, 182);
      border-color: rgba(250, 182, 182);
    }
    &.is-plain {
      background: #f56c6c;
      border-color: #f56c6c;
      color: #fff;
      &.is-disabled {
        color: #f9a7a7;
        background-color: #fef0f0;
        border-color: #fde2e2;
      }
    }
  }
  .zs-button-danger:active {
    color: #fff;
    background: rgba(221, 97, 97);
    border-color: #f56c6c;
    &.is-disabled {
      color: #fff;
      background-color: rgba(250, 182, 182);
      border-color: rgba(250, 182, 182);
    }
    &.is-plain {
      color: #fff;
      background: rgba(221, 97, 97);
      border-color: #f56c6c;
      &.is-disabled {
        color: #f9a7a7;
        background-color: #fef0f0;
        border-color: #fde2e2;
      }
    }
  }
  // 主要按钮
  .zs-button-primary {
    color: #fff;
    background-color: #409eff;
    border-color: #409eff;
    &.is-disabled {
      color: #fff;
      background-color: #a0cfff;
      border-color: #a0cfff;
    }
    &.is-plain {
      color: #409eff;
      background: #ecf5ff;
      border-color: #b3d8ff;
      &.is-disabled {
        color: #8cc5ff;
        background-color: #ecf5ff;
        border-color: #d9ecff;
      }
    }
  }
  .zs-button-primary:hover {
    background: #66b1ff;
    border-color: #66b1ff;
    &.is-disabled {
      color: #fff;
      background-color: #a0cfff;
      border-color: #a0cfff;
    }
    &.is-plain {
      color: #fff;
      background-color: #409eff;
      border-color: #409eff;
      &.is-disabled {
        color: #8cc5ff;
        background-color: #ecf5ff;
        border-color: #d9ecff;
      }
    }
  }
  .zs-button-primary:active {
    color: #fff;
    background: rgba(58, 142, 230);
    border-color: #409eff;
    &.is-disabled {
      color: #fff;
      background-color: #a0cfff;
      border-color: #a0cfff;
    }
    &.is-plain {
      color: #fff;
      background: rgba(58, 142, 230);
      border-color: #409eff;
      &.is-disabled {
        color: #8cc5ff;
        background-color: #ecf5ff;
        border-color: #d9ecff;
      }
    }
  }
</style>
