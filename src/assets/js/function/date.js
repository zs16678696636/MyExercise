let date = new Date()
let n = date.getFullYear() // 年
let y = date.getMonth() + 1
if (y < 10) {
  y = '0' + y
} // 月
let r = date.getDate()
if (r < 10) {
  r = '0' + r
} // 日
let s = date.getHours()
if (s < 10) {
  s = '0' + s
} // 时
let f = date.getMinutes()
if (f < 10) {
  f = '0' + f
} // 分
let m = date.getSeconds()
if (m < 10) {
  m = '0' + m
} // 秒
let hm = date.getMilliseconds()
if (hm < 10) {
  hm = '0' + hm
} // 毫秒
let nyr = n + '-' + y + '-' + r // 年月日
let sfm = s + ":" + f + ':' + m // 时分秒
let nyrsfm = nyr + ' ' + sfm // 年月日时分秒
let dateFn = (data) => {
  if (data) {
    data = data + ''
    let n = data.substr(0, 4) // 年
    let y = data.substr(4, 2) // 月
    let r = data.substr(6, 2) // 日
    let nyr = n + '-' + y + '-' + r // 年月日
    return {n, y, r, nyr}
  } else {
    let n = '请传入数据-例:YYYY-MM-DD'
    let y = '请传入数据-例:YYYY-MM-DD'
    let r = '请传入数据-例:YYYY-MM-DD'
    let nyr = '请传入数据-例:YYYY-MM-DD'
    return {n, y, r, nyr}
  }
} // 转换后台数据函数
export default { n, y, r, s, f, m, hm, nyr, sfm, nyrsfm, dateFn}
/**
 * 使用说明:
 * 一: 可只单独获取当前时间——例: this.$date.nyr || this.$date.n || this.$date.y || this.$date.r               || this.$date.s || this.$date.f || this.$date.m || this.$date.hm
 * 二: 可转换后台返回时间,固定格式'YYYY-MM-DD'——例: this.$date.dateFn('YYYYMMDD').nyr ||                      ('YYYYMMDD').n || this.$date.dateFn('YYYYMMDD').y || this.$date.dateFn('YYYYMMDD').r                 若不传参数,返回'请传入数据-例:YYYY-MM-DD'
 **/ 