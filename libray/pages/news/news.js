Page({

  data: {
    scrollTop: 100
  },
  scroll: function (e) {
    console.log(e)
  },

  tapMove: function (e) {
    this.setData({
      scrollTop: this.data.scrollTop + 10
    })
  }
})