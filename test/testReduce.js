/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2021-04-16 23:08:38
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-04-26 15:13:29
 */
/**
 * @description: 利用reduce对数组进行求和
 * @param {*}
 * @return {*}
 */
let arr = [1,2,3,4,5,2,3,6];
let sum = arr.reduce((prev,cur)=>{
  return prev + cur;
});
console.log(sum);


/**
 * @description: 利用reduce求数组最大的数
 * @param {*}
 * @return {*}
 */
let arr2 = [1,2,44,56,33,54,22,43];
let max = arr2.reduce((prev,cur) =>{
  return Math.max(prev,cur);
})
console.log(max)

/**
 * @description: 利用reduce对数组进行去重
 * @param {*}
 * @return {*}
 */
let arr3 = [1,2,3,4,2,45,4,1,77,33,77];
let newArr3 = arr3.reduce((prev,cur) =>{
  prev.indexOf(cur) === -1 && prev.push(cur);
  return prev;
},[])
console.log(newArr3)



/**
 * @description: 
 * @param {*} props
 * @return {*}
 */
function SplitPane(props) {
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">
        {props.left}
      </div>
      <div className="SplitPane-right">
        {props.right}
      </div>
    </div>
  );
}

function App() {
  return (
    <SplitPane
      left={
        <Contacts />
      }
      right={
        <Chat />
      } />
  );
}

// PC端设计稿尺寸  1440 * 900px
// 移动端设计稿尺寸  750 * 1334px  iphone6屏幕的两倍

// git使用命令  
// git checkout master
// git pull
// git checkout -b myfeature

// git提交
// git add.
// git status  review 发生改动的文件
// git commit -m "提交信息"

// 关键字 增加，修改，删除，更新，修复

// 每次提交前要与主干保持同步
// git fetch origin
// git rebase origin/master

// 推送当前分支到远程仓库
// git push origin myfeature


// less规范

// , :之前不能留有空格,之后要留一个空格
// 选择器和{ 之间必须保留一个空格;
// 当属性值为0时，必须省略可省的单位

// 同一属性有不同私有前缀的，建议按前缀长度降序书写，标准形式必须（MUST）写在最后。且这一组属性以第一条的位置为准，建议按冒号的位置对齐。
// ✓
// .box {
//   -webkit-transform: rotate(30deg);
//   -moz-transform: rotate(30deg);
//   -ms-transform: rotate(30deg);
//   -o-transform: rotate(30deg);
//   transform: rotate(30deg);
// }

// 在定义 mixin 时，如果 mixin 名称不是一个需要使用的 className，必须加上括号，否则即使不被调用也会输出到 CSS 中。

// .big-text() {
//   font-size: 2em;
// }
// h3 {
//   .big-text();
// }

// .box {
//   .clearfix();
//   .size(20px);
// }