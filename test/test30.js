/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2021-02-26 14:26:19
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-02-26 18:04:51
 */
var b=1;
function outer(){
  var b=2;
  function inner(){
    b++;
    console.log(b);
    var b=3;
  }
  inner();
}
outer(); //NAN   为什么是输出NaN,表示没看懂


