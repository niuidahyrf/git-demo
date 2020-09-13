/**
 * 工具类
 * @author mamba
 * time 2020-08-30
 * 
 */

// promisic
// 将小程序内置非promise API转换微promise
const promisic = function (func) {
  return function (params = {}) {
      return new Promise((resolve, reject) => {
          const args = Object.assign(params, {
              success: (res) => {
                  resolve(res);
              },
              fail: (error) => {
                  reject(error);
              }
          });
          func(args);
      });
  };
};

export {
  promisic
}


