/**
 * 用户模块
 * @author mamba
 * time 2020-08-30
 * 
 */

import { Http } from '../utils/http';

class User{
  static async login({
    code,userinfo
  }){
    return await Http.request({
      url: 'login/login',
      data: {
        code,
        userinfo
      }
    })
  }
}

export {
  User
}
