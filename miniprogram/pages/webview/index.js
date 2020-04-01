Page({
  data: {
    url: ''
  },
  onLoad (options) {
    const url = decodeURIComponent(options.url)

    this.setData({
      url: url
    })
  }
})