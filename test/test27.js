
import { element, func, object } from "prop-types";

/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2021-02-03 15:38:59
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-04-29 16:32:02
 */
let arr=['jspang','技术胖','大胖逼逼叨']
for (let item of arr){
    console.log(item);
}

let arr=['jspang','技术胖','大胖逼逼叨']
for (let index of arr.keys()){
    console.log(index);
}


let arr=['jspang','技术胖','大胖逼逼叨']
for (let [index,val] of arr.entries()){
    console.log(index+':'+val);
}


let arr=['jspang','技术胖','大胖逼逼叨']
let list=arr.entries();
console.log(list.next().value);
console.log(list.next().value);
console.log(list.next().value);


let arr=['jspang','技术胖','前端教程'];

console.log(arr.toString());


let name="jspang";
let skill= 'web';
var obj= {name,skill};
console.log(obj);  //Object {name: "jspang", skill: "web"}


let key='skill';
var obj={
    [key]:'web'
}
console.log(obj.skill);


console.log(Object.is('a',1))


var a={a:'jspang'};
var b={b:'技术胖'};
var c={c:'web'};

let d=Object.assign(a,b,c)
console.log(d);


var a = new String;
var b = new Number;
var c = new Boolean;
var d = new Array;
var e = new Object; 
var f= Symbol();
console.log(typeof(d));


var g = Symbol('jspang');
console.log(g);
console.log(g.toString());

let setArr = new Set(['jspang','技术胖','web','jspang']);
console.log(setArr);//Set {"jspang", "技术胖", "web"}

setArr.add('前端职场');
console.log(setArr); //Set {"jspang", "技术胖", "web", "前端职场"}

setArr.delete('前端职场');
console.log(setArr); //Set {"jspang", "技术胖", "web"}


let json = {
  name:'jspang',
  skill:'web'
}
console.log(json.name)

var map = new Map();
map.set(json,'iam');
console.log(map)


// SQL是用来操作关系型数据库管理系统（Relational DataBase Management System，RDBMS）的数据库语言，可进行操作数据 或定义数据等。RDBMS 中有名的数据库有 Oracle Database、 Microsoft SQLServer、IBM DB2、MySQL和 PostgreSQL等。这 些数据库系统都可以把 SQL作为数据库语言使用。

let json2 = {
  name:'jspang',
  skill:'web'
}
console.log(Object.keys(json2))


let person = { name: '老张' };
for (let key in person) {
  if (person.hasOwnProperty(key)) {
    console.log(key);
  }
}
// name


console.log(+new Date())   //返回时间戳


if (token) {
  getUser();
}
token && getUser() //if可以通过使用 && 操作符组合两个变量来缩短它。




function getUser(token) {
  var token = token || "XXXXXXXXXX";
  console.log('token',token)
  // 用 token 来异步请求数据
  // .......
}
getUser(666666);
// 666666
getUser();
// XXXXXXXXXX


function getUser(token){
  var token = token || 'xxxxxxxx';
  console.log('token',token)
  //用token来异步请求数据
  //......
}
getUser(666666);
getUser();

var array = [1,2,3,4,5,6];
console.log(array.slice(-1)[0]); //6


var elements = document.querySelectorAll("p"); 
 // NodeList 节点列表对象。但这个对象并不具有数组的全部方法，如 sort(), reduce(), map(), filter()
var arrayElements = [].slice.call( elements ); 
// 现在 NodeList 是一个数组
var arrayElements = Array.from( elements ); 
// 这是另一种转换 NodeList 到 Array  的方法

var elements= document.querySelectorAll("p");
var arrayElements = [].slice.call(elements);
var arrayElements = Array.from(elements);


//截断数组
var array = [1,2,3,4,5,6];
console.log( array.length ); 
// 6
array.length = 3;
console.log( array.length );
 // 3
console.log( array ); 
// [1,2,3]



// 合并数组
var array1 = [1,2,3];
var array2 = [4,5,6];
console.log(array1.concat(array2)); // [1,2,3,4,5,6];//耗费性能

var array1 = [1,2,3];
var array2 = [4,5,6];
console.log( array1.push.apply(array1, array2) );  // [1,2,3,4,5,6];


// 对于 数值、字符串、布尔值 经常会变的，用 let 声明。
// 对象、数组和函数用 const 来声明。

// 如经常用到的导出 函数
export const funA = function(){
  // ....
}


//一次性声明多个变量
let [a, b, c] = [1, 2, 3];
console.log(a) // 1
console.log(b) // 2
console.log(c) // 3


export const function A() {
  console.log('A')
}

export const function B (){
 console.log('B')
}

export const function C (){
   console.log('C')
}

import { A, B, C } from "./utils.js" 

//调用
A() // 输出 A 

// includes() 返回布尔值
// startsWith()   返回布尔值
// endsWidth() 返回布尔值

// 事件委托和事件执行机制不一样的概念哦

