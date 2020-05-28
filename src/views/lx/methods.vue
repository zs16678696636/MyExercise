<template>
  <div class='container'>
    跳转任何链接和时间 <br/>
    <h1>{{date}}</h1>
    <button @click="click">点我</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      date: this.$date.dateFn('20190835').nyr
    }
  },
  methods: {
    click () {
      // let a = '/lx/button'
      // this.$link.link(a) 
      const codeArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
      const length = 16
      let code = ''
      for (let i = 0; i < length; i++) {
        let randomI = Math.floor(Math.random() * 62)
        code += codeArr[randomI]
      }
      console.log(code)
    }
  },
  filters: {},
  computed: {},
  components: {},
  watch: {},
  created () {
    var arr = [12, 34, 34, 342, 345, 34, 123, 345, 45, 12]
    var newArr = arr.reduce((prev, next) => {
      prev.indexOf(next) == -1 && prev.push(next)
      return prev
    }, [])
    console.log(arr)  // [12, 34, 34, 342, 345, 34, 123, 345, 45, 12]
    console.log(newArr) // [12, 34, 342, 345, 123, 45]
  }
}
</script>

<style lang="less" scoped>

</style>
