Page({
  data: {
    route: '',
    query: []
  },
  onLoad (options) {
    const curPages =  getCurrentPages();
    const page = curPages[curPages.length - 1]

    this.setData({
      route: page.route,
      query: Object.keys(page.options).map(o => ({
        name: o,
        value: page.options[o]
      }))
    })
  }
})