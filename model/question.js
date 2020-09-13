/**
 * 题型模块
 * @author mamba
 * time 2020-08-30
 * 
 */
import { Http } from '../utils/http';

class Question{
  // 获取分类
  static async getCate(){
    return await Http.request({
      url: 'Cate/CateList'
    })
  }
  // 获取题目
  static async getQuestion(){
    
  }
}
export {
  Question
}
