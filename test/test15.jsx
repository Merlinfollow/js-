import { PureComponent } from "react";

/*
 * @,@Author: ,: your name
 * @,@Date: ,: 2020-12-16 16:41:44
 * @LastEditTime: 2021-02-03 10:17:06
 * @LastEditors: sueRimn
 * @,@Description: ,: In User Settings Edit
 * @,@FilePath: ,: \test\test15.jsx
 */
PureComponent
// 定制了shouldComponentUpdate后的component(浅比较)
class Comp extends React.PureComponent{}

// 实现原理
import shallowEqual from './shallowEqual'
import Component from './Component'
import { func, object } from "prop-types";
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

export default function shallowEqual(objA,objB){
  if(objA === objB){
    return true
  }
  if(typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null){
    return false
  }
  var keysA = Object.keys(objA)
  var keysB = Object.keys(objB)
  if(keysA.length !== keysB.length){
    return false
  }
  for(var i = 0;i<keysA.length;i++){
    if(!objB.hasOwnProperty(keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]){
      return false
    }
  }
  return true
}

// 可以使用React.memo让函数式的组件也有pureComponent的功能
const joke = React.memo(() => {
  <div>
    {this.props.value || 'loading...'}
  </div>
})

// 高阶组件
// 高阶组件也是一个组件，但是他返回另外一个组件，产生新的组件可以对属性进行包装，甚至重写部分生命周期
const aa = (component) => {
  const newcomponent = (props) =>{
    return <Component {...props} name="高阶组件123" />
  }
  return newcomponent;
}

// 高阶组件最巧妙的一点是可以链式调用
import React,{component} from 'react'
import {Button} from 'antd'
import React, { Component } from 'react'
import {Button} from 'antd'
const withKaikeba = (Component) => {
const NewComponent = (props) => {
return <Component {...props} name="开课吧高阶组件" />;
};
return NewComponent;
};
const withLog = Component=>{
class NewComponent extends React.Component{
render(){
return <Component {...this.props} />;
}
componentDidMount(){
console.log('didMount',this.props)
}
}
return NewComponent
}
class App extends Component {
  render() {
  return (
    <div className="App">
      <h2>hi,{this.props.name}</h2>
      <Button type="primary">Button</Button>
    </div>
   )
  }
}
export default withKaikeba(withLog(App))


// 使用装饰器

import React, { Component } from 'react'
import {Button} from 'antd'
const withKaikeba = (Component) => {
const NewComponent = (props) => {
return <Component {...props} name="开课吧高阶组件" />;
};
return NewComponent;
};
const withLog = Component=>{
class NewComponent extends React.Component{
render(){
return <Component {...this.props} />;
}
componentDidMount(){
console.log(Component.name ,'didMount',this.props)
}
}
return NewComponent
}
@withKaikeba
@withLog

class App extends Component {
render() {
  return (
  <div className="App">
    <h2>hi,{this.props.name}</h2>
    <Button type="primary">Button</Button>
  </div>
  )
}
}

// 组件跨层级通信 - 上下文
// 组件跨层级通信可使用Context
// 这种模式下有两个角色，Provider和Consumer
// Provider为外层组件，用来提供数据;内部需要数据时用Consumer来读取.

const FormContext = React.createContext()
const FormProvider = FormContext.Provider
const FormConsumer = FormContext.Consumer
let store ={
name:'开课吧',
sayHi(){
console.log(this.name)
}
}
let withForm = Component=>{
const NewComponent = (props) => {
return <FormProvider value={store}>
<Component {...props} />
</FormProvider>
};
return NewComponent;
}
@withForm
class App extends Component {
render() {
return <FormConsumer>
{
store=>{
return <Button onClick={()=>store.sayHi()}>
{store.name}
</Button>
}
}
</FormConsumer>
}
}


React.createElement
class Comp extends React.PureComponent {}

// PureComponent
// 组件的跨层级通信

