/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2020-12-16 18:13:51
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-02-25 17:42:58
 */

// 1.判断一个单词是回文
/**
 * @description: reverseWord
 * @param {string} str
 * @return {string}str
 */
function reverseWord(str){
  return str === str.split('').reverse().join('') ? str : '错误'
}

console.log(reverseWord('redivider'));

// 2.去掉一组整型数组重复的值


// 3.二维数组的全排列组合

/**
 * @Descripttion: 
 * @param {*} arr
 * @param {*} n
 * @param {*} res
 * @return {*}
 */
function printArr(arr,n,res){
  for(var i=0;i<arr[i].length;i++){
    if(n==0){
      res = []
    }
    if(n<arr.length){
      var _res = res.slice()
      _res.push(arr[n][i])
      if(n == arr.length -1){
        console.log(_res)
      }else{
        printArr(arr,n+1,_res)
      }
    }
  }
}

/**
 * @Descripttion: 
 * @param {*} arr
 * @param {*} n
 * @param {*} res
 * @return {*}
 */
function printArr(arr,n,res){
  for(var i=0;i<arr[i].length;i++){
    if(n==0){
      res = []
    }
    if(n<arr.length){
      var _res = res.slice()
      _res.push(arr[n][i])
      if(n==arr.length-1){
        console.log(_res)
      }else{
        printArr(arr,n+1,_res)
      }
    }
  }
}


function step(n,res){
  if(n==0){
    res = []
  }
  var i = 1;
  while(i<3){
    if(n+i<=10){
      var _res = res.slice()
      _res.push(i)
      if(n+i == 10){
        console.log(_res)
      }else{
        step(n+i,_res)
      }
    }
    i++
  }
}
step(0)


throw new Error('错误了1111')


try {
  console.log("欢迎光临！");
}
catch(err) {
  console.log(err.message)
}


try{
  // (此处有几百行的代码)
}catch(e){
  // empty
}


try{
  // console.log('123')
  1==='1'
}catch(e){
  // console.log('111',throw new Error(e))
}


try{
  let arr = ['first','second','third','fourth']
  arr.forEach((item,index) =>{
    if(item === 'third'){
      throw new Error('ending') //这里抛出的错误会被catch放在e.message中，包括try{}代码错误会被自动catch
    }
  })
}catch(e){
  //这里不能写throw语句
  if(e.message != 'ending'){
    

  }
}


// 冒泡排序
let arrs = [1,2,4,8,12,24,5,3,66,11,7]
for(let i=0;i<arrs.length-1;i++){
  for(let j=0;j<arrs.length-1-i;j++){
    if(arrs[j] > arrs[j+1]){
      var temp = arrs[j]
      arrs[j] = arrs[j+1]
      arr[j+1] = temp
    }
  }
}

var arr = [2,3,88,21,0,36,1,76,12];
/**
 * @description: @description
 * @param {object} arr
 * @return {*}
 */
function bubbleSort (arr) {
  for (var j = 0; j < arr.length - 1; j++) {
    // 这里要根据外层for循环的 j，逐渐减少内层 for循环的次数
    for (var i = 0; i < arr.length - 1 - j; i++) {
      if (arr[i] > arr[i + 1]) {
        var temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
  }
  return arr;
}
let res = bubbleSort(arr)
console.log(res)


let arr = [100,12,66,3, 4, 1,0, 2];
function bubbleSort (arr) {
  let max = arr.length - 1;
  for (let j = 0; j < max; j++) {
    // 声明一个变量，作为标志位
    let done = true;
    for (let i = 0; i < max - j; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        done = false;
      }
    }
    if (done) {
      break;
    }
  }
  return arr;
}
let res = bubbleSort(arr);
console.log(res)


let arr3 = [1,2,0,145,22,12,6,8,121]
function sort(arr){
  let max = arr.length -1;
  for(let j=0;j<max;j++){
    var done = true;
    for(let i=0;i<max-j;i++){
      if(arr[i] > arr[i+1]){
        let temp = arr[i]
        arr[i] = arr[i+1]
        arr[i+1] = temp
        done = false;
      }
    }
    if(done){
      break
    }
  }
  return arr
}
let res = sort(arr3)
console.log(res)

// 时间复杂度： 平均时间复杂度O(n*n) 、最好情况O(n)、最差情况O(n*n)
// 空间复杂度： O(1)
// 稳定性： 稳定

// 时间复杂度指的是一个算法执行所耗费的时间
// 空间复杂度指运行完一个程序所需内存的大小
// 稳定指，如果a=b,a在b的前面，排序后a仍然在b的前面
// 不稳定指，如果a=b，a在b的前面，排序后可能会交换位置


// 查重
let arr = [1,2,3,1,56,21,23,12,2,15,12,56]
function double(arr){
  for(let j=0;j<arr.length;j++){
    for(let i=j+1;i<arr.length;i++){
      if(arr[j] == arr[i]){
        console.log(arr[j])
      }
    }
  }
  return arr
}
let res = double(arr)
console.log(res)

let unique = function(arr) { let hashTable = {}; let data = []; for(let i=0,l=arr.length;i<l;i++) { if(!hashTable[arr[i]]) { hashTable[arr[i]] = true; data.push(arr[i]); } } return data }


let arr = [1,13,24,11,11,14,1,2];
function unique(arr){
  let hashTable = {};
  let data = [];
  for(let i=0,l=arr.length;i<l;i++){
    if(!hashTable[arr[i]]){
      hashTable[arr[i]] = true;
      data.push(arr[i]);
    }
  }
  return data;
}

// typeof只能判断基本类型,即是number,string,undefined,boolean,object,function六种
// 对于数组、null、对象来说，其关系错综复杂，使用 typeof 都会统一返回 “object” 字符串。
// 要想区别对象、数组、函数单纯使用 typeof 是不行的，JavaScript中,通过Object.prototype.toString方法，判断某个对象值属于哪种内置类型。

// let arr = [1,2];
// arr.toString();//"1","2"
// 通过call指定arr数组为Objectypeof.prototype对象中的toString方法上下文
// Object.prototype.toString.call(arr);"[object Array]"


// typeof 只能判断简单的类型
// function isArray(arr){
//   return Object.prototype.toString.call(arr) === '[object Array]'
// }

// 打包压缩，抽离公共代码，优化





console.log(typeof {a:1,a:2,c:3}) //object
console.log(typeof [1,2,3,4,5]) //object
console.log(typeof 123) //number
console.log(typeof "123") //string
console.log(typeof undefined) //undefined
console.log(typeof true) //boolean
console.log(typeof function a(){}) //function
// 由此可知用typeof无论是判断对象还是数组返回的结果都是object

// apply(),call()

function add(c,d){
  return this.a + this.b + c + d
}
var s = {a:1,b:2}
console.log(add.call(s,3,4))
console.log(add.apply(s,[5,6]))


console.log(log(2^100))



//二分法查找
function halfSearch(arr,number){
  let min =0;  //最小下标
  let max =arr.length-1;   //最大下标
  let mid = 0;  //中间下标
  while (min<max){
      //没找到,更新范围继续找
      mid = (min+max)/2;
      if (arr[mid]>number){   //number在mid的左边
          max = mid-1;  //改变最大下标
      }else if(arr[mid]<number){  //number在mid的右边
          min = mid+1;  //改变最小下标
      }else{
          return  arr[mid];
      }
  }
  return -1;
}
let arr = [1,4,5,23,34,123,2,342]
let res = halfSearch(arr,5)
console.log(res)


function search(arr,key) {
  var low=0,
      high=arr.length-1;      //定义一个最高点和最低点
  while (low<=high){          //当最高点大于最低点的时候
      var mid=Math.floor((high+low)/2);   //挑一个中间数
      if (arr[mid]==key){return mid;}     //如果中间数等于查找的值，返回这个中间数的位置
      else if (arr[mid]<key){
          low=mid+1;      //中间值小于查找的值的话，将查找的数列段的最低点变成中点+1
      }
      else if (arr[mid]>key){
           high=mid-1;    //大于的话最高点变成中点-1
      }
      else {
          return -1;      //否则返回-1
      }
  }
}
let arr = [1,4,5,23,34,123,2,342]
let res = search(arr,5)
console.log(res)


let arr = [1,4,5,23,34,123,2,342]
let res = arr.sort((a,b) =>{
  return a-b
})
console.log(res)

// 语法：array.sort(fun)；参数fun可选。规定排序顺序。必须是函数。
// 注：如果调用该方法时没有使用参数，将按字母顺序对数组中的元素进行排序，说得更精确点，是按照字符编码的顺序进行排序。

// 如果想按照其他规则进行排序，就需要提供比较函数，该函数要比较两个值，然后返回一个用于说明这两个值的相对顺序的数字。比较函数应该具有两个参数 a 和 b，其返回值如下：
// 若 a 小于 b，在排序后的数组中 a 应该出现在 b 之前，则返回一个小于 0 的值。
// 若 a 等于b，则返回 0。
// 若 a 大于 b，则返回一个大于 0 的值。
// 简单点就是：比较函数两个参数a和b，返回a-b 升序，返回b-a 降序
//注：原数组发生改变


var arr=[1,3,10,4,2];
function compare(value1,value2) {
    if(value1<value2){return -1;}
    else if(value1>value2){return 1;}
    else {return 0}
}
arr.sort(compare);
console.log(arr)   //1,2,3,4,10


// 快速排序----阮一峰
let quickSort = function(arr){
  if(arr.length <= 1){
    return arr
  }
}


// 封装

// 继承
// 构造函数的继承   extend函数
// 原型prototype上继承

// 非构造函数的继承
// 深拷贝实现继承


// let const 出现了暂存性死区，导致typeof不是100%安全了


console.log(typeof a) //不声明直接使用是undefined，但是使用了再声明会报错ReferenceError: a is not defined
let a
// 不能重复声明

let {log,sin,cos} = Math;
const {log} = console;
log('hello') //hello




function deduplicate(arr){
  return Array.from(new Set(arr));
}

function deduplicate(arr){
  return Array.from(new Set(arr));
}

function getMaxCount(){

}

function randomInt(min,max){
  return Math.round(Math.random()*(max-min) + min)
}
console.log(randomInt(3,6))

console.log(Math.ceil(7.001))  //8
console.log(Math.floor(7.001)) //7



/**
 * @description: @description
 * @param {*} radixSort
 * @return {*}基数排序
 */
const radixSort = (array, max) => {
	console.time('计数排序耗时');
	const buckets = [];
	let unit = 10,
		base = 1;
	for (let i = 0; i < max; i++, base *= 10, unit *= 10) {
		for (let j = 0; j < array.length; j++) {
			let index = ~~((array[j] % unit) / base); //依次过滤出个位，十位等等数字
			if (buckets[index] == null) {
				buckets[index] = []; //初始化桶
			}
			buckets[index].push(array[j]); //往不同桶里添加数据
		}
		let pos = 0,
			value;
		for (let j = 0, length = buckets.length; j < length; j++) {
			if (buckets[j] != null) {
				while ((value = buckets[j].shift()) != null) {
					array[pos++] = value; //将不同桶里数据挨个捞出来，为下一轮高位排序做准备，由于靠近桶底的元素排名靠前，因此从桶底先捞
				}
			}
		}
	}
	console.timeEnd('计数排序耗时');
	return array;
};