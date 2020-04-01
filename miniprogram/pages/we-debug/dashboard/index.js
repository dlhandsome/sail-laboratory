import weDebug from '../../../utils/debug'

Page({
  data: {
    title: 'we-debug',
    desc: '一款灵活、易拓展的小程序调试工具'
  },
  openDebug () {
    weDebug.event.emit('debug:mask:show-modal')
  },
  onClick () {
    throw new Error('报错了')
  },
  testRoute () {
    const params = {
      paramA: 'random_' + Math.floor(Math.random() * 100),
      paramB: 'random_' + Math.floor(Math.random() * 100)
    }
    wx.navigateTo({
      url: '../route/index?' + Object.keys(params).map(o => `${o}=${params[o]}`).join('&')
    });
  }
})
