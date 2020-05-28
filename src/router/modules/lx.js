/**
 * 练习
 */
export default [
  {
    path: 'lx/button',
    name: 'button',
    component: r => require.ensure([], () => r(require('../../views/lx/button.vue')), 'lx/button'),
    meta: { title: '按钮组件' }
  }, {
    path: 'lx/from',
    name: 'from',
    component: r => require.ensure([], () => r(require('../../views/lx/from.vue')), 'lx/from'),
    meta: { title: '表单组件' }
  }, {
    path: 'lx/methods',
    name: 'methods',
    component: r => require.ensure([], () => r(require('../../views/lx/methods.vue')), 'lx/methods'),
    meta: { title: '方法封装' }
  }, {
    path: 'lx/container',
    name: 'container',
    component: r => require.ensure([], () => r(require('../../views/lx/container.vue')), 'lx/container'),
    meta: { title: '方法封装' }
  }, {
    path: 'lx/dialog',
    name: 'dialog',
    component: r => require.ensure([], () => r(require('../../views/lx/dialog.vue')), 'lx/dialog'),
    meta: { title: '对话框组件' }
  }, {
    path: 'lx/tree',
    name: 'tree',
    component: r => require.ensure([], () => r(require('../../views/lx/tree.vue')), 'lx/tree'),
    meta: { title: '树状图组件' }
  }, {
    path: 'lx/turntable',
    name: 'turntable',
    component: r => require.ensure([], () => r(require('../../views/lx/turntable.vue')), 'lx/turntable'),
    meta: { title: '大转盘' }
  }, {
    path: 'lx/redBaleRain',
    name: 'redBaleRain',
    component: r => require.ensure([], () => r(require('../../views/lx/redBaleRain.vue')), 'lx/redBaleRain'),
    meta: { title: '红包雨' }
  }, {
    path: 'lx/map',
    name: 'map',
    component: r => require.ensure([], () => r(require('../../views/lx/map.vue')), 'lx/map'),
    meta: { title: '练习' }
  }, {
    path: 'lx/ccLx',
    name: 'ccLx',
    component: r => require.ensure([], () => r(require('../../views/lx/ccLx.vue')), 'lx/ccLx'),
    meta: { title: 'cc练习' }
  }, {
    path: 'lx/canvas',
    name: 'canvas',
    component: r => require.ensure([], () => r(require('../../views/lx/canvas.vue')), 'lx/canvas'),
    meta: { title: '画布练习' }
  }
]