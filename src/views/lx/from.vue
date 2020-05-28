<template>
  <div class='container'>
    <main>
      <zs-input title="禁用" class="input" type='text' v-model="inputData" disabled></zs-input><br/>
      <zs-input passwordShow title="密码框" class="input" type='password' v-model="inputData"></zs-input>
      <zs-input clearable placeholder='占位符' title="文本框" class="input" v-model="inputData"></zs-input>
    </main>
    <main>
      <zs-swich></zs-swich>
    </main>
    <!-- <main>
      <zs-radio v-model="radioData" :label="1">选项一</zs-radio>
      <zs-radio v-model="radioData" :label="2">选项二</zs-radio>
    </main> -->
    <main>
      <zs-radio-group v-model="radioData">
        <zs-radio :label="1">选项一</zs-radio>
        <zs-radio :label="2">选项二</zs-radio>
      </zs-radio-group>
    </main>
  </div>
</template>

<script>
export default {
  data () {
    return {
      inputData: '',
      radioData: 1
    }
  },
  methods: {},
  filters: {},
  computed: {},
  components: {},
  watch: {
    radioData (a, b) {
      console.log(a)
    }
  },
  created () {
    let aa = this.$route.params
    console.log(aa)
  }
}
</script>

<style lang="less" scoped>
  main {
    padding-left: 20px;
    padding-top: 20px;
  }
</style>
