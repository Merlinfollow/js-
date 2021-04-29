/*
 * @,@Author: ,: your name
 * @,@Date: ,: 2020-12-10 10:24:05
 * @LastEditTime: 2021-02-02 13:42:41
 * @LastEditors: sueRimn
 * @,@Description: ,: In User Settings Edit
 * @,@FilePath: ,: \test\test9.jsx
 */
class AutoFocusTextInput extends React.Component{
  constructor(props){
    super(props);
    this.textInput = React.createRef();
  }
  componentDidMount(){
    this.textInput.current.focusTextInput();
  }
  render(){
    return(
      <CustomTextInput ref={this.textInput} />
    )
  }
}

class AutoFocusTextInput extends React.Component{
  constructor(props){
    super(props);
    this.textInput = React.createRef();
  }
  componentDidMount(){
    this.textInput.current.focusTextInput();
  }
  render(){
    return <CustomTextInput ref={this.textInput}/>
  }
}

function MyFunctionComponent(){
  return <input />;
}
class Parent extends React.Component {
  constructor(props){
    super(props);
    this.textInput = React.createRef();
  }
  render(){
    return(
      <MyFunctionComponent ref={this.textInput}/>
    )
  }
}

function CustomTextInput(props){
  const textInput = useRef(null);
  function handleClick(){
    textInput.current.focus();
  }
  return(
    <div>
      <input
        type="text"
        ref={textInput} />
      <input
        type="button"
        value="Focus the text input"
        onClick={handleClick}
      />
    </div>
  )
}

class CustomTextInput extends React.Component {
  constructor(props){
    super(props);
    this.textInput = null;
    this.setTextInputRef = element => {
      this.textInput = element;
    }
    this.focusTextInput = () =>{
      if(this.textInput) this.textInput.focus();
    }
  }
  componentDidMount(){
    this.focusTextInput();
  }
  render(){
    <div>
      <input
      type="text"
      ref={this.setTextInputRef}
      />
      <input
      type="button"
      value="Focus the text input"
      onClick={this.focusTextInput}
      />
    </div>
  }
}

function CustomTextInput(props){
  return(
    <div>
      <input ref={props.inputRef}/>
    </div>
  )
}

class Parent extends React.Component {
  render(){
    return (
      <CustomTextInput
        inputRef={el => this.inputElement = el}
      />
    )
  }
}

// React是一个用于用户构建界面的javaScript库。
// Fragment标签
// 函数式编程
// jsx语法遇到<编译成html,遇到{}编译成js

constructor(props){
  super(props);
  this.state = {
    inputValue:'',
    list:[]
  }
}

// 绑定事件
<input value={this.state.inputValue} onChange={this.inputChange} />

inputChange(e){
  console.log(e.target.value);
  this.state.inputValue=e.target.value;
  this.setState({
    inputValue:e.target.value
  })
}


// import React, { Component } from 'react'; imrc

// cc
// class  extends Component {
//   state = {  }
//   render() { 
//     return (  );
//   }
// }
 
// export default ;

// 父组件向子组件传递内容，靠属性的形式传递

// 在构造函数中绑定this

import React, { Component } from 'react';
class xiaojiejie extends Component {
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this);
  }
  state = {  }
  render() { 
    return ( 
      <div onClick={this.handleClick}>
        {this.props.content}
      </div>
     );
  }
}
 
export default ;

// React单项数据流,React同其他框架共同工作和函数式编程
// 1.函数式编程让我们的代码更加清晰，每个功能都是一个函数。
// 2.函数式编程为我们的代码测试代理了极大的方便，更容易实现前端自动化测试

// PropTypes的简单应用

// <ul ref={(ul)=>{this.ul=ul}}>
//     {
//         this.state.list.map((item,index)=>{
//             return (
//                 <XiaojiejieItem 
//                 key={index+item}  
//                 content={item}
//                 index={index}
//                 deleteItem={this.deleteItem.bind(this)}
//                 />
//             )
//         })
//     }
// </ul>  


// React的生命周期
// Initialization初始化阶段
// Mounting挂载阶段
// Updation更新阶段
// Unmounting销毁阶段

// 生命周期函数是指在某一个时刻组件会自动调用执行的函数
// render()函数
// 它在state发生改变的时候自动执行，这就是一个标准的自动执行函数。
// constructor我们叫构造函数,它是ES6的基本语法。
// 但是你要心里把它当成一个生命周期函数，我个人把它看成React的Initialization阶段，定义属性（props）和状态(state)。

// Mounting阶段
// Mounting阶段叫挂载阶段,伴随着整个虚拟DOM的生成,它里边有三个小的生命周期函数,分别是:
// 1.componentWillMount:在组件即将被挂载到页面的时刻执行。
// 2.render:页面state或props发生变化时执行。
// 3.componentDidMount：组件挂载完成时被执行。

// componentWillMount和componentDidMount这两个生命周期函数，只在页面刷新时执行一次，而render函数是只要有state和props变化就会执行。

