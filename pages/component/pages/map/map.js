Page({
  data: {
    
  },
  onLoad: function (options) {
    var _this = this;
    wx.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度
      success: function (res) {
        var _latitude = res.latitude
        var _longitude = res.longitude
        console.log(res)
        _this.setData({
          latitude: _latitude,
          longitude: _longitude,
          markers: [{
            latitude: _latitude,
            longitude: _longitude,
            name: 'T.I.T 创意园'
          }],
        });
      }
    })
  },
})
