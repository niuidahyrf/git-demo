/**
 * http请求封装
 * @author mamba
 * time 2020-08-30
 * 
 */
import {promisic} from './util';
import {config} from '../config/config';

class Http{
  // request请求
  static async request({url,data,method = 'POST'}){
    const res = await promisic(wx.request)({
      url: `${config.apiBaseUrl}${url}`,
      data,
      method,
      header:{
        'content-type': 'application/x-www-form-urlencoded',
        'token': wx.getStorageSync('token'),
      }
    })
    return res.data;

  }
}

export {
  Http
}

