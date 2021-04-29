import { string } from "prop-types";

/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2021-03-31 09:27:47
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-03-31 23:40:48
 */
console.log(a);
var a = 6;  // undefined


console.log(a);
const a = 6;  // a is not defined


let tupleType: [string, boolean];
tupleType = ['123',true]

let b = 1 + '2'
console.log(b) //12

let b = '1' + 2
console.log(b)//12

let b = 1 + 2
console.log(b)//3

let b = '1' + '2'
console.log(b)//12

// string和number相加结果为string


let colors: Array<string> = ["red", "green", "blue"];
let colors: string[] = ["red", "green", "blue"];
let list: Array<string> = ['西安', '北京', '上海']  // string表示数字类型，Array表示数组
for (let i of colors) {
 console.log(i);
}

let person = {
  name: "Semlinker",
  gender: "Male",
 };
 let { name, gender } = person;



//  React的createElement方法
 function createElement(type, props, ...children) {
  props = Object.assign({}, props);
  props.children = [].concat(...children)
      .filter(child => child != null && child !== false)
      .map(child => child instanceof Object ? child : createTextElement(child));
  return {type, props};
}



function logProperty(target: any, key: string) {
 delete target[key];
 const backingField = "_" + key;
 Object.defineProperty(target, backingField, {
 writable: true,
 enumerable: true,
 configurable: true
 });
 // property getter
 const getter = function (this: any) {
 const currVal = this[backingField];
 console.log(`Get: ${key} => ${currVal}`);
 return currVal;
 };
 // property setter
 const setter = function (this: any, newVal: any) {
 console.log(`Set: ${key} => ${newVal}`);
 this[backingField] = newVal;
 };
 // Create new property with getter and setter
 Object.defineProperty(target, key, {
 get: getter,
 set: setter,
 enumerable: true,
 configurable: true
 });
}
class Person {
 @logProperty
以上代码我们定义了⼀个 logProperty 函数，来跟踪⽤户对属性的操作，当代码成功运⾏后，在控制
台会输出以下结果：
8.2.3 ⽅法装饰器
⽅法装饰器声明：
⽅法装饰器顾名思义，⽤来装饰类的⽅法。它接收三个参数：
target: Object - 被装饰的类
propertyKey: string | symbol - ⽅法名
descriptor: TypePropertyDescript - 属性描述符
废话不多说，直接上例⼦：
 public name: string;
 constructor(name : string) {
 this.name = name;
 }
}
const p1 = new Person("semlinker");
p1.name = "kakuqo";
Set: name => semlinker
Set: name => kakuqo


