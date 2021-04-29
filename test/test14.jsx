/*
 * @,@Author: ,: your name
 * @,@Date: ,: 2020-12-16 11:05:03
 * @LastEditTime: 2021-03-30 22:10:26
 * @LastEditors: sueRimn
 * @,@Description: ,: In User Settings Edit
 * @,@FilePath: ,: \test\test14.jsx
 */

//  React hooks
class Demo extends React.Component{
  constructor(props){
  super(props)
  this.state = {
  count:1
  }
  }
  handleClick = ()=>{
  this.setState({
  count:this.state.count+1
  })
  }
  render(){
  return <div>
  <h2 onClick={this.handleClick}>{this.state.count}</h2>
  </div>
  }
 }
 Demo = React.useComponent(Demo)

 class Demo extends React.Component {
   constructor(props){
     super(props)
     this.state = {
       count:1
     }
   }
   handleClick = () =>{
     this.setState({
       count:this.state.count+1
     })
   }
   render(){
     return <div>
       <h2 onclick={this.handleClick}>{this.state.count}</h2>
     </div>
   }
 }
 Demo = React.useComponent(Demo)

//  fibers
// 我们有了调度逻辑，之前的dom结构是一个树形结构，他的diff过程是没法中断的。为了管理我们vdom树之间的关系，我们需要把树形结构的内部关系，改造成链表之前只是children作为一个数组递归遍历，现在父 =》 子，子 =》 父，子 =》 兄弟，都有关系。

// React核心api
const React = {
  children:{
    map,
    foreach,
    count,
    toArray,
    only
  },
  createRef,
  component,
  pureComponent,
  createContext,
  forwardRef,
  lazy,
  memo,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useReducer,
  useState
}
export default React;

const React = {
  createElement,
  component
}
// react-dom主要是render逻辑

// 最核心的api：
// React.createElement:创建虚拟DOM
// React.Component:实现自定义组件
// React.render:渲染真实DOM

class App extends React.Component{
  render(){
    return(){
      <div>
        Hello {this.props.name},I am {2+2} years old
      </div>
    }
  }
}
ReactDOM.render(
  <APP name="React"/>,
  mountNode
)

import { node } from 'prop-types'
// jsx预处理后:
// class App extends React.Component {
//   render(
//     return React.createElement (
//       "div",
//       null,
//       "Hello",
//       this.props.name,
//       ",I am",
//       2+2,
//       "years old"
//     )
//   )
// }
// ReactDOM.render(React.createElement(App,{name:"React"}),mountNode)

// 构建的vdom用js对象形式来描述dom树结构---一一对应

// 实现三大接口：React.createElement,React.Component,ReactDOM.render

// render
// kreact-dom需要提供一个render函数，能够将vdom渲染出来，这里先打印vdom


// jsx

// function createElement(type, props,...children){
//   props.children = children;
//   return {type,props}
//   }
//   export default {createElement}


function createElement(type,props,...children){
  props.children = children;
  return {type,props}
}
export default {createElement}

// function render(vnode, container){
//   container.innerHTML = `<pre>${JSON.stringify(vnode,null,2)}</pre>`
//   }
//   export default {render}


import {initvnode} from './kvdom'
function render(vnode,container){
  const node = initvnode(vnode);
  container.appendchild(node);
  container.innerHTML = `<pre>${JSON.stringify(vnode,null,2)}</pre>`
}
  

class comp2 extends component{
  render(){
    const users = [{id:1,name:'tom'},{id:2,name:'jerry'}]
    return (
      <div>
        <h2>hi {this.props.name}</h2>
        <ul>
          {users.map(user=>(<li key={user.id}>{user.name}</li>))}
        </ul>
      </div>
    )
  }
}


class comp2 extends component {
  render(){
    const users = [{id:1,name:'tom'},{name:'jerry'}]
    return (
      <div>
        <h2>hi {this.props.name}</h2>
        <ul>
          {users.map(user =>(<li key={user.id}>{user.name}</li>))}
        </ul>
      </div>
    )
  }
}

children.forEach(c=>{
  if(Array.isArray(c)){
    c.forEach(n => {
      node.appendchild(initvnode(n));
    });
  }else{
    node.appendchild(initvnode(c));
  }
})

children.forEach(c=>{
  if(Array.isArray(c)){
    c.forEach(n=>{
      node.appendchild(initvnode(n));
    })
  }else{
    node.appendchild(initvnode(c));
  }
})


// pureComponent
// 继承component，主要是设置了shouldComponentUpdate生命周期，让shouldComponentUpdate中的nextProps和nextState一致
import shallowEqual from './shallowEqual'
import Component from './Component'
export default function PureComponent(props, context) {
  Component.call(this, props, context)
}
PureComponent.prototype = Object.create(Component.prototype)
PureComponent.prototype.constructor = PureComponent

PureComponent.prototype.isPureReactComponent = true
PureComponent.prototype.shouldComponentUpdate = shallowCompare
function shallowCompare(nextProps, nextState) {
return !shallowEqual(this.props, nextProps) ||
 !shallowEqual(this.state, nextState)
}