const f = v => v;
// 等同于
const f = function(v){
  return v;
}


const sum = (num1, num2) => num1 + num2;
// 等同于
const sum = function(num1,num2){
  return num1 + num2;
}
const sum = (num1,num2) =>{return num1 + num2;}


// const a1 = [1, 2];
// const a2 = [...a1];
// a2[0] = 2;


// 用 for...of 循环进行遍历，唯一的区别是 keys() 是对键名的遍历、values() 是对键值的遍历，entries() 是对键值对的遍历。
for (let index of ['a', 'b'].keys()) {
  console.log(index);
}
// 0
// 1

for (let elem of ['a', 'b'].values()) {
  console.log(elem);
}
// 'a'
// 'b'

for (let [index, elem] of ['a', 'b'].entries()) {
  console.log(index, elem);
}
// 0 "a"
// 1 "b"


// 时间复杂度  T(n)
// 空间复杂度  S(n)

// async function getTitle(url) {
//   let response = await fetch(url);
//   let html = await response.text();
//   return html.match(/<title>([\s\S]+)<\/title>/i)[1];
// }
// getTitle('https://tc39.github.io/ecma262/').then(console.log('完成'))


// O(1) < O(logn) < (n) < O(nlogn) < O(n2) < O(n3) < O(2n) < O(n!) < O(nn)
// 栈：先进后出
// 队列：先进先出


//for 循环 copy
function copy(arr) {
  let cArr = []
  for(let i = 0; i < arr.length; i++){
    cArr.push(arr[i])
  }
  return cArr;
}
let arr3 = [1,2,3,4];
let arr4 = copy(arr3) //[1,2,3,4]
console.log(arr4) //[1,2,3,4]
arr3[0] = 5;
console.log(arr3) //[5,2,3,4]
console.log(arr4) //[1,2,3,4]


//slice实现深拷贝
let arr5 = [1,2,3,4];
let arr6 = arr5.slice(0);
arr5[0] = 5;
console.log(arr5); //[5,2,3,4]
console.log(arr6); //[1,2,3,4]


//concat实现深拷贝
let arr7 = [1,2,3,4];
let arr8 = arr7.concat();
arr7[0] = 5;
console.log(arr7); //[5,2,3,4]
console.log(arr8); //[1,2,3,4]


//es6 扩展运算实现深拷贝
let arr9 = [1,2,3,4];
let [...arr10] = arr9;
arr9[0] = 5;
console.log(arr9) //[5,2,3,4]
console.log(arr10) //[1,2,3,4]


let arr9 = [1,2,3,4];
let arr10 = JSON.parse(JSON.stringify(arr9))
arr9[0] = 5;
console.log(arr9) //[5,2,3,4]
console.log(arr10) //[1,2,3,4]



//  循环 copy 对象
let obj = {
  id:'0',
  name:'king',
  sex:'man'
}
let obj2 = copy2(obj)
function copy2(obj) {
  let cObj = {};
  for(var key in obj){
    cObj[key] = obj[key]
  }
  return cObj
}
obj2.name = "king2"
console.log(obj) // {id: "0", name: "king", sex: "man"}
console.log(obj2) // {id: "0", name: "king2", sex: "man"}


var obj1 = {
  x: 1, 
  y: {
      m: 1
  },
  a:undefined,
  b:function(a,b){
    return a+b
  },
  c:Symbol("foo")
};
var obj2 = JSON.parse(JSON.stringify(obj1));
console.log(obj1) //{x: 1, y: {m: 1}, a: undefined, b: ƒ, c: Symbol(foo)}
console.log(obj2) //{x: 1, y: {m: 1}}
obj2.y.m = 2; //修改obj2.y.m
console.log(obj1) //{x: 1, y: {m: 1}, a: undefined, b: ƒ, c: Symbol(foo)}
console.log(obj2) //{x: 2, y: {m: 2}}

//es6 扩展运算
let obj = {
  id:'0',
  name:'king',
  sex:'man'
}
let {...obj4} = obj
obj4.name = "king4"
console.log(obj) //{id: "0", name: "king", sex: "man"}
console.log(obj4) //{id: "0", name: "king4", sex: "man"}



// Object.assign() 只能实现一维对象的深拷贝。
var obj1 = {x: 1, y: 2}, obj2 = Object.assign({}, obj1);
console.log(obj1) // {x: 1, y: 2}
console.log(obj2) // {x: 1, y: 2}

obj2.x = 2; // 修改 obj2.x
console.log(obj1) // {x: 1, y: 2}
console.log(obj2) // {x: 2, y: 2}

var obj1 = {
    x: 1, 
    y: {
        m: 1
    }
};
var obj2 = Object.assign({}, obj1);
console.log(obj1) // {x: 1, y: {m: 1}}
console.log(obj2) // {x: 1, y: {m: 1}}

obj2.y.m = 2; // 修改 obj2.y.m
console.log(obj1) // {x: 1, y: {m: 2}}
console.log(obj2) // {x: 1, y: {m: 2}}


