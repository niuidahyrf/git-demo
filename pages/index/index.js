// pages/index/index.js
import { Banner } from '../../model/banner'
import { User } from '../../model/user'
import { Question } from '../../model/question'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    bannerList: null,  // banner 图列表
  },

  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad (options) {
    this.initAllData();
  },
  async initAllData(){
    const bannerData = await Banner.getBanner();
    console.log(bannerData);
    
    const cateData = await Question.getCate();
    console.log(cateData);
    
    // 数据赋值
    this.setData({
      bannerList:bannerData.data
    })
  },
  async pageLogin(e){
      let _this = this;
      if (e.detail.errMsg !== 'getUserInfo:ok') {
        return false;
      }
      wx.showLoading({
        title: "正在登录",
        mask: true
      });
      // 执行微信登录
      wx.login({
        success: async (res)=>{
          const loginData = await User.login({code:res.code,userinfo:e.detail.rawData});
          console.log(loginData)
          wx.hideLoading();
        }
      })
  },
  // 进入公告内容
  enterAnnounce(){
    console.log(123);
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