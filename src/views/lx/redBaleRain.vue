<template>
    <div class="RedBaleRain">
      <button @click="Start">点我</button>
      <div id="gold"></div>
      <div id="star"></div>
      <div id="redBale"></div>
    </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  computed: {},
  methods: {
    // 红包
    dynamic (left, height, src) {
      let div = document.createElement("div");
      let img = document.createElement("img");
      div.appendChild(img);
      img.src = src;
      div.style.left = left + "px";
      div.className = "redBale";
      img.addEventListener('click', (e) => {
        let srcLeft = require("../../assets/img/redBaleRain-on-left.png");
        let srcRight = require("../../assets/img/redBaleRain-on-right.png");
        let wdWidth = document.body.scrollWidth
        if (e.clientX < wdWidth/2) {
          e.toElement.src = srcRight
        } else {
          e.toElement.src = srcLeft
        }
        e.toElement.style.animation = 'imgShow 0.5s 1 linear forwards'
        e.toElement.style.marginLeft = -90 + 'px'
      })
      document.getElementById("redBale").appendChild(div);
      setTimeout(() => {
        document.getElementById("redBale").removeChild(div);
      }, 3000);
    },
    // -------------------
    // 流星
    dynamic2 (left, height, src) {
      let div = document.createElement("div");
      let img = document.createElement("img");
      div.appendChild(img);
      img.src = src;
      div.style.left = left + "px";
      div.className = "star";
      document.getElementById("star").appendChild(div);
      setTimeout(() => {
        document.getElementById("star").removeChild(div);
      }, 3000);
    },
    // ----------------------
    // 金币
    dynamic3 (left, height, src) {
      let div = document.createElement("div");
      let img = document.createElement("img");
      div.appendChild(img);
      img.src = src;
      div.style.left = left + "px";
      div.className = "gold";
      document.getElementById("gold").appendChild(div);
      setTimeout(() => {
        document.getElementById("gold").removeChild(div);
      }, 3000);
    },
    // 开始
    Start () {
      // 红包
      setInterval(() => {
        let left = Math.random() * document.body.scrollWidth - 55;
        let height = Math.random() * document.body.scrollHeight;
        if (left > document.body.scrollWidth - 110) {
          left = left - 55
        } else if (left < 0) {
          left = left + 55
        }
        let src = require("../../assets/img/redBaleRain-off.png");
        this.dynamic(left, height, src);
      }, 600);
      // -----------------
      // 流星
      setInterval(() => {
        let left = Math.random() * document.body.scrollWidth;
        let height = Math.random() * document.body.scrollHeight;
        let src = require("../../assets/img/redBaleRain-star.png");
        this.dynamic2(left, height, src);
      }, 800);
      // ----------------
      // 金币
      setInterval(() => {
        let left = Math.random() * document.body.scrollWidth - 21;
        let height = Math.random() * document.body.scrollHeight;
        if (left > document.body.scrollWidth - 51) {
          left = left - 21
        } else if (left < 0) {
          left = left + 21
        }
        let src = require("../../assets/img/redBaleRain-gold.png");
        this.dynamic3(left, height, src);
      }, 600);
    }
  },
  mounted(){}
}
</script>
<style lang='less'>
  .RedBaleRain {
    background-image: url('../../assets/img/redBaleRain-background.jpg');
    background-size: 100%;
    @keyframes redImg {
      0% {
          top:-100px;
      }
      100% {
          top: 200%;
      }
    }
    @keyframes redImg2 {
      0% {
        top: -20%;
        opacity: 1;
      }
      50% {
        opacity: 1;
      }
      100% {
        top: 100%;
        opacity: 0;
      }
    }
    @keyframes redImg3 {
      0% {
        top:-55px;
        opacity: 0;
      }
      50% {
        opacity: 1;
      }
      100% {
        top: 100%;
        opacity: 0;
      }
    }
    @keyframes imgShow {
      0% {
          opacity: 1;
      }
      100% {
          opacity: 0;
      }
    }
    #redBale {
      width: 100%;
      height: 100%;
      position: fixed;
    }
    #star {
      width: 100%;
      height: 70%;
      position: fixed;
      transform: rotate(45deg);
    }
    #gold {
      width: 100%;
      height: 100%;
      position: fixed;
    }
    .redBale {
      position: fixed;
      z-index: 10000;
      animation: redImg 4s 1 linear;
      -webkit-animation: redImg 4s 1 linear;
      -moz-animation: redImg 4s 1 linear;
      -ms-animation: redImg 4s 1 linear;
      -o-animation: redImg 4s 1 linear;
      img{
        display: block;
        height: 124px;
      }
    }
    .star {
      position: fixed;
      z-index: 999;
      animation: redImg2 2s 1 ease-out forwards;
      -webkit-animation: redImg2 2s 1 ease-out forwards;
      -moz-animation: redImg2 2s 1 ease-out forwards;
      -ms-animation: redImg2 2s 1 ease-out forwards;
      -o-animation: redImg2 2s 1 ease-out forwards;
      img{
        display: block;
        width: 18px;
      }
    }
    .gold {
      position: fixed;
      z-index: 999;
      animation: redImg3 3.5s 1 ease-out forwards;
      -webkit-animation: redImg3 3.5s 1 ease-out forwards;
      -moz-animation: redImg3 3.5s 1 ease-out forwards;
      -ms-animation: redImg3 3.5s 1 ease-out forwards;
      -o-animation: redImg3 3.5s 1 ease-out forwards;
      img{
        display: block;
        width: 51px;
      }
    }
  }
  
</style>