let clone = function (v) {
  let o = v.constructor === Array ? [] : {};
  for(var i in v){
    o[i] = typeof v[i] === "object" ? clone(v[i]) : v[i];
  }
  return o;
}


// constructor, prototype, __proto__

// 看了别人的薪资感觉我就是个渣渣


const binaryInsertionSort = array => {
	const len = array.length;
	if (len <= 1) return;

	let current, i, j, low, high, m;
	for (i = 1; i < len; i++) {
		low = 0;
		high = i - 1;
		current = array[i];

		while (low <= high) {
			//步骤 1 & 2 : 折半查找
			m = (low + high) >> 1; // 注: x>>1 是位运算中的右移运算, 表示右移一位, 等同于 x 除以 2 再取整, 即 x>>1 == Math.floor(x/2) .
			if (array[i] >= array[m]) {
				//值相同时, 切换到高半区，保证稳定性
				low = m + 1; //插入点在高半区
			} else {
				high = m - 1; //插入点在低半区
			}
		}
		for (j = i; j > low; j--) {
			//步骤 3: 插入位置之后的元素全部后移一位
			array[j] = array[j - 1];
			console.log('array2 :', JSON.parse(JSON.stringify(array)));
		}
		array[low] = current; //步骤 4: 插入该元素
	}
	console.log('array2 :', JSON.parse(JSON.stringify(array)));
	return array;
};



const selectionSort = array => {
	const len = array.length;
	let minIndex, temp;
	for (let i = 0; i < len - 1; i++) {
		minIndex = i;
		for (let j = i + 1; j < len; j++) {
			if (array[j] < array[minIndex]) {
				// 寻找最小的数
				minIndex = j; // 将最小数的索引保存
			}
		}
		temp = array[i];
		array[i] = array[minIndex];
		array[minIndex] = temp;
		console.log('array: ', array);
	}
	return array;
};


const quickSort = (arr, left, right) => {
	let len = arr.length,
		partitionIndex;
	left = typeof left != 'number' ? 0 : left;
	right = typeof right != 'number' ? len - 1 : right;

	if (left < right) {
		partitionIndex = partition(arr, left, right);
		quickSort(arr, left, partitionIndex - 1);
		quickSort(arr, partitionIndex + 1, right);
	}
	return arr;
};


const quickSort = (arr,left,right) =>{
  let len = arr.length;
  partitionIndex;
  left = typeof left != 'number' ? 0 : left;
  right = typeof right != 'number' ? len-1 : right;

  if(left < right){
    partitionIndex = partition(arr, left, right);
		quickSort(arr, left, partitionIndex - 1);
		quickSort(arr, partitionIndex + 1, right);
  }
  return arr;
}

const quickSort = (arr,left,right) =>{
  let len = arr.length;
  partitionIndex;
  left = typeof left != 'number' ? 0 : left;
  right = typeof right != 'number' ? len-1 : right;
  if(left < right){
    partitionIndex = partition(arr,left,right);
    quickSort(arr,left,partitionIndex -1);
    quickSort(arr,partitionIndex + 1,right);
  }
  return arr;
}

const partition = (arr, left, right) => {
	//分区操作
	let pivot = left, //设定基准值(pivot)
		index = pivot + 1;
	for (let i = index; i <= right; i++) {
		if (arr[i] < arr[pivot]) {
			swap(arr, i, index);
			index++;
		}
	}
	swap(arr, pivot, index - 1);
	return index - 1;
};

const swap = (arr, i, j) => {
	let temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
};
if(arr[j] > arr[j+1]){
  let temp = arr[j];
  arr[j] = arr[j+1];
  arr[j+1] = temp;
}

// 实现深拷贝
function cloneDeep1(source) {
      var target = {};
      for(var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
              if (typeof source[key] === 'object') {
                  target[key] = cloneDeep1(source[key]); // 注意这里
              } else {
                  target[key] = source[key];
              }
          }
      }
      return target;
  }


  let obj = {
    b:'123',
    c:'456',
    d:'789'
  }
  for(let key in obj){
    console.log(key)
  }

  let arr = ['a','b','c']
  for(let key of arr){
    console.log(key)
  }

let obj = {
  a:'123',
  b:null,
  c:undefined,
  d:function(a){
    return a
  },
  e:[1,'234',56,'888','a']
}
  /**
   * @description: @description
   * @param {*} source
   * @return {*}
   */
  function deepClone(source){
    let target = {};
    for (let key in source){
      if(Object.prototype.hasOwnProperty.call(source,key)){
        if(typeof source[key] === 'object'){
          target[key] = deepClone(source[key])
        }else{
          target[key] = source[key]
        }
      }
    }
    return target;
  }
  console.log(deepClone(obj))

console.log(JSON.parse(JSON.stringify(obj)))

// es6扩展运算符实现深拷贝
// slice实现深拷贝
// concat实现深拷贝

