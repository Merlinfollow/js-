/*
 * @,@Author: ,: your name
 * @,@Date: ,: 2020-12-10 11:31:29
 * @LastEditTime: 2021-02-03 11:42:25
 * @LastEditors: sueRimn
 * @,@Description: ,: In User Settings Edit
 * @,@FilePath: ,: \test\test11.jsx
 */
// 1.在回答这个问题之前，我们先来做一个假设；
// 如果setState是同步的，意味着每执行一次setState就会进行vnode diff+dom修改，
// 如果是异步，就可以把一个同步代码中的多个setState合并成一次组件更新；

// 2.setState什么时候是同步?
// 在setTimeOut或者原生事件中，setState是同步的


// setState什么时候是同步的?
// setTimeout或者是原生事件中，setState是同步的
// 3.setState什么时候是异步?
// 在React自定义事件中是异步

// 4.setState之后发生了什么?
// 在代码中setState之后，React会将传入的参数对象与组件当前状态合并，触发所谓的调和过程（Reconciliation）;
// 经过调和过程，React会以相对高效的方式根据新的状态构建React元素树并着手渲染ui界面；
// 在React得到新的元素树之后，会自动计算出新老树之间的结构差异，然后根据差异对界面进行最小化重渲染；
// 在差异算法中，React能够相对精确的计算出哪些位置发生了改变，做到按需加载而不用重新渲染整个界面

// 出现 XSS 漏洞本质上是输入输出验证不充分，React 在设计上已经很安全了，但是一些反模式的写法还是会引起安全漏洞。Vue 也是类似，Vue 做的安全措施主要也是转义，HTML 的内容和动态绑定的属性都会进行转义。无论使用 React 或 Vue 等前端框架，都不能百分百的防止 XSS 攻击，所以服务端必须对前端参数做一些验证，包括但不限于特殊字符转义、标签、属性白名单过滤等。一旦出现安全问题一般都是挺严重的，不管是敏感数据被窃取或者用户资金被盗，损失往往无法挽回。我们平时开发中需要保持安全意识，保持代码的可靠性和安全性。

// &lt;img src=&quot;empty.png&quot; onerror =&quot;alert(&#x27;xss&#x27;)&quot;&gt; 

// 这段代码是 React 在渲染到浏览器前进行的转义，可以看到对浏览器有特殊含义的字符都被转义了，恶意代码在渲染到 HTML 前都被转成了字符串，如下：

// React如何防止xss攻击,将字符进行转义，避免使用dangerouslySetInnerHTML

// 什么是纯函数？
// 返回值只和函数参数有关，与外部无关。无论外部发生什么样的变化，函数的返回值都不会改变。
// 函数执行过程中没有副作用

// 纯函数的概念：一个函数的返回结果只依赖其参数，并且执行过程中没有副作用。


// store文件夹下  index.js
// import { createStore } from 'redux' //引入createStore方法
// const store = createStore()    //创建数据存储仓库
// export default store   //暴露出去

// store文件夹下  Reducers
const defaultState = {} //默认数据
export default (state = defaultState,action) =>{
  return state
}

import { createStore } from 'redux'
import reducer from './reducer'
const store = createStore(reducer)
export default store

// 如何通过创建Action来改变Redux里state的值
// 如何修改store里的state的值

changeInputValue(e){
  const action = {
    type:'changeInput',
    value:e.target.value
  }
  store.dispatch(action)
}
// store的自动推送策略

// Reducer
export default (state = defaultState,action) =>{
  console.log(state,action)
  return state
}
// state指的是原始仓库里的状态
// action指的是action新传递的状态
// Reducer里只能接受state,不能改变state

export default(state = defaultState,action) =>{
  if(action.type === 'changeInput'){
    let newState = JSON.parse(JSON.stringify(state))//深度拷贝state
    newState.inputValue = action.value
    return new State
  }
  return state
}

constructor(props){
  super(props)
  this.state = store.getState();
  this.changeInputValue = this.changeInputValue.bind(this)
  this.storeChange = this.storeChange.bind(this)
  store.subscribe(this.storeChange) //订阅Reduc的状态
}

