<template>
  <div class='canvas'>
    <canvas id="canvas1" width="600" height="600"><p>你的浏览器不支持Canvas</p></canvas>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    // 画一个边框
    bianKuang () {
      let canvas1 = document.getElementById('canvas1') // 1--获取
      let pen1 = canvas1.getContext('2d') // 2--创建一个画笔
      // 画一个正方形边框
      pen1.strokeStyle = '#000';      // 1--选择边框颜色
      pen1.lineWidth = 1;             // 2--边框宽度
      pen1.strokeRect(10,10,300,300);   // 创建边框 x,y,w,h
    },
    // 画一个填充颜色的矩形
    juXing () {
      let canvas1 = document.getElementById('canvas1') // 1--获取
      let pen1 = canvas1.getContext('2d') // 2--创建一个画笔
      // 画一个矩形并填充颜色
      pen1.fillStyle = '#999';        // 1--选择填充颜色 备注：必须先选择颜色再开始画
      pen1.fillRect(0, 0, 300, 300);  // 2--画一个矩形 x,y,w,h
      pen1.clearRect(300-175, 300-175, 50, 50); // 3--清除矩形范围内某部分内容 值可用+-算法
    },
    // 画一个移动的矩形
    yiDong () {
      let canvas1 = document.getElementById('canvas1') // 1--获取
      let pen1 = canvas1.getContext('2d') // 2--创建一个画笔
      let x = 0
      let flage = true
      setInterval(() => {
        pen1.clearRect(0,0,600,600)
        if (x === 0) {
          flage = true
        }
        if (x === 300) {
          flage = false
        }
        if (flage) {
          x+=10
        } else {
          x-=10
        }
        pen1.fillRect(x, 0, 100, 80)
      }, 10)
    },
    // 写文本
    wenBen () {
      let canvas1 = document.getElementById('canvas1') // 1--获取
      let pen1 = canvas1.getContext('2d') // 2--创建一个画笔
      pen1.textBaseline = 'top'  // 基准线（默认值）
      pen1.font = '12px sans-serif'
      pen1.fillText('asdasdasda',100,0);
      pen1.strokeText('asdasdas',200,0)
    },
    // 画一个圆
    yuan () {
      let canvas1 = document.getElementById('canvas1') // 1--获取
      let pen1 = canvas1.getContext('2d') // 2--创建一个画笔
      // 画一个正方形边框
      pen1.strokeStyle = 'red';      // 1--选择边框颜色
      pen1.lineWidth = 1;             // 2--边框宽度
      let x = 20;
      let y = 20;
      let w = 205;
      let h = 200;
      let r = 100;
      pen1.moveTo(x, y + r);
      pen1.arcTo(x, y, x + w, y, r);
      pen1.arcTo(x + w, y, x + w, y + h, r);
      pen1.arcTo(x + w, y + h, x, y + h, r);
      pen1.arcTo(x, y + h, x, y, r);
      pen1.closePath(); // 闭合曲线
      pen1.stroke(); // 画圆
    },
    // 折线图
    zheXianTu () {
      let myCanvas = document.querySelector('canvas');
      let ctx = myCanvas.getContext('2d');
      //构造函数
      let lineChart = function (ctx) {
        this.ctx = ctx || document.querySelector('canvas').getContext('2d');
        this.canvasWidth = this.ctx.canvas.width;
        console.log(this.ctx)
        this.canvasHeight = this.ctx.canvas.height;
        //网格大小
        this.gridSize = 10;
        //坐标系的间距
        this.space = 20;
        //箭头大小
        this.arrowSize = 10;
        //原点
        this.x0 = this.space;
        this.y0 = this.canvasHeight-this.space;
        //绘制点
        this.dottedSize = 6;
        // 点的坐标——和数据有关系，数据可视化
      };
      console.log(lineChart)
      lineChart.prototype.drawGrid = function () {
        //x的线
        let xLineTotal = Math.floor(this.canvasHeight/this.gridSize);
        for (let i = 0; i <= xLineTotal; i++) {
          this.ctx.beginPath();
          this.ctx.moveTo(0,i*this.gridSize-0.5);
          this.ctx.lineTo(this.canvasWidth,i*this.gridSize-0.5);
          this.ctx.strokeStyle='#eee';
          this.ctx.stroke();
        }
        //y方向的
        let yLineTotal = Math.floor(this.canvasWidth/this.gridSize);
        for (let i = 0; i <= yLineTotal; i++){
          this.ctx.beginPath();
          this.ctx.moveTo(i*this.gridSize-0.5,0);
          this.ctx.lineTo(i*this.gridSize-0.5,this.canvasHeight);
          this.ctx.strokeStyle='#eee';
          this.ctx.stroke();
        }
      };
      //绘制坐标系
      lineChart.prototype.drawAxis=function () {
        //x轴
        this.ctx.beginPath();
        this.ctx.strokeStyle = '#000';
        this.ctx.moveTo(this.x0,this.y0);
        this.ctx.lineTo(this.canvasWidth-this.space, this.y0);
        //画箭头
        this.ctx.lineTo(this.canvasWidth - this.space - this.arrowSize, this.y0 + this.arrowSize / 2);
        this.ctx.lineTo(this.canvasWidth - this.space - this.arrowSize, this.y0 - this.arrowSize / 2);
        this.ctx.lineTo(this.canvasWidth - this.space, this.y0);
        this.ctx.stroke();
        this.ctx.fill();
        //y轴
        this.ctx.beginPath();
        this.ctx.strokeStyle = '#000';
        this.ctx.moveTo(this.x0, this.y0);
        this.ctx.lineTo(this.space, this.space);
        //箭头
        this.ctx.lineTo(this.space+this.arrowSize/2,this.space+this.arrowSize);
        this.ctx.lineTo(this.space-this.arrowSize/2,this.space+this.arrowSize);
        this.ctx.lineTo(this.space,this.space);
        this.ctx.stroke();
        this.ctx.fill();
      };
      //绘制所有点
      lineChart.prototype.drawDotted = function (data) {
        /*1.数据的坐标 需要转换 canvas坐标*/
        /*2.再进行点的绘制*/
        /*3.把线连起来*/
        let that = this;
        /*记录当前坐标*/
        let prevCanvasX = 0;
        let prevCanvasY = 0;
        data.forEach(function (item,i) {
          /* x = 原点的坐标 + 数据的坐标 */
          /* y = 原点的坐标 - 数据的坐标 */
          let canvasX = that.x0+item.x;
          let canvasY = that.y0-item.y;
          //绘制点
          that.ctx.beginPath();
          that.ctx.moveTo(canvasX - that.dottedSize / 2, canvasY - that.dottedSize / 2);
          that.ctx.lineTo(canvasX + that.dottedSize / 2, canvasY - that.dottedSize / 2);
          that.ctx.lineTo(canvasX + that.dottedSize / 2, canvasY + that.dottedSize / 2);
          that.ctx.lineTo(canvasX - that.dottedSize / 2, canvasY + that.dottedSize / 2);
          that.ctx.closePath();
          that.ctx.fill();
          /*点的连线*/
          /*当时第一个点的时候 起点是 x0 y0*/
          /*当时不是第一个点的时候 起点是 上一个点*/
          if(i == 0){
              that.ctx.beginPath();
              that.ctx.moveTo(that.x0,that.y0);
              that.ctx.lineTo(canvasX,canvasY);
              that.ctx.stroke();
          }else{
              /*上一个点*/
              that.ctx.beginPath();
              that.ctx.moveTo(prevCanvasX,prevCanvasY);
              that.ctx.lineTo(canvasX,canvasY);
              that.ctx.stroke();
          }
          /*记录当前的坐标，下一次要用*/
          prevCanvasX = canvasX;
          prevCanvasY = canvasY;
        });
      };
      //行为方法
      lineChart.prototype.init=function (data) {
        this.drawGrid();
        this.drawAxis();
        this.drawDotted(data);
      };
      //初始化
      // 这里的数据本应该是从后台传过来的json数据，这里模拟一下
      let data = [
        {x: 100, y: 120},
        {x: 200, y: 160},
        {x: 300, y: 240},
        {x: 400, y: 120},
        {x: 500, y: 80}
      ];
      let lineChart2 = new lineChart();
      lineChart2.init(data);
    }
  },
  filters: {},
  computed: {},
  components: {},
  watch: {},
  mounted () {
    // this.bianKuang() // 矩形边框
    // this.juXing() // 画一个填充颜色的矩形并让其左右移动
    // this.yiDong() // 画一个移动的矩形
    // this.wenBen() // 写文本
    // this.yuan() // 画圆
    this.zheXianTu() // 折线图
  }
}
</script>

<style lang="less" scoped>
.canvas {
  margin: 20px 20px;
  border: 1px solid #ccc;
}
</style>
