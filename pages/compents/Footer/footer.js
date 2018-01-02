// pages/compents/Footer/footer.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    menu_zhen:{
      type:"string",
      value: ""
    },
    menu_map: {
      type: "string",
      value: ""
    },
    menu_sale: {
      type: "string",
      value: ""
    },
    menu_member: {
      type: "string",
      value: ""
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
   
  },

  /**
   * 组件的方法列表
   */
  methods: {
        gonavmember:function(){
          wx.navigateTo({
            url: '/pages/login/login',
          })
        }
  }
})