storeChange(){
  this.setState(store.getState())
}
// 改变组件和Redux里的状态

// <Button type="primary" onClick={this.clickBtn}>增加</Button>
constructor(props){
  super(props)
  this.state = store.getState();
  this.changeInputValue = this.changeInputValue.bind(this)
  this.storeChange = this.storeChange.bind(this)
  this.clickBtn = this.clickBtn.bind(this)
  store.subscribe(this.storeChange) //订阅Redux的状态
}

clickBtn(){
  const action = { type:'addItem' }
  store.dispatch(action)
}

// 这时候已经把action传递给了store,然后去Reducer里编写业务逻辑就可以了

export default (state = defaultState,action) =>{
  if(action.type == 'changeInput'){
    let newState = JSON.parse(JSON.stringify(state)) //深度拷贝state
    newState.inputValue = action.value
    return newState
  }
  //state值只能传递,不能使用
  if(action.type === 'addItem'){ // 根据type值,编写业务逻辑
    let newState = JSON.parse(JSON.stringify(state))
    newState.list.push(newState.inputValue) // push新的内容到列表中去
    newState.inputValue = ''
    return newState
  }
  return state
}

deleteItem(index){
  const action = {
    type:'deleteItem',
    index
  }
  store.dispatch(action)
}

if(action.type === 'deleteItem'){
  let newState = JSON.parse(JSON.stringify(state))
  newState.list.splice(action.index,1) //删除数组中对应的值
  return newState
}

// 写Redux Action的时候,我们写了很多Action的派发,产生了很多Action Types,如果需要Action的地方我们就自己命名一个Type,会出现两个基本问题:

// 在store下面创建一个actionTpes.js 文件,然后把Type集中进行管理
export const CHANGE_INPUT = 'changeInput'
export const ADD_ITEM = 'addItem'
export const DELETE_ITEM = 'deleteItem'

import { CHANGE_INPUT , ADD_ITEM , DELETE_ITEM } from './store/actionTypes'

changeInputValue(e){
  const action = {
    type:CHANGE_INPUT,
    value:e.target.value
  }
  store.dispatch(action)
}

clickBtn(){
  const action = { type:ADD_ITEM }
  store.dispatch(action)
}

deleteItem(index){
  const action = { type:DELETE_ITEM,index }
  store.dispatch(action)
}

import {CHANGE_INPUT,ADD_ITEM,DELETE_ITEM} from './actionTypes'

const defaultState = {
    inputValue : 'Write Something',
    list:[
        '早上4点起床，锻炼身体',
        '中午下班游泳一小时'
    ]
}
export default (state = defaultState,action)=>{
    if(action.type === CHANGE_INPUT){
        let newState = JSON.parse(JSON.stringify(state)) //深度拷贝state
        newState.inputValue = action.value
        return newState
    }
    //state值只能传递，不能使用
    if(action.type === ADD_ITEM ){ //根据type值，编写业务逻辑
        let newState = JSON.parse(JSON.stringify(state)) 
        newState.list.push(newState.inputValue)  //push新的内容到列表中去
        newState.inputValue = ''
        return newState
    }
    if(action.type === DELETE_ITEM ){ //根据type值，编写业务逻辑
        let newState = JSON.parse(JSON.stringify(state)) 
        newState.list.splice(action.index,1)  //push新的内容到列表中去
        return newState
    }
    return state
}

// 把actionCreatores.js引入到TodoList中
import { changeInputAction } from './store/actionCreatores'

changeInputValue(e){
  const action = changeInputAction(e.target.value)
  store.dispatch(action)
}

import {CHANGE_INPUT , ADD_ITEM,DELETE_ITEM}  from './actionTypes'
export const changeInputAction = (value)=>({
  type:CHANGE_INPUT,
  value
})

export const addItemAction = ()=>({
  type:ADD_ITEM
})

export const deleteItemAction = (index)=>({
  type:DELETE_ITEM,
  index
})




