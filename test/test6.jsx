/*
 * @,@Author: ,: your name
 * @,@Date: ,: 2020-12-09 15:38:03
 * @LastEditTime: 2021-04-29 15:31:04
 * @LastEditors: Please set LastEditors
 * @,@Description: ,: In User Settings Edit
 * @,@FilePath: ,: \test\test6.jsx
 */

//  setState        设置状态
//  replaceState    替换状态
//  setProps        设置属性
//  replaceProps    替换属性
//  forceUpdate     强制更新
//  findDOMNode     获取DOM节点
//  isMounted       判断组件挂载状态

// setState(object nextState[,function callback])

// setState()总是会触发一次组件重绘，除非在shouldComponentUpdate()中实现了一些条件渲染逻辑

class Counter extends React.Component{
  constructor(props){
    super(props);
    this.state = {clickCount:0};
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    this.setState(function(state){
      return {clickCount:state.clickCount + 1};
    })
  }
  render(){
    return (<h2 onClick={this.handleClick}>点我！点击次数为:{this.state.clickCount}</h2>)
  }
}

class Counter extends React.Component{
  constructor(props){
    super(props);
    this.state = {clickCount:0};
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    this.setState(function(state){
      return {clickCount:state.clickCount + 1};
    })
  }
  render(){
    return (<h2 onClick={this.handleClick}>点我！点击次数为:{this.state.clickCount}</h2>)
  }
}

ReactDOM.render(
  <Counter/>,
  document.getElementById('example')
)


class Counter extends React.Component{
  constructor(props){
    super(props);
    this.state = {clickCount:0};
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    this.setState(function(state){
      return {clickCount:state.clickCount + 1};
    })
  }
  render(){
    return (<h2 onClick={this.handleClick}>点我！点击次数为:{this.state.clickCount}</h2>)
  }
}
ReactDOM.render(
  <Counter/>,
document.getElementById('example')
)

// forceUpdate()方法会使组件调用自身的render()方法重新渲染组件，组件的子组件也会调用自己的render()。

// 但是，组件重新渲染时，依然会读取this.props和this.state，如果状态没有改变，那么React只会更新DOM。

// forceUpdate()方法适用于this.props和this.state之外的组件重绘（如：修改了this.state后），通过该方法通知React需要调用render()。

// 一般来说，应该尽量避免使用forceUpdate()，而仅从this.props和this.state中读取状态并由React触发render()调用。

// 不要直接更新状态

// wrong
// this.state.comment = 'Hello';

// correct
this.setState({
  comment:'Hello'
})

// 状态更新可能是异步的
// 因为this.props和this.state可能是异步更新的,你不应该依靠他们的值来计算下一个状态。
// 例如,此代码可能无法更新计数器:
// wrong
this.state({
  Counter:this.state.counter + this.props.increment,
})

// correct
this.setState((preState,props) =>{
  counter:preState.counter + props.increment
})


this.setState(function(preState,props){
  return {
    counter:preState.counter + props.increment
  }
})

// 状态更新合并
// 当你调用setState()时,React将你提供的对象合并到当前状态。
// 例如,你的状态可能包含一些独立的变量:


componentDidMount(){
  fetchPosts().then(response => {
    this.setState({
      posts: response.posts
    });
  });

  fetchComments().then(response => {
    this.setState({
      comments: response.comments
    });
  });
}

componentDidMount(){
  this.mounted = true;
}

componentWillUnmount(){
  this.mounted = false;
}

// 组件的生命周期分成三个状态
// Mounting:已插入真实的DOM
// Updating:正在被重新渲染
// Unmounting:已移出真实DOM

// 生命周期的方法有：
// componentWillMount:在渲染前调用,在客户端也在服务端。

// componentDidMount:在第一次渲染后调用,只在客户端。之后组件已经生成了对应的DOM结构,可以通过this.getDOMNode()来进行访问。 如果你想和其他JavaScript框架一起使用，可以在这个方法中调用setTimeout, setInterval或者发送AJAX请求等操作(防止异步操作阻塞UI)。


// componentWillReceiveProps在组件接收到一个新的 prop (更新后)时被调用。这个方法在初始化render时不会被调用。


// shouldComponentUpdate 返回一个布尔值。在组件接收到新的props或者state时被调用。在初始化时或者使用forceUpdate时不被调用。可以在你确认不需要更新组件时使用。


// componentWillUpdate在组件接收到新的props或者state但还没有render时被调用。在初始化时不会被调用。

// componentDidUpdate 在组件完成更新后立即调用。在初始化时不会被调用。

// componentWillUnmount在组件从 DOM 中移除之前立刻被调用。


class Hello extends React.Component{
  constructor(props){
    super(props);
    this.state = {opacity:1.0};
  }
  componentDidMount(){
    this.timer = setInterval(function() {
      var opacity = this.state.opacity;
      opacity -= .05;
      if(opacity < 0.1){
        opacity = 1.0;
      }
      this.setState({
        opacity:opacity
      })
    }.bind(this),100);
  }
  render(){
    return (
      <div style={opacity:this.state.opacity}>
       Hello{this.props.name}
      </div>
    )
  }
}

ReactDOM.render(
  <Hello name = 'world'/>,
  document.body
)

class Button extends React.Component{
  constructor(props){
    super(props);
    this.state = {data:0};
    this.setNewNumber = this.setNewNumber.bind(this);
  }

  setNewNumber(){
    this.setState({data:this.state.data + 1})
  }

  render(){
    return (
      <div>
        <button onClick={this.setNewNumber}>INCREMENT</button>
        <Content myNumber={this.state.data}></Content>
      </div>
    )
  }
}

class Content extends React.Component {
  componentWillMount(){
    console.log('Component WILL MOUNT')
  }
  componentDidMount(){
    console.log('Component DID MOUNT')
  }
  componentWillReceiveProps(newProps) {
    console.log('Component WILL RECEIVE PROPS!')
  }
  shouldComponentUpdate(newProps, newState) {
    return true;
   }
   componentWillUpdate(nextProps, nextState) {
    console.log('Component WILL UPDATE!');
   }
   componentDidUpdate(prevProps, prevState) {
    console.log('Component DID UPDATE!')
   }
   componentWillUnmount() {
    console.log('Component WILL UNMOUNT!')
   }
   render() {
    return (
      <div>
        <h3>{this.props.myNumber}</h3>
      </div>
    );
  }
}

ReactDOM.render(
  <div>
    <Button />
  </div>,
  document.getElementById('example')
)
