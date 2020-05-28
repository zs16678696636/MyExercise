<template>
  <div class='turntable'>
    <div class="box">
      <div class="kuang">
        <div :class="{'jpbj': true, 'bj2': index === 1}">
          <img src="../../assets/img/lotteryNew-prize-9.png" alt="">
        </div>
        <div :class="{'jpbj': true, 'bj2': index === 2}">
          <img src="../../assets/img/lotteryNew-prize-10.png" alt="">
        </div>
        <div :class="{'jpbj': true, 'bj2': index === 3}">
          <img src="../../assets/img/lotteryNew-prize-11.png" alt="">
        </div>
        <div :class="{'jpbj': true, 'bj2': index === 8}">
          <img src="../../assets/img/lotteryNew-prize-12.png" alt="">
        </div>
        <div class="jpbj" @click="fangchong">
          <img src="../../assets/img/kscj.png" alt="">
        </div>
        <div :class="{'jpbj': true, 'bj2': index === 4}">
          <img src="../../assets/img/lotteryNew-prize-1.png" alt="">
        </div>
        <div :class="{'jpbj': true, 'bj2': index === 7}">
          <img src="../../assets/img/lotteryNew-prize-3.png" alt="">
        </div>
        <div :class="{'jpbj': true, 'bj2': index === 6}">
          <img src="../../assets/img/lotteryNew-prize-8.png" alt="">
        </div>
        <div :class="{'jpbj': true, 'bj2': index === 5}">
          <img src="../../assets/img/lotteryNew-prize-4.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      index: 0,
      flg: 1000,
      flg2: 1,
      flg3: true,
      flg4: 0,
      flg5: true
    }
  },
  methods: {
    random () {
      let nb = Math.random() * 10
      let str = nb + ''
      let str2 = str.substr(0, 1)
      let nb2 = +str2
      if (nb2 === 0) {
        nb2 = 1
      } else if (nb2 === 9) {
        nb2 = 8
      }
      this.flg4 = nb2
    },
    zhuan () {
      this.flg5 = false
      this.index +=1
      if (this.index > 8) {
        this.index = 1
      }
      if (this.flg > 100 && this.flg3) {
        this.flg-=100 
        this.ok()
      } else {
        this.flg3 = false
        this.flg2++
        if (this.flg2 < 20) {
          this.ok()
        } else {
          this.flg+=100 
          if (this.flg < 500) {
            this.ok()
          } else if (this.index !== this.flg4) {
            this.ok()
          } else {
            this.flg = 1000,
            this.flg2 = 1,
            this.flg3 = true,
            this.flg5 = true
          }
        }
      }
    },
    ok () {
      setTimeout(this.zhuan, this.flg);
    },
    fangchong () {
      if (this.flg5) {
        this.index = 0
        this.zhuan()
        this.random()
      } else {
        this.$message('请勿重复点击');
      }
    }
  },
  filters: {},
  computed: {},
  components: {},
  watch: {},
  created () {}
}
</script>

<style lang="less">
  .turntable {
    .box {
      margin: 10px auto;
      width: 750px/2;
      height: 1334px/2;
      background-image: url('../../assets/img/lottery-october-bg-raffle-creditCard2.png');
      background-size: 100% 100%;
      padding-top: 20px;
      .kuang {
        margin: 10px auto;
        width: 643px/2;
        height: 554px/2;
        background-image: url('../../assets/img/kuang.png');
        background-size: 100% 100%;
        margin-top: 300px;
        padding: 20px 20px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        .jpbj {
          width: 181px/2;
          height: 148px/2;
          background-image: url('../../assets/img/weixuanzhong.png');
          background-size: 100% 100%;
          overflow: hidden;
          img {
            display: block;
            margin: 0 auto;
            margin-left: -7px;
          }
        }
        .bj2 {
          background-image: url('../../assets/img/xuanzhong.png');
        }
        .jpbj:nth-of-type(5) {
          cursor: pointer;
          img {
            width: 100%;
            height: 100%;
            margin-left: 0px;
            margin-top: 0px;
          }
        }
      }
    }
  }
</style>
