/**
 * banner模块
 * @author mamba
 * time 2020-08-30
 * 
 */

import { Http } from '../utils/http';

class Banner{
  static async getBanner(){
    return await Http.request({
      url: 'ad/adList'
    })
  }
}

export {
  Banner
}
