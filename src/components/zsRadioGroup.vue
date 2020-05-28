<template>
  <div class='zs-radio-group-container'>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'zs-radio-group',
  provide () {
    return {
      radioGroup: this
    }
  },
  props: {
    value: null
  },
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

<style lang="less" scoped>

</style>
