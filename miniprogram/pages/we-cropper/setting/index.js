import config from '../config/index'

Page({
  data: {
    themeConfig: config.theme
  },
  themeClickHandler (e) {
    const { name } = e.target.dataset

    config.theme.active = name

    this.setData({ themeConfig: config.theme })

    const { color } = this.data.themeConfig.items.find(item => item.name === name)

    config.setThemeColor(color)
  },
  onChange (e) {
    const name = e.detail

    config.theme.active = name

    this.setData({ themeConfig: config.theme })

    const { color } = this.data.themeConfig.items.find(item => item.name === name)

    config.setThemeColor(color)
  }
})
