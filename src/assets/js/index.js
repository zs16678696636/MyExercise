import vue from 'vue'
import date from './function/date'
import bus from './function/bus'
import link from './function/link'
// import Ajax from './http'
import Ajax from 'axios'

vue.prototype.$date = date
/**
 * 时间-使用说明:
 * 一: 可只单独获取当前时间——例: this.$date.nyr || this.$date.n || this.$date.y || this.$date.r               || this.$date.s || this.$date.f || this.$date.m || this.$date.hm
 * 二: 可转换后台返回时间,固定格式'YYYY-MM-DD'——例: this.$date.dateFn('YYYYMMDD').nyr ||                      ('YYYYMMDD').n || this.$date.dateFn('YYYYMMDD').y || this.$date.dateFn('YYYYMMDD').r                 若不传参数,返回'请传入数据-例:YYYY-MM-DD'
 **/
vue.prototype.$link = link
/**
 * 跳链接-使用说明:
 * let link = '/lx/Tree' || 'lx/Tree' || https://www.baidu.com || http://www.baidu.com
 * this.$link.link(link)    // 支持内链或外链，内链前面加/或不加/ 都可
 **/
vue.prototype.$bus = bus
vue.prototype.$ajax = Ajax