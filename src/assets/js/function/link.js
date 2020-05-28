import Router from '../../../router/index'
let link = (data) => {
  if (data) {
    let flg =  data.startsWith('http' || 'https')
    if (flg) {
      window.location.href = data
    } else {
      let routerFlg = data.startsWith('/')
      if (routerFlg) {
        Router.push(data)
      } else {
        data = '/' + data
        Router.push(data)
      }
    }
  }
}
export default {link}
/**
 * 使用说明:
 * let link = '/lx/Tree' || 'lx/Tree' || https://www.baidu.com || http://www.baidu.com 都可以
 * this.$link.link(link)    // 支持内链或外链，内链前面加/或不加/ 都可以
 **/ 