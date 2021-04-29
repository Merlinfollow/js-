/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2021-04-07 19:11:24
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-04-12 10:05:08
 */
var params = (function oneValues() {
  var query = location.search.substr(1)
  query = query.split('&')
  var params = {}
  for (let i = 0; i < query.length; i++) {
      let q = query[i].split('=')
      if (q.length === 2) {
          params[q[0]] = q[1]
      }
  }
  return params  //返回?号后面的参数名与参数值的数组
}());

function getUrlValue(){
  let query = location.search.substr(1).split('&')
  let params = {};
  for(let i = 0;i<query.length;i++){
    let q = query[i].split('=')
    if(q.length == 2){
      params[q[0]] = q[1]
    }
    return params
  }
}


function f1(){
  var n = 999;
  function f2(){
    console.log(n)
  }
  return f2
}
var res = f1()
res()//为什么这里是这样调用的
// 闭包就是能够读取其它函数内部变量的函数


var name = "The Window";
　　var object = {
　　　　name : "My Object",
　　　　getNameFunc : function(){
　　　　　　return function(){
　　　　　　　　return this.name;
　　　　　　};
　　　　}
　　};
　　console.log(object.getNameFunc()());



var name = "The Window";
　　var object = {
　　　　name : "My Object",
　　　　getNameFunc : function(){
　　　　　　var that = this;
　　　　　　return function(){
　　　　　　　　return that.name;
　　　　　　};
　　　　}
　　};

console.log(object.getNameFunc()());


var x = 1;
function test(){
　this.x = 0;
}
test();
console.log(x); //1

let arr = [1,2,3,4,5,6]
console.log(arr.join('+'))


sum(1,2)//3
sum(1)(2)//3

function sum(a,b){
  if(b){
    let a = 0;
    if(arguments.length > 0){
      for(let i = 0;i<arguments.length;i++){
        a += arguments[i]
      }
    }
    return a;
  }else{
    return function(b){
      return a +b;
    }
  }
}
let res1 = sum(1,2)
let res2 = sum(1)(2)
console.log(res1)
console.log(res2)

// toUpperCase
let str = 'vue-element-admin';
function change(str){
  let res = str.split('-');
  res.forEach(item => {
    item.textTransform = 'capitalize';
  });
}
console.log(change(str))



var computers = [
  { name: "mac", ram: 32 },
  { name: "mac", ram: 8 },
  { name: "IBM", ram: 16 },
  { name: "IBM", ram: 64 }
];
var everyComputerCan;
var someComputerCan;
//判断每一个元素的ram是否都大于16,强调是每一个
var everyBoolan = computers.every(function(item) {
  return item.ram > 16;
});
//判断元素的ram是否都大于16，强调是有一个
var someBoolean = computers.some(function(item) {
  return item.ram > 16;
});
console.log(everyBoolan); //结果：false
console.log(someBoolean);//结果: true


// 注意：filter和find区别：filter返回的是数组，find返回的是对象。
// 注：find()找到第一个元素后就不会在遍历其后面的元素,所以如果数组中有两个相同的元素，他只会找到第一个，第二个将不会再遍历了。


let wake = (time) =>{
  return new Promise((resolve, reject) => {
    setTimeout(()=>{
      resolve(`${time / 1000}秒后醒来`)
    },time)
  })
}
let p1= wake(3000);
let p2 = wake(2000);
Promise.all([p1,p2]).then((result) =>{
  console.log(result);
}).catch((error) =>{
  console.log(error)
})


function timeout() {
  var p = new Promise(function(resolve,reject){
  //做一些异步操作
  setTimeout(function(){
  console.log('执行完成');
  resolve('成功输出');
  },2000);
  });
  return p
  }
  
  timeout().then(function(data){
    console.log(data);
    //后面可以用传过来的数据做些其他操作
  })