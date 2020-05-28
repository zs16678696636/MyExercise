<template>
  <label class='zs-radio-container'>
    <span class="zs-radio-title">
      <slot></slot>
    </span>
    <input id="radio" type="radio" name="aa" :value="label" v-model="modeo">
  </label>
</template>

<script>
export default {
  name: 'zs-radio',
  inject: ['radioGroup'],
  props: {
    value: null,
    label: {
      type: Number || String || Boolean,
      default: ''
    }
  },
  data () {
    return {}
  },
  methods: {},
  filters: {},
  computed: {
    modeo: {
      get () {
        return this.radioGroup ? this.radioGroup.value : this.value
      },
      set (value) {
        return this.radioGroup ? this.radioGroup.$emit('input', value) : this.$emit('input', value)
      }
    }
  },
  components: {},
  watch: {},
  created () {
    console.log(this)
  }
}
</script>

<style lang="less" scoped>

</style>
