/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2021-04-20 10:40:21
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-04-29 10:12:47
 */
let l1 = [2,3,4];
let l2 = [5,6,7];
function code(l1,l2){
  let res1 = l1.reverse().join("");
  let res2 = l2.reverse().join("");
  let sum = (Number(res1) + Number(res2));
  return sum;
  console.log(sum);
}
let res = code(l1,l2);
console.log(res)
console.log(432+765)


function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <Avatar user={props.author} />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}

function User(props){
  return (
    <div className="userInfo">
     <Avatar user={props.user} />
     <UserInfo user={props.author}/>
     <img src={props.name} alt=""/>
    </div>
  )
}

// 组件无论是使用函数声明还是通过 class 声明，都决不能修改自身的 props
// 在不违反上述规则的情况下，state 允许 React 组件随用户操作、网络响应或者其他变化而动态更改输出内容。
// State 与 props 类似，但是 state 是私有的，并且完全受控于当前组件。


/**
 * @description: 给定一个字符串，请你找出其中不含有重复字符的最长子串的长度。
 * @param {*} s
 * @return {*}
 */
var lengthOfLongestSubstring = function(s) {
  var str = s[0];
  var max = 1;
  if(s == '')
  return 0;
  for(var i=1;i<s.length;i++){
      if(str.indexOf(s[i]) != -1){
          str = str.slice(str.indexOf(s[i]) + 1);
      }
      str += s[i];
      if(max < str.length){
          max = str.length;
      }
  }
  return max;
};

// promise.all  处理请求并发数
// promise.race   处理请求的超时时间