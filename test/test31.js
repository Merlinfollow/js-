/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2021-03-04 09:40:41
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-03-30 22:10:47
 */
import React from 'react';

const TodoStore = {
  todos:[
    {id:uuid.v4(),content:'first one'},
    {id:uuid.v4(),content:'2nd one'}
  ]
}

let next = store.dispatch;

store.dispatch = function dispatchAnLog(action){
  console.log('dispatching',action);
  let result = next(action);
  return result;
}
store.dispatch(addTodo('Use Resux'));

function Counter(props){
  return (
    <p>{props.num}
      <button onClick={props.onBtnClick}>+1</button>
    </p>
  )
}
export default connect(mapStateToProps,mapDispatchToProps)(Counter);

function Counter(props){
  return (
    <p>
      {props.num}
      <button onClick={props.onBtnClick}>+1</button>
    </p>
  )
}

function counter(props){
  return (
    <p>
     {props.num}
     <button onClick={props.onBtnClick}>+1</button>
    </p>
  )
}

function counter(props){
  return (
    <p>
     {props.num}
     <button onClick={props.onBtnClick}>+1</button>
    </p>
  )
}


function width(el) { 
  const styles = el.ownerDocument.defaultView.getComputedStyle(el, null); 
  const width = parseFloat(styles.width.indexOf('px') !== -1 ? styles.width : 0); 
  const boxSizing = styles.boxSizing || 'content-box'; 
  if (boxSizing === 'border-box') { 
  return width; 
  } 
  const borderLeftWidth = parseFloat(styles.borderLeftWidth); 
  const borderRightWidth = parseFloat(styles.borderRightWidth); 
  const paddingLeft = parseFloat(styles.paddingLeft); 
  const paddingRight = parseFloat(styles.paddingRight); 
  return width - borderRightWidth - borderLeftWidth - paddingLeft - paddingRight; 
 }


 import React, { Component } from 'react';

//  import React from 'react'
//  import React.Component from 'react'
class App extends Component { 
  handleClick(e, arg) { 
  console.log(e, arg); 
  } 
  render() { 
  // 通过bind方法实现，可以传递参数
  return <button onClick={this.handleClick.bind(this, 'test')}>Test</button>; 
  } 
  render(){
    return <button onClick={this.handleClick.bind(this,'test')}>Test</button>
  }
 }


//  mixins   Object.assign()  extend 

import React, { Component } from 'react'; 
class MyInput extends Component { 
 constructor(props){ 
 super(props); 
 this.handleChange = this.handleChange.bind(this); 
 } 
 handleChange(e) { 
 this.props.update(e.target.value); 
 } 
 render() { 
 return <input onChange={this.handleChange} />; 
 } 
}

import React, { Component } from 'react'; 
import PureRenderMixin from 'react-addons-pure-render-mixin'; 
class NameItem extends Component { 
 constructor(props) { 
 super(props); 
 this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this); 
 } 
 render() { 
 return ( 
 <Item> 
 <span>Arcthur</span> 
 </Item> 
 ); 
 } 
}


// 我们把 key 设成了序号，这么做的确不会报警告了，但这是非常低效的做法。我们在生产环
// 境下常常犯这样的错误，这个 key 是每次用来做 Virtual DOM diff 的，每一位同学都用序号来更
// 新的问题是它没有和同学的唯一信息相匹配，相当于用了一个随机键，那么不论有没有相同的项，
// 更新都会重新渲染。
// 正确的做法也很简单，只需要把 key 的内容换成 sid 就可以了：

import React from 'react'; 
function Rank({ list }) { 
 return ( 
 <ul> 
 {list.map((entry, index) => ( 
 <li key={entry.sid}>{entry.name}</li> 
 ))} 
 </ul> 
 ); 
}

// 在开发过程中，尽量减少类似将最后一个节点移动到列表首部的操作。当节点数量过大
// 或更新操作过于频繁时，这在一定程度上会影响 React 的渲染性能。



// 与数据一样，修改数据的方法也是平淡无奇的方法，接受新的评论列表作为参数，并将它赋
// 给 store 中保存的 comment。
// 如果熟悉 Node 中模块的概念，会发现我们的 store 中没有导出任何内容。这意味着其他模块
// 在引入 store 时，将会得到 undefined。因此，我们的 store 需要一个统一的出口：
// store/CommentStore.js
import { EventEmitter } from 'events'; 
import assign from 'object-assign'; 
import { node } from 'prop-types';
const CommentStore = assign({}, EventEmitter.prototype, { 
 getComment() { 
 return comment; 
 }, 
 emitChange() { 
 this.emit('change'); 
 }, 
 addChangeListener(callback) { 
 this.on('change', callback); 
 }, 
 removeChangeListener(callback) { 
 this.removeListener(callback); 
 } 
});


// nth-last-child(2)  倒数第二个元素
// this node中的this是指global
// 水平垂直居中
// diff算法