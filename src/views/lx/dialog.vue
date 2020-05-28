<template>
  <div class='container'>
    <zs-button
    type='danger' plain marginLeft='20px' marginTop='20px' @click="scEvent">警告</zs-button>
    <zs-button
    type='primary' icon-right marginLeft='20px' marginTop='20px' @click="showDialog">收货地址</zs-button>
    <!-- ----------------------------------------- -->
    <zs-dialog 
    title="收货地址"
    height="200px"
    width="40%"
    :data.sync="dialogValue" 
    margin-top="6%" 
    @show="show" 
    @hiden="hiden">
      <el-table
      :data="tableData">
        <el-table-column
          prop="date"
          label="日期"
          width="100">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="80">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址">
        </el-table-column>
      </el-table>
      <template v-slot:footer>
        <zs-button @click="btn1Click">清空</zs-button>
        <zs-button @click="btn2Click" type="primary" marginLeft="10px">确定</zs-button>
      </template>
    </zs-dialog>
    <zs-dialog 
    :data.sync='scData'
    title="提示"
    width="30%">
      确定要清空吗？
      <template v-slot:footer>
        <zs-button @click="scbtn1Click">取消</zs-button>
        <zs-button @click="scbtn2Click" type="primary" marginLeft="10px">确定</zs-button>
      </template>
    </zs-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dialogValue: false,
      scData: false,
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  methods: {
    showDialog () {
      this.dialogValue = true
    },
    show () {
      console.log('显示触发')
    },
    hiden () {
      console.log('隐藏触发')
    },
    btn1Click () {
      // this.dialogValue = false
      this.scData = true
    },
    btn2Click () {
      this.dialogValue = false
    },
    scbtn1Click () {
      this.scData = false
    },
    scbtn2Click () {
      this.scData = false
      this.dialogValue = false
    },
    scEvent () {
      this.scData = true
    }
  }
}
</script>

<style lang="less" scoped>
/deep/.zs-dialog .zs-dialog-box .zs-dialog-body[data-v-60a4451e] {
  padding-top: 0;
}
</style>
