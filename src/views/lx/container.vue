<template>
  <div class='container'>
    <zs-button @click="login" v-preventReClick>登录</zs-button>
    <zs-button @click="git" v-preventReClick>获取</zs-button>
    <zs-button @click="filter">浏览器</zs-button>
  </div>
</template>

<script>
import Utils from "../../assets/js/utils";
export default {
  data () {
    return {}
  },
  methods: {
    filter () {
      let aa = 0x11
      console.log(aa)
      // console.log(navigator);
    },
    login () {
      this.$ajax({
        url: '/api/login',
        method: 'post',
        data: {
          username: 'admin',
          password: '123456'
        }
      }).then(data => {
        if (data.data.meta.status === 200) {
          let token = data.data.data.token
          localStorage.setItem('token', token)
          console.log('登陆成功')
        }
      })
    },
    git () {
      this.$ajax({
        url: '/api/users',
        method: 'get',
        params: {
          pagenum: '1',
          pagesize: '6',
        },
        headers: {
          Authorization: localStorage.getItem('token')
        }
        // data: {
        //   username: 'admin',
        //   password: '123456'
        // }
      }).then(data => {
        console.log(data)
      })
      // .then(data => {
      //   let data1 = JSON.stringify(data.data)
      //   let data2 = Utils.encrypt(data1)
      //   console.log(data.data);
      //   console.log('加密后' + data2);
      //   let data3 = Utils.decrypt(data2)
      //   let data4 = JSON.parse(data3)
      //   console.log(data4);
      // })
    }
  },
  filters: {},
  computed: {},
  components: {},
  watch: {},
  created () {}
}
</script>

<style lang="less" scoped>

</style>
