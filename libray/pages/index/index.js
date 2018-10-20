//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Welcom TO Library',
  },
  onLoad: function () {
    wx.setTabBarStyle({
      "backgroundColor": "#ffffff"
    })
  }

})
