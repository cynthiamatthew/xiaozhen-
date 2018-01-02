// pages/event/index.js
Page({
  /**页面的初始数据*/
  data: {
    indicatorDots: true,
    autoplay: false,
    interval: 5000,
    duration: 1000   
  },
  /*生命周期函数--监听页面加载*/
  onLoad: function (options) {  
    var that=this; 
    /*请求kv start*/
    wx.request({
      url: "https://xiaochengxu.andoner.cn/json/kv.json",
      headers: {
        'Content-Type': 'application/json'
      },
      data:{
        id: options.postId
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
      data: {
        id: options.postId
      },
      success: function (res) {  
        if (options.postId==0)
        {
         var arr1=[];
         arr1.push(res.data.data[0]);
         that.setData({zhihu: arr1});         
        }
        else
        {
          var arr2 = [];
          arr2.push(res.data.data[1]);  
          that.setData({zhihu: arr2});      
        }    
      },
      fail: function ({ errMsg }) {
        console.log('request fail', errMsg)
      }
    })
    /*请求event end*/
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})