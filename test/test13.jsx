/*
 * @,@Author: ,: your name
 * @,@Date: ,: 2020-12-16 09:38:26
 * @LastEditTime: 2021-02-22 14:59:48
 * @LastEditors: sueRimn
 * @,@Description: ,: In User Settings Edit
 * @,@FilePath: ,: \test\test13.jsx
 */
import { func } from 'prop-types'
import React,{createElement, useState} from 'react'
import ReactDOM from 'react-dom'

function App(props){
  let [count,setCount] = useState(0)
  return <div>
    <h1>{props.title}</h1>
    <p>{count}</p>
    <button onclick={()=>setCount(count+1)}>add</button>
  </div>
}
ReactDOM.render(<App title="merlin"/>,document.getElementById('root'))
// 核心api大概就是jsx(createElement)render函数和组件

// jsx写起来像html,其实是babel把转义成React.createElement来执行，用来构建虚拟dom

// <h1 title="foo">123</h1>
// 解析成
React.createElement(
  'h1',
  {title:'foo'},
  '123'
)

// 这就是为什么用了jsx文件，必须要使用import 引入react的原因

// 我们知道createElement就是为了构建虚拟dom这种形式已经是组件化的最佳实践了，为什么需要jsx就需要用虚拟dom概念说起，简单来说，就是用js对象来描述真实的dom元素。

// 我们用js对象来描述dom
const element = {
  type:'h1',
  props:{
    title:'foo',
    children:'123'
  }
}

// 可以完整地描述dom，后续有任何的修改需求，只需更改这个虚拟dom，尽可能少的操作真实dom，就也是为什么虚拟dom性能良好的原因所在，两次操作之间会做diff算法，只做少的修改次数。

// render就是遍历这个对象，渲染dom即可，这个后续会封装render函数，从jsx到element对象，就是createElement函数需要做的

// element就是js对象，createElement函数就是有这个功能
const element = {
  type:'h1',
  props:{
    title:'foo',
    children:'123'
  }
}
const container = document.getElementById("root")
const node = document.createElement(element.type)
node["title"] = element.props.title
const text = document.createTextNode("")
text["nodeValue"] = element.props.children
node.appendChild(text)
container.appendChild(node)

// createElement 
// 构建虚拟dom，如果嵌套dom，比如使用这个jsx

// <div id="container">
//  <input value="foo" type="text" />
//  <a href="/bar"></a>
//  <span></span>
// </div>
会解析成
// React.createElement(
//   "div",
//   { id: "container" },
//   React.createElement("input", { value: "foo", type: "text" }),
//   React.createElement("a", { href: "/bar" }),
//   React.createElement("span", null)
//   )

// 期待转换成这个element对象
const element = {
  type: "div",
  props: {
  id: "container",
  children: [
  { type: "input", props: { value: "foo", type: "text" } },
  { type: "a", props: { href: "/bar" } },
  { type: "span", props: {} }
  ]
  }
 };

// createElement就是把jsx通过babel等转换成element对象
 /**
 *
 * @param {str|function} 类型，是字符串div 还是函数
 * @param {*} jsx传递的属性
 * @param {...any} ⼦元素
 */
function createElement(type, props, ...children) {
  delete props.__source
  delete props.__self
  return {
  type,
  props: {
  ...props,
  children,
  },
  }
 }

// render函数的作用就是把虚拟dom渲染成真实的dom结构
 function render(vdom, container){
  container.innerHTML = "<pre>"+JSON.stringify(vdom,null,2)+"</pre>"
 }
 export default {
  createElement,
  render
 }

 function createElement(type,props,...children){
   return {
     type,
     props:{
       ...props,
       children:children.map(child => typeof child === 'object' ? child : createTextElement(child))
     }
   }
 }

//  function createElement(type,props,...children){
//    return {
//      type,
//      props:{
//        ...props,
//        children:children.map(child => typeof child === 'object' ? child:createTextElement(child))
//      }
//    }
//  }

 function createElement(type,props,...children){
   return {
     type,
     props:{
       ...props,
       children:children.map(child => typeof child === 'object' ? child : createTextElement(child))
     }
   }
 }

//  假如是文本类型创建dom
 function createTextElement(text){
   return {
     type:'TEXT',
     props:{
       nodeValue:'text',
       children:[]
     }
   }
 }

//  function createTextElement(text){
//    return {
//      type:'TEXT',
//      props:{
//        nodeValue:'text',
//        children:[]
//      }
//    }
//  }

//  现在的render只是简单的渲染一个对象，我们需要转成真实的dom渲染，这一步没啥特别的 就是挨个遍历  创建dom然后appendChild
function render(vdom,container){
  const dom = vdom.type === 'TEXT' ? document.createTextNode("") : document.createElement(vdom.type)

  Object.keys(vdom.props).forEach(name => {
    if(name != 'children'){
      dom[name] = vdom.props[name]
    }
  })
  vdom.props.children.forEach(child =>render(child,dom))
  container.appendChild(dom)
}


function render(vdom,container){
  const dom = vdom.type === 'TEXT' ? document.createTextNode("") : document.createElement(vdom.type)

  object.keys(vdom.props).forEach(name =>{
    if(name != 'children'){
      dom[name] = vdom.props[name]
    }
  })
  vdom.props.children.forEach(child =>render(child,dom))
  container.appendChild(dom)
}

function render(vdom,container){
  const dom = vdom.type === 'TEXT' ? document.createTextNode("") : document.createElement(vdom.type)
  object.keys(vdom.props).forEach(name =>{
    if(name != 'children'){
      dom[name = vdom.props[name]]
    }
  })
  vdom.props.children.forEach(child=>render(child,dom))
  container.appendChild(dom)
}


function render(vdom,container){
  const dom = vdom.type === 'TEXT' ? document.createTextNode("") : document.createElement(vdom.type)
  Object.keys(vdom.props).forEach(name =>{
    if(name != 'children'){
      dom[name] = vdom.props[name]
    }
  })
  vdom.props.children.forEach(child =>render(child,dom))
  container.appendChild(dom)
}

// concurrent   并存的

// 注意上面的render，一旦开始，就开始递归，本身这个没啥问题，但是如果应用变得庞大后，会有卡顿，后面状态修改后的diff也是一样，整个vdom对象变大后，diff过程也有会递归过多导致的卡顿。
// 那么咋解决这个问题呢?
// 浏览器又一个api requestIdleCallback可以利用浏览器的业余时间，我们可以把任务分成一个个小人物，然后利用浏览器空闲时间来做diff，如果当前有任务来了，比如用户的点击或者动画，会先执行，然后空闲后，再回去把requestIdleCallback没完成的任务完成。

// requestIdleCallback(myNonEssentialWork);

function scedule (deadline) {
  // 如果帧内有富余的时间，或者超时 参数是requestIdleCallback传递的
  while ((deadline.timeRemaining() > 0) &&
  tasks.length > 0)
  doWorkIfNeeded();
  if (tasks.length > 0)
  requestIdleCallback(myNonEssentialWork);
 }

 let nextUnitOfWork = null
function workLoop(deadline) {
 // 有任务，并且当前帧还没结束
 while (nextUnitOfWork && deadline.timeRemaining()>1) {
 // 获取下⼀个任务单元
 nextUnitOfWork = performUnitOfWork(
 nextUnitOfWork
 )
 }
 requestIdleCallback(workLoop)
}
requestIdleCallback(workLoop)
function performUnitOfWork(nextUnitOfWork) {
 // ⼲活的代码
}
// 当然react已经重写了调度逻辑，不⽤requestIdleCallback了，但是过程是⼀致的


// fibers
// fibers Tree

/** 创建dom， 根据vdom or fiber */
function createDom(vdom){
  const dom = vdom.type == "TEXT"
  ? document.createTextNode("")
  : document.createElement(vdom.type)
  // 设置属性
  Object.keys(vdom.props)
  .forEach(name => {
  if(name!=="children"){
  dom[name] = vdom.props[name]
  }
  })
  return dom
 }
 function render(vdom, container){
  // 设置全局 nextUnitOfWork
  nextUnitOfWork = {
  dom: container,
  props: {
  children: [vdom],
  },
  }
 }

//  显然render后 有了全局nextUnitOfWork
// 显然render后，有了全局nextUnitOfWork

// 我们给dom添加节点的时候，如果渲染的过程中，被打断的，ui渲染会变得很奇怪，所以我们应该把dom操作独立出来，我们用一个全局变量来存储正在工作的fiber根节点

// 函数组件
// 函数也是一样的，只不过type是函数，而不是字符串，我们需要在处理vdom的时候识别出和普通dom的区别
// 1.根据type执行不同的函数来初始化fiber
// 2.函数组件没有dom属性


// 函数组件
// 函数也是一样的，只不过type是函数，而不是字符串，我们需要在处理vdom的时候识别出和普通dom的区别

// 根据type执行不同的函数来初始化fiber
// 函数组件没有dom属性
