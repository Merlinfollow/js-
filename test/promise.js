/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2021-04-12 21:39:46
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-04-12 21:54:04
 */
class myPromise{
  constructor(callback){
    this.msg = "";
    this.success = null;
    this.fail = null;
    callback(
      success =>{
        this.msg = 'SUCCESS';
        this.success = success;
      },
      fail =>{
        this.msg = 'FAIL';
        this.fail = fail;
      }
    )
  }
  then(success,fail){
    if(this.msg == 'SUCCESS'){
      success(this.success);
    }else if(this.msg = 'FAIL'){
      fail(this.fail);
    }
  }
}

new Promise((resolve, reject) => {
  resolve('hello');
}).then(data =>{
  console.log(data)
})

//防抖
function debounce(fn,delay){
  let timer = null //借助闭包
  return function() {
      if(timer){
          clearTimeout(timer) 
      }
      timer = setTimeout(fn,delay) // 简化写法
  }
}

//节流
function throttle(fn,delay){
  let valid = true
  return function() {
     if(!valid){
         //休息时间 暂不接客
         return false 
     }
     // 工作时间，执行函数并且在间隔期内把状态位设为无效
      valid = false
      setTimeout(() => {
          fn()
          valid = true;
      }, delay)
  }
}