import Vue from 'vue'
// 按钮
import zsButton from './zsButton.vue'
Vue.component(zsButton.name, zsButton)
// 弹框
import zsDialog from './zsDialog.vue'
Vue.component(zsDialog.name, zsDialog)
// 输入框
import zsInput from './zsInput.vue'
Vue.component(zsInput.name, zsInput)
// Tree树状图
import zsTree from './zsTree.vue'
Vue.component(zsTree.name, zsTree)
// swich开关
import zsSwich from './zsSwich.vue'
Vue.component(zsSwich.name, zsSwich)
// radio单选框
import zsRadio from './zsRadio.vue'
Vue.component(zsRadio.name, zsRadio)
// radioGroup单选框组
import zsRadioGroup from './zsRadioGroup.vue'
Vue.component(zsRadioGroup.name, zsRadioGroup)
// Loading
import zsLoading from './zsLoading.vue'
Vue.component(zsLoading.name, zsLoading)
// 地图
import zsMap from './zsMap/zsMap.vue'
Vue.component(zsMap.name, zsMap)

import elementTreeGrid from 'element-tree-grid'
Vue.component(elementTreeGrid.name, elementTreeGrid)