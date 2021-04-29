/*
 * @,@Author: ,: your name
 * @,@Date: ,: 2020-12-18 11:29:27
 * @LastEditTime: 2021-02-23 09:32:12
 * @LastEditors: sueRimn
 * @,@Description: ,: In User Settings Edit
 * @,@FilePath: ,: \test\test19.js
 */
// 闭包
// 闭包函数:声明在一个函数中的函数，叫做闭包函数
// 闭包：内部函数总是可以访问其所在的外部函数中声明的参数和变量，即使在其外部函数被返回（寿命终结）了之后。

/**
 * @description: @description
 * @param {*}
 * @return {*}
 */
function outerFn(){
  var i = 0; 
  function innerFn(){
      i++;
      console.log(i);
  }
  return innerFn;
}
var inner = outerFn();  //每次外部函数执行的时候,都会开辟一块内存空间,外部函数的地址不同，都会重新创建一个新的地址
inner();
inner();
inner();
var inner2 = outerFn();
inner2();
inner2();
inner2();   //1 2 3 1 2 3


var counter = (function(){
  var privateCounter = 0;
  function changeBy(val){
    privaterCounter += val;
  }
  return {
    increment:function(){
      changeBy(1)
    },
    decrement:function(){
      changeBy(1)
    },
    value:function(){
      return privateCounter;
    }
  }
})()

typeof null //'object'
typeof undefined //'undefined'
null === undefined  //false
null == undefined //true
null === null //true
null == null //true
!null //true


// 一个函数如果没有使用return语句指定返回值，就会返回一个undefined值。

function test(a){
  console.log(typeof a)
  return a;
}
test()


// 3. 在pascal中比较容易理解，容易计算的方法是：看看有几重for循环，只有一重则时间复杂度为O(n)，二重则为O(n2)，依此类推，如果有二分则为O(logn)，二分例如快速幂、二分查找，如果一个for循环套一个二分，那么时间复杂度则为O(nlogn)。

// 4. 按数量级递增排列，常见的时间复杂度有：（常对线，线对，平立指）
// 常数阶O(1)、对数阶O(log2n)、线性阶O(n)、线性对数阶O(nlog2n)、平方阶O(n2) 立方阶O(n3) … k次方阶O(nk)、指数阶O(2n) 。随着问题规模n的不断增大，上述时间复杂度不断增大，算法的执行效率越低。

// c < log2n < n < nLog2N < n2 < n3 < 2n < 3n < n!

//5. 其中c是一个常量，如果一个算法的复杂度为c 、 log2n 、n 、 nlog2N ,那么这个算法时间效率比较高 ，如果是 2n、3n、n!，那么稍微大一些的n就会令这个算法不能动了，居于中间的几个则差强人意。


//算法网址: http://ddrv.cn/docs/SortingAlgorithm/6.quickSort.html




