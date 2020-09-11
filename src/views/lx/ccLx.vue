<template>
  <div class='ccLx'>
    <button @click="lx">dianwo</button>
    <div class="father">
      <div class="son"></div>
      <div class="son"></div>
      <div class="son3"></div>
      <!-- <div class="son4"></div> -->
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    lx () {
      let aa = new Image()
      aa.src = '../../assets/img/kscj.png'
      let son = document.querySelector('.son')
      son.innerHTML = aa
      console.dir(aa)
    }
  },
  filters: {},
  computed: {},
  components: {},
  watch: {},
  mounted () {}
}
</script>

<style lang="less" scoped>
.ccLx {
  .father {
    margin-left: 10px;
    width: 600px;
    height: 500px;
    background-color: rgba(122, 233, 145);
    display: grid;
    // place-items: center; // 水平垂直居中
    // grid-template-columns: 250px repeat(2, 1fr) 50px;
    // grid-column-gap: 10px;
    display: grid;
    // flex-direction: column;
    grid-template-rows: auto 1fr auto;
    .son {
      height: 100px;
      width: 100%;
      background-color: rgba(191, 246, 214);
    }
    .son2 {
      // flex: 1 0 auto;
      // height: 100px;
      width: 100%;
      background-color: rgb(12, 29, 19);
    }
    .son3 {
      height: 100px;
      width: 100%;
      background-color: rgb(35, 122, 71);
    }
    .son4 {
      height: 100px;
      width: 100%;
      background-color: rgb(34, 243, 121);
    }
  }
}
</style>
