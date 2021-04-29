/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2020-12-29 10:29:30
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-02-02 16:12:10
 */

function outerFn(){
  var i = 0; 
  function innerFn(){
      i++;
      console.log(i);
  }
  return innerFn;
}
let res = outerFn();

// function outerFn(){
//   var i = 0;
//   function innerFn(){
//     i++;
//     console.log(i);
//   }
//   return innerFn;
// }
// let res = outerFn();
