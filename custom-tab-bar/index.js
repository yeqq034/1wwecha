Component({
  data: {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "black",
    list: [{
      pagePath: "/index/index",
      iconPath: "/image/1.png",
      selectedIconPath: "/image/11.png",
      text: "首页"
    }, {
      pagePath: "/index/index2",
      iconPath: "/image/3.png",
      selectedIconPath: "/image/33.png",
      text: "订单"
    }, {
      pagePath: "/index/index2",
      iconPath: "/image/2.png",
      selectedIconPath: "/image/22.png",
      text: "我的"
    }]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({url})
      this.setData({
        selected: data.index
      })
    }
  }
})