export default function PureComponent(props,context){
  Component.call(this,props,context)
}
PureComponent.prototype = Object.create(Component.prototype)
PureComponent.prototype.constructor = PureComponent

PureComponent.prototype.isPureReactComponent = true
PureComponent.prototype.shouldComponentUpdate = shallowCompare
function shallowCompare(nextProps,nextState){
  return !shallowEqual(this.props,nextProps) || !shallowEqual(this.state,nextState)
}


setState
// class组件的特点，就是拥有特殊状态并且可以通过setState更新状态，从而重新渲染视图，是学习React中最重要的api。
// setState并没有直接操作区渲染，而是执行了一个异步的update队列 我们使用一个类来专门管理
  


// 虚拟dom
// 用javaScript对象表示DOM信息和结构，当状态变更的时候，重新渲染这个javaScript的对象结构。这个javaScript对象称为virtual dom;
// diff策略
// 同级比较，web UI中DOM节点跨层级的移动操作特别少，可以忽略不计。

// 拥有相同类的两个组件将会生成相似的树形结构，拥有不同类的两个组件将会生成不同的树形结构。

// 对于同一层级的一组子节点，它保证了整体界面构建的性能。

// React分别对tree diff,component diff以及element diff 进行算法优化，事实也证明这三个前提策略是合理且准确的，它保证了界面构建的性能

// 重排和重绘

// throw new Error('cannot render ${vnode} to container')
function renderTreeIntoContainer(vnode,container,callback,parentContext){
  if(!vnode.vtype){
    throw new Error('cannot render ${vnode} to container')
  }
  if(!isValidContainer(container)){
    throw new Error(`container ${container} is not a DOM element`)
  }
  let id = container[COMPONENT_ID] || (container[COMPONENT_ID] = _.getUid())
  let argsCache = pendingRendering[id]

  if(argsCache){
    if(argsCache === true){
      pendingRendering[id] = argsCache = {vnode,callback,parentContext}
    }else{
      argsCache.vnode = vnode
      argsCache.parentContext = parentContext
      argsCache.callback = argsCache.callback ? _.pipe(argsCache.callback,callback) : callback
    } 
    return
  }
}

function renderTreeIntoContainer(vnode,container,callback,parentContext){
  if(!vnode.vtype){
    throw new Error('cannot render ${vnode} to container')
  }
  if(!isValidContainer(container)){
    throw new Error(`container ${container} is not a DOM element`)
  }
  let id = container[COMPONENT_ID] || (container[COMPONENT_ID] = _.getUid())
  let argsCache = pendingRendering[id]
  if(argsCache){
    if(argsCache === true){
      pendingRendering[id] = argsCache = {vnode,callback,parentContext}
    }else{
      argsCache.vnode = vnode
      argsCache.parentContext = parentContext
      argsCache.callback = argsCache.callback ? _.pipe(argsCache.callback,callback) : callback
    }
    return
  }
}


// 手机按照750px进行设计，电脑按照1100-1200px进行设计

// 重排Reflow和重绘Repaint的区别?
// 重绘不一定重排，如颜色的改变;重排一定会导致重绘。

// 什么是回流?
// 当render tree 中的一部分(或全部)因为元素的规模尺寸。

// 但是靠浏览器不如靠自己，我们可以改变一些写法减去回流和重绘。
// 比如改变样式的时候，不去改变他们每个的样式，而是直接改变className就要用到cssText但是要注意有一个问题

// HTML的渲染过程
// HTML解析过程：构建DOM树、构建CSSDOM树、根据DOM树和CSSDOM树构建render树、有了render树就开始布局Layout、最后绘制paint。

// 1.构建DOM树
// 将HTML构建成一个DOM树，也就是构建节点，把所有的节点都构建出来。
// 2.构建CSSDOM树
// 解析css区构建CSSDOM树
// 3.构建render树
// DOM已经构建好了，css也有了，浏览器就会根据这两个来构造render树，浏览器就知道了有哪些节点、各个节点的CSS定义以及他们的从属关系。



// 既然重排了，最后当然得重新绘制页面。

// HTML整个解析过程看起来很简单，但是我们要知道解析过程中css、js和dom的加载顺序。我们都知道HTML是自上往下解析的，在解析过程中：

// 1、如果遇到link和style，那就就会去下载这些外部的css资源，但是css跟DOM的构建是并行的，就是说不会阻塞DOM树的构建。

// 2、如果遇到script，那么页面就会把控制权交给JavaScript，直到脚本加载完毕或者是执行完毕。

// 3、页面的渲染是依靠render树，也就是说如果css没有加载完成，页面也不会渲染显示。

// 4、JavaScript执行过程中有可能需要改变样式，所以css加载也会阻塞JavaScript的加载。

// 5、JavaScript执行过程中如果操作DOM，但是DOM树又是在JavaScript之后才能构建，就会报错，找不到节点。

// 这就是HTML的渲染过程，因为DOM和css并行构建，我们会把css用外部引入，可以更快的构建DOM，因为JavaScript会阻塞DOM和css构建，且操作DOM一定要在DOM构建完成，我们选择把script放在最下面。如果我们过多的在render渲染完成后改变render，那么重排和重绘就会一直被动重发执行，这也会造成渲染速度变慢。



