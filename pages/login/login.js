// pages/login/login.js
const app = getApp()
var interval = null 
Page({
  /**
   * 页面的初始数据
   */
  data: {
    phone:false,
    code:false,
    codedisabled:true,
    disabled: true,
    time: '获取验证码',
    currentTime: 61
  },
  /*发送验证码start===*/
  getCode: function (options) {
    var that = this;
    var currentTime = that.data.currentTime
    interval = setInterval(function () {
      currentTime--;
      that.setData({
        time: currentTime + '秒重新发送'
      })
      if (currentTime <= 0) {
        clearInterval(interval)
        that.setData({
          time: '重新发送',
          currentTime: 61,
          phone: true
        })
      }
    }, 200)
  },
  sendcode() {
    /*wx.showToast({
      title: '发送验证成功',
      icon: 'success',
      duration: 2000
    })   */ 
    var that = this
    that.setData({
      phone: false
    })
    this.getCode();
  },
  /*发送验证码end===*/
  userphoneInput: function (e) {
    if (e.detail.value.length==11)
     {
       this.setData({
         phone:true
       })
     }
     else
     {
      this.setData({
        phone: false
      }) 
     }
    this.checklogin();
  },
  userpwdInput:function(e){
    if (e.detail.value.length == 6) {
      this.setData({
        code: true
      })
    }    
    else
    {
      this.setData({
        code: false
      })
    }
    this.checklogin();
  },
  //验证登录
  checklogin:function(){
    if (this.data.phone == true && this.data.code == true) 
    {
      this.setData({
        disabled: false
      })
    }
    else
    {
      this.setData({
        disabled: true
      })
    }
  },
  formSubmit: function (e) {
    console.log('手机号：', e.detail.value.user_phone)
    console.log('验证码：', e.detail.value.user_pwd)
    wx.showModal({
      title: '登录',
      content: '登录成功',
      success: function (res) {
        if (res.confirm) {
          wx.redirectTo({
            url: '/pages/index/index',
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  /* 生命周期函数--监听页面加载*/
  onLoad: function (options) {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }  
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  /*生命周期函数--监听页面初次渲染完成*/
  onReady: function () {  
  },

  /* 生命周期函数--监听页面显示*/
  onShow: function () {  
  },
  /* 生命周期函数--监听页面隐藏*/
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