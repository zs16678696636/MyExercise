const state = {
  name: ''
}
const mutations = {
  namesj(state, value) {
    state.name = value
  }
}
const getters = {
  // 用法1-正常用法
  namegt (state, getters) {
    if (state.name === 'zs') {
      return '男'
    } else {
      return '女'
    }
  }, // this.$store.getters.namegt
  // 用法2-传参用法
  namegt2 : state => value => {
    if (state.name === 'zs') {return '男'} else {
      return value
    } // this.$store.getters.namegt2('女')
  }
}
export default { state, mutations, getters}