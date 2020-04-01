//index.js
const app = getApp()

Page({
  data: {
    avatarUrl: '../../images/avatar.jpg',
    userInfo: {},
    logged: false,
    takeSession: false,
    requestResult: '',
    showQr: false,
    articleUrl: 'https://mp.weixin.qq.com/s/Pj0lUrpplKC1kSmZO4o95A'
  },
  showQrModal () {
    this.setData({ showQr: true });
  },
  onClickHide () {
    this.setData({ showQr: false });
  },
  goArtical () {
    wx.navigateTo({
      url: '../webview/index?url=' + encodeURIComponent(this.data.articleUrl)
    });
  },
  onLoad: function() {
  },
})
