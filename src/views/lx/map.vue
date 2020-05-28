<template>
  <div class="map" id="map"></div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {},
  filters: {},
  computed: {},
  components: {},
  watch: {},
  mounted () {
    // 百度地图API功能
    var map = new BMap.Map("map");    // 创建Map实例
    map.centerAndZoom(new BMap.Point(120.38105, 36.177271), 11);  // 初始化地图,设置中心点坐标和地图级别
    //添加地图类型控件
    map.addControl(new BMap.MapTypeControl({
        mapTypes:[
            BMAP_NORMAL_MAP,
            BMAP_HYBRID_MAP
        ]}));
    map.setCurrentCity("青岛");         // 设置地图显示的城市 此项是必须设置的
    map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
  }
}
</script>

<style lang="less" >
  .map #map {
    width: 100%;
    height: 100%;
  }
</style>
