/**
 * 
 * @author mamba
 * @create 2020-9-12
 * desc 分页
 * 
 */

class Paging{
  // 状态
  // 实例化 new Paging

  start;
  count;
  req;
  locker = false;

  constructor(req, count = 10, start = 0){
    this.count = count;
    this.start = start;
    this.req = req;
  }

  // 获取数据
  getMoreData(){
    // getLocker
    if(!this._getLocker()){
      return;
    }

    // 获取数据
    this._actualGetData();

    // releaseLocker
    this._releaseLocker()
  }
  // 真实获取数据
  _actualGetData(){

  }
  // 如果已经锁上：返回false 没有锁上：locker参数为true，返回true
  _getLocker(){
    if(this.locker){
      return false;
    }
    this.locker = true;
    return true;
  }
  // 释放锁
  _releaseLocker(){
    this.locker = false;
  }

}