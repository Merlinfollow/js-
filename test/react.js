/*
 * @Author: your name
 * @Date: 2021-04-25 14:51:51
 * @LastEditTime: 2021-04-29 10:21:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test\test\react.js
 */


//组件通过props来传递值

// ctrl + alt + p    添加多行块级注释
// ctrl + shift + p  查找最近文件
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




// 给 setState 传递一个对象与传递一个函数的区别是什么？

  function incrementCount() {
    this.setState((state) => {
      // 重要：在更新的时候读取 `state`，而不是 `this.state`。
      return {count: state.count + 1}
    });
  }
  
  function handleSomething() {
    // 假设 `this.state.count` 从 0 开始。
    this.incrementCount();
    this.incrementCount();
    this.incrementCount();
    // 如果你现在在这里读取 `this.state.count`，它还是会为 0。
    // 但是，当 React 重新渲染该组件时，它会变为 3。
  }
