//index.js
//获取应用实例
const app = getApp();
Page({
  data: {
    indicatorDots: true,
    autoplay: false,
    interval: 5000,
    duration: 1000
  },
  goevent: function (en) {
    var postid = en.currentTarget.dataset.postid
    wx.navigateTo({
      url: '../event1/event?postId='+postid
    })
    },
  onLoad: function () {
    wx.showLoading({
      title: '加载中'
    })
    var openId = wx.getStorageSync('openId')
    console.log("openIdtest: " + openId)
    var that = this;
    wx.request({
      url: "https://xiaochengxu.andoner.cn/json/kv.json",
      headers: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        that.setData({
          kvarray: res.data.data
        })        
      },
      fail: function ({ errMsg }) {
        console.log('request fail', errMsg)
      }
    })
    /*请求kv end*/
    wx.request({
      url: "https://xiaochengxu.andoner.cn/json/event.json",
      headers: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        that.setData({
          eventarray: res.data.data
        })
        wx.hideLoading()
      },
      fail: function ({ errMsg }) {
        console.log('request fail', errMsg)
      }
    })
    /*请求event end*/ 
  },
  /*===自定义分享===*/
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '小镇首页',
      imageUrl: 'https://xiaochengxu.andoner.cn/json/bnr1.jpg',
      path:"pages/index/index",
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  }
 /*===自定义分享 end===*/
})
