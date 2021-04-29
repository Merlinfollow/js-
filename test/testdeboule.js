/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2021-04-12 11:06:15
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-04-27 09:06:12
 */
function deboule(time,await){
  let times = setTimeout({
    // 调用事件的方法体

  },time)
  clearTimeout(times)
}


function debounce(fn,delay){
  let timer = null //借助闭包
  return function() {
      if(timer){
          clearTimeout(timer) //进入该分支语句，说明当前正在一个计时过程中，并且又触发了相同事件。所以要取消当前的计时，重新开始计时
          timer = setTimeout(fn,delay) 
      }else{
          timer = setTimeout(fn,delay) // 进入该分支说明当前并没有在计时，那么就开始一个计时
      }
  }
}


var foo = '123'
function print(){
  var foo = '456';
  this.foo = '789';
  console.log(foo);
}
print()

// 自定义对象类型
interface xiaoLin{
  name:string,
  age:number
}
let me:xiaoLin = {
  name:'Merlin',
  age:27
}

for(var i=0;i<2;i++){
  setTimeout(function(){
    console.log(i)
  })
}

// 实现一个sleep函数
const sleep = (time) =>{
  return new Promise((resolve) => {
    setTimeout(resolve,time)
  })
}
sleep(5000).then(()=>{
  console.log(123)
})


//注册全局指令
Vue.directive('focus',{
  inserted:function(el){
    el.focus();
  }
})

//局部指令
directives:{
  focus:{
    inserted:function(el){
      el.focus();
    }
  }
}

// 定时器，事件处理，ajax请求，node读取文件


function *helloWorld(){
  yield 'Hello';
  yield 'World';
  return 'end';
}
let hw = helloWorld();
console.log(hw.next());
console.log(hw.next());
console.log(hw.next());
console.log(hw.next());


import React, { Component } from 'react';
import { combineReducers } from 'redux'

class Mycontent extends Component {
  constructor(props){
    super(props);
  }
}
let p = new Mycontent();

// 所以super中的props是否接收，只能影响constructor生命周期中能否使用this.props,其它生命周期,render,componentDidMount,componentWillMount,componentDidUpdate已默认存在this.props;

// 在class方法中，继承是使用 extends 关键字来实现的。子类 必须 在 constructor( )调用 super( )方法，否则新建实例时会报错。

// 报错的原因是：子类是没有自己的 this 对象的，它只能继承自父类的 this 对象，然后对其进行加工，而super( )就是将父类中的this对
// 象继承给子类的。没有 super，子类就得不到 this 对象。

// constructor 构造方法
// super  继承
// es5和es6的继承的区别

// 简单解释，就是在ES5的继承中，先创建子类的实例对象this，然后再将父类的方法添加到this上（ Parent.apply(this) ）。
// 而ES6采用的是先创建父类的实例this（故要先调用 super( )方法），完后再用子类的构造函数修改this。


// 新建一个envconfig 文件夹
// 里面新建一个envconfig.js文件
let baseUrl = '';
if(process.env.NODE_ENV === 'developnent'){
  baseUrl = '/api/dev.com';
}else{
  baseUrl = '/api/pro.com';
}
export default { baseUrl };


// 文件上传
commonUpload(e) { 
    const files = e.target.files;
    let formData = new FormData();
    if(files && files[0]) {
      const file = files[0];
      if(file.size > 1024 * 1024 *3) {
        alert('文件大小不能超过3M');
        return;
      } else {
        formData.append("multipartFile", file); 
      }
    }
   this.uploadFile_(formData) // 为调用上传接口方法
}

render() {
  return (
    <main>
      123
    </main>
  )
}

// try catch用法
try{
  // do some thing
  throw new Error('错误')
}catch(e) {
  console.log(e)
}finally {
  // finally done;
}

// vue是MVVM框架，react是MVC框架


// 今天也要努力加油呀!
// 加油哦，要努力实现自己定下来的目标。
// 多看书多学习多思考。

export default (state = defaultState, action) => {
  switch (action.type) {
    case REMOTE_DATA_RECEIVED:
      return {
        ...state,
        data: action.data
      };
    default:
      return state;
  }
};

// alt + shift + jiantou 复制上一行代码
// shift + jiantou   多行选择

// combineReducers,rootReducer,appReducer;
// 每个reducer负责更改部分state;
// reducer处理state;

// 一个store, 多个reducer, 多个state状态, 多个type(action.type);

// react-redux 把state和react连接在一起，提供provider和connect;

// provider接受一个store, 按照context把state往下面传, connect(mapStateToProps, mapDispatchToProps);