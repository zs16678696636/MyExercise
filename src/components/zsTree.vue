<template>
  <!-- <div class='zs-tree-container'>
    <div v-for="(item, id) in data" :key="id" v-show ="Children">
      <p @click.self="Childrenck(item)">{{item.label}}</p>
        <transition name="div1">
          <div class="div1" v-for="(item2, id2) in item.children" :key="id2"  v-show="item.flage">
            <p class="Children2" @click.self="Childrenck(item2)">{{item2.label}}</p>
            <transition name="div2">
              <div class="div2" v-for="(item3, id3) in item2.children" :key="id3" v-show="item2.flage">
                <p class="Children3">{{item3.label}}</p>
              </div>
            </transition>
          </div>
        </transition>
    </div>
  </div> -->
  <div class='zs-tree-container' ref="tree">
    <div v-for="(item, id) in data" :key="id">
      <p>{{item.label}}</p>
      <div v-for="(item, id) in item.children" :key="id">
        <p>{{item.label}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'zs-tree',
  data () {
    return {
      Children: true,
      data: [
        {
          label: '一级 1',
          children: [{
            label: '二级 1-1',
            children: [{
              label: '三级 1-1-1'
            }]
          }]
        }, {
          label: '一级 2',
          children: [{
            label: '二级 2-1',
            children: [{
              label: '三级 2-1-1'
            }]
          }]
        }, {
          label: '一级 3',
          children: [{
            label: '二级 3-1',
            children: [{
              label: '三级 3-1-1'
            }]
          }]
        }
      ]  
    }
  },
  directives: {
    'treeHtml': {
      update: (el) => {
        let val = '<div v-for="(item, id) in item.children" :key="id"></div>'
        el.innerHTML = val
      }
    }
  },
  methods: {
    Childrenck (item) {
      item.flage = !item.flage
      this.Children = false
      this.Children = true
    },
    dataFilter (data) {
      data.forEach((dataItem) => {
        dataItem.flage = false
        if (dataItem.children) {
          dataItem.children.forEach((item) => {
            item.flage = false
            this.dataFilter(item.children)
          })
        }
      })
    }
  },
  filters: {},
  computed: {},
  components: {},
  watch: {},
  created () {
    this.dataFilter(this.data)
  }
}
</script>

<style lang="less" scoped>
.zs-tree-container {
  width: 300px;
  p {
    width: 100%;
    color: #606266;
    font-size: 14px;
    cursor: pointer;
    margin: 0;
  }
  p:hover {
    background-color: #f5f7fa;
  }
  .Children2 {
    padding-left: 14px;
  }
  .Children3 {
    padding-left: 28px;
  }
  .div1 {
    overflow: hidden;
  }
  .div2 {
    overflow: hidden;
  }
  @keyframes tree {
    0% {
      height: 0px;
    }
    100% {
      height: 19px;
    }
  }
  .div1-enter-active {
    animation: tree .3s linear;
  }
  .div1-leave-active {
    animation: tree .3s linear reverse;
  }
  .div2-enter-active {
    animation: tree .3s linear;
  }
  .div2-leave-active {
    animation: tree .3s linear reverse;
  }
}
</style>
