<template>
  <div class="zs-input-container">
    <label>
      <span class="zs-input-title" v-if="title">{{title}}</span>
      <span v-if="title">: </span>
      <input 
      class="zs-input"
      :class="{'zs-input-disabled': disabled, 'zs-input-pd': clearable || passwordShow}"
      :style="{width, height}"
      ref="zsInput"
      :type="passwordShow ? (passwordFlag ? 'text' : 'password') : type"
      @focus="focus"
      @blur="blur"
      :value="value"
      @input="inputc"
      :disabled="disabled"
      :readonly="readonly"
      :maxlength="maxlength"
      :placeholder="placeholder">
      <span class="zs-input-icon">
        <i class="iconfont iconRectangleCopy" v-if="clearable && type === 'text' && value !== ''" @click="zsInputClearable"></i>
        <i class="iconfont iconyanjing" :class="{'pwdIColor': this.passwordFlag}" v-if="passwordShow && type === 'password' && value !== ''" @click="zsInputPasswordShow"></i>
      </span>
    </label>
  </div>
</template>

<script>
export default {
  name: 'zs-input',
  props: {
    value: [String, Number],
    // 输入框属性
    type: {
      type: String,
      default: 'text'
    },
    // 禁用
    disabled: {
      type: Boolean,
      default: false
    },
    // 只读
    readonly: {
      type: Boolean,
      default: false
    },
    // 标题
    title: {
      type: String,
      default: ''
    },
    // 最长
    maxlength: {
      type: String,
      default: ''
    },
    // 占位符
    placeholder: {
      type: String,
      default: ''
    },
    // 可清空
    clearable: {
      type: Boolean,
      default: false
    },
    // 密码显示隐藏
    passwordShow: {
      type: Boolean,
      default: false
    },
    width: {
      type: String,
      default: '380px'
    },
    height: {
      type: String,
      default: '40px'
    },
    borderColor: {
      type: String,
      default: '#409eff'
    },
  },
  data () {
    return {
      passwordFlag: false
    }
  },
  methods: {
    focus () {
      this.$refs.zsInput.style.borderColor = this.borderColor
    },
    blur () {
      this.$refs.zsInput.style.borderColor = '#dcdfe6'
    },
    inputc (e) {
      this.$emit('input', e.target.value)
    },
    zsInputClearable () {
      this.$emit('input', '')
    },
    zsInputPasswordShow () {
      this.passwordFlag = !this.passwordFlag
    }
  },
  filters: {},
  computed: {},
  components: {},
  created () {}
}
</script>

<style lang="less" scoped>
.zs-input-container {
  .zs-input {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    padding: 0 15px;
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
  }
  .zs-input-disabled:hover {
    cursor: not-allowed;
  }
  .iconRectangleCopy {
    width: 20px;
    height: 20px;
    border-radius: 50%;
  }
  .zs-input:focus {
    outline: none;
  }
  .zs-input-icon {
    i {
      margin-left: -20px;
      font-size: inherit;
      color: #606266;
    }
    i:hover {
      color: #409eff;
      border-color: #409eff;
      cursor: pointer;
    }
    .pwdIColor {
      color: #409eff;
      border-color: #409eff;
    }
  }
  .zs-input-pd {
    padding-right: 20px;
  }
}
</style>
