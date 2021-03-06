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

// React????????????????????????????????????javaScript??????
// Fragment??????
// ???????????????
// jsx????????????<?????????html,??????{}?????????js

constructor(props){
  super(props);
  this.state = {
    inputValue:'',
    list:[]
  }
}

// ????????????
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

// ????????????????????????????????????????????????????????????

// ????????????????????????this

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

// React???????????????,React?????????????????????????????????????????????
// 1.?????????????????????????????????????????????????????????????????????????????????
// 2.??????????????????????????????????????????????????????????????????????????????????????????????????????

// PropTypes???????????????

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


// React???????????????
// Initialization???????????????
// Mounting????????????
// Updation????????????
// Unmounting????????????

// ??????????????????????????????????????????????????????????????????????????????
// render()??????
// ??????state?????????????????????????????????????????????????????????????????????????????????
// constructor?????????????????????,??????ES6??????????????????
// ??????????????????????????????????????????????????????????????????????????????React???Initialization????????????????????????props????????????(state)???

// Mounting??????
// Mounting?????????????????????,?????????????????????DOM?????????,??????????????????????????????????????????,?????????:
// 1.componentWillMount:???????????????????????????????????????????????????
// 2.render:??????state???props????????????????????????
// 3.componentDidMount????????????????????????????????????

// componentWillMount???componentDidMount?????????????????????????????????????????????????????????????????????render??????????????????state???props?????????????????????

// Updation???????????????????????????????????????????????????
// ?????????props????????????????????????state????????????
// shouldComponentUpdate??????
shouldComponentUpdate(){
  console.log('shouldComponentUpdate---???????????????????????????')
  return true;
}
componentWillUpdate(){
  console.log('componentWillUpdate---??????????????????shouldComponentUpdate??????????????????')
}
componentDidUpdate(){
  console.log('componentDidUpdate----????????????????????????')
}

// 1-shouldComponentUpdate---???????????????????????????
// 2-componentWillUpdate---??????????????????shouldComponentUpdate??????????????????
// 3-render----??????????????????
// 4-componentDidUpdate----????????????????????????

// updation??????????????????

// Unmounting
// render????????????????????????
shouldComponentUpdate(nextProps,nextState){
  if(nextProps.content !== this.props.content){
    return true;
  }
  return false;
}

componentDidMount(){
  axios.post('https://web-api.juejin.im/v3/web/wbbr/bgeda').then((res) =>{
    console.log('axios ??????????????????:'+JSON.stringify(res))
  }).catch((error) =>{
    console.log('axios ??????????????????'+error)
  })
}

componentDidMount(){
  axios.get('??????URL').then((res) => {
    console.log('axios ??????????????????:'+JSON.stringify(res))
  }).catch((error) =>{
    console.log('axios??????????????????'+error)
  })
}

componentDidMount(){
  axios.get('xxx').then((res) =>{
    console.log('axios??????????????????:'+JSON.stringify(res))
    this.setState({
      list:res.data.data
    })
  }).catch((error) =>{
    console.log('axios??????????????????'+error)
  })
}

// ????????? imrc cc ccc

toToggole(){
  this.setState({
    isShow:this.state.isShow ? false : true
  })
}

<div> <button onClick={this.toToggole}>??????Boss</button></div>

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

// transition?????????????????????????????????,???????????????????????????????????????css3????????????????????????keyframes

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
// keyframes??????????????????????????????????????????????????????????????????????????????????????????????????????

//css????????? react-transition-group

render(){
  return(
    <div>
      <CSSTransition 
          in={this.state.isShow}   //?????????????????????????????????
          timeout={2000}           //??????????????????
          classNames="boss-text"   //className??????????????????
      >
          <div>BOSS?????????-?????????</div>
      </CSSTransition>
      <div><button onClick={this.toToggole}>??????Boss</button></div>
    </div>
  )
}

// creat-react-app??????

// ??????????????????????????????????????????????????????????????????????????????????????????????????????????????????
// ???????????????????????????React???JSX???ES6???Flow????????????
// ?????????????????????????????????????????????????????????????????????????????????
// ????????????????????????????????????????????????????????????
// ???????????????????????????CSS??????????????????????????????-webkit?????????
// ???????????????????????????????????????????????????????????????????????????????????????sourcemaps?????????

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