// Updation阶段，也就是组件发生改变的更新阶段
// 一个是props属性改变，一个是state状态改变
// shouldComponentUpdate函数
shouldComponentUpdate(){
  console.log('shouldComponentUpdate---组件发生改变前执行')
  return true;
}
componentWillUpdate(){
  console.log('componentWillUpdate---组件更新前，shouldComponentUpdate函数之后执行')
}
componentDidUpdate(){
  console.log('componentDidUpdate----组件更新之后执行')
}

// 1-shouldComponentUpdate---组件发生改变前执行
// 2-componentWillUpdate---组件更新前，shouldComponentUpdate函数之后执行
// 3-render----开始挂载渲染
// 4-componentDidUpdate----组件更新之后执行

// updation里的生命周期

// Unmounting
// render函数耗费性能问题
shouldComponentUpdate(nextProps,nextState){
  if(nextProps.content !== this.props.content){
    return true;
  }
  return false;
}

componentDidMount(){
  axios.post('https://web-api.juejin.im/v3/web/wbbr/bgeda').then((res) =>{
    console.log('axios 获取数据成功:'+JSON.stringify(res))
  }).catch((error) =>{
    console.log('axios 获取数据失败'+error)
  })
}

componentDidMount(){
  axios.get('接口URL').then((res) => {
    console.log('axios 获取数据成功:'+JSON.stringify(res))
  }).catch((error) =>{
    console.log('axios获取数据失败'+error)
  })
}

componentDidMount(){
  axios.get('xxx').then((res) =>{
    console.log('axios获取数据成功:'+JSON.stringify(res))
    this.setState({
      list:res.data.data
    })
  }).catch((error) =>{
    console.log('axios获取数据失败'+error)
  })
}

// 快捷键 imrc cc ccc

toToggole(){
  this.setState({
    isShow:this.state.isShow ? false : true
  })
}

<div> <button onClick={this.toToggole}>召唤Boss</button></div>

constructor(props){
  super(props)
  this.state = {
    isShow:true
  }
  this.toToggole = this.toToggole.bind(this);
}
.show{
  opacity:1;
  transition: all 1.5s ease-in;
}
.hide{
  opacity:0;
  transition: all 1.5s ease-in;
}

// transition只能制作一些简单的动画,稍微复杂点的就做不出来了，css3中的关键帧贴动画keyframes

.show{
  animation:show-item 2s ease-in forwards;
}
.hide{
  animation:hide-item 2s ease-in forwards;
}
@keyframes hide-item{
  0% {
      opacity:1;
      color:yellow;
  }
  50%{
      opacity: 0.5 ;
      color:red;
  }
  100%{
      opacity:0;
      color: green;
  }
}

@keyframes show-item{
  0% {
      opacity:0;
      color:yellow;
  }
  50%{
      opacity: 0.5;
      color:red;
  }
  100%{
      opacity:1;
      color: green;
  }
}
// keyframes也只能实现一些很简单的动画效果，一些复杂的动画还是用别人造好的轮子。

//css动画库 react-transition-group

render(){
  return(
    <div>
      <CSSTransition 
          in={this.state.isShow}   //用于判断是否出现的状态
          timeout={2000}           //动画持续时间
          classNames="boss-text"   //className值，防止重复
      >
          <div>BOSS级人物-孙悟空</div>
      </CSSTransition>
      <div><button onClick={this.toToggole}>召唤Boss</button></div>
    </div>
  )
}

// creat-react-app优点

// 无需配置：官方的配置堪称完美，几乎不用你再配置任何东西，就可以上手开发项目。
// 高集成性：集成了对React，JSX，ES6和Flow的支持。
// 自带服务：集成了开发服务器，你可以实现开发预览一体化。
// 热更新：保存自动更新，让你的开发更简单。
// 全兼容性：自动处理CSS的兼容问题，无需添加-webkit前缀。
// 自动发布：集成好了发布成品功能，编译后直接发布，并且包含了sourcemaps功能。

var path = require('path');
module.exports = {
  entry:'./app/index.js',
  output:{
    path:path.resolve(__dirname,'dist'),
    filename:'index.js'
  }
}

module:{
  loaders:[
    {
      test:/\.js$/,
      exclude:/node_modules/,
      loaders:"babel-loader",
      query:{
          presets:['es2015','react']
      }
    }
  ]
}

ReactDOM.render(
  <Router>
      <div>
        <Nav/>
          <Route exact path="/" component={Jspang} />
          <Route  path="/Jspangb" component={Jspangb} />
          <Route  path="/Jspangc" component={Jspangc} />
      </div>
    </Router>,
    document.getElementById('app')
)

// <Route  path="/" component={Jspang} />
// <Route  path="/Jspangb" component={Jspangb} />

{
  test:/\.css$/,
  loader:['style-loader','css-loader']
}

<NavLink exact to='/' className="blue">Jspanga</NavLink> |&nbsp;


import React from 'React';
import {NavLink} from 'react-router-dom';
import './nav.css';

const NavBar = () =>(
<div>
  <div>
    <NavLink exact to='/' className="blue">Jspanga</NavLink> |&nbsp;
    <NavLink to='/Jspangb' activeClassName='active'>Jspangb</NavLink> |&nbsp;
    <NavLink to='/Jspangc' activeClassName='active'>Jspangc</NavLink>
  </div>
</div>
)

export default NavBar;


