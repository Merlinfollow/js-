/*
 * @,@Author: ,: your name
 * @,@Date: ,: 2020-12-15 16:44:29
 * @LastEditTime: 2021-02-22 15:23:57
 * @LastEditors: sueRimn
 * @,@Description: ,: In User Settings Edit
 * @,@FilePath: ,: \test\store\test12.jsx
 */

// React16新的生命周期弃用了componentWillMount,componentWillReceiveProps,componentWillUpdate

// react16的生命周期弃用了componentWillMount,componentWillReceiveProps,
// componentWillUpdate


// 1.只执行一次： constructor、componentDidMount
// 2.执行多次：render、getDerivedStateFromProps、shouldComponentUpdate、getSnapshotBeforeUpdate、componentDidUpdate
// 3.有条件执行：componentWillUnmount

// 执行多次:render,shouldComponentUpdate,componentDidUpdate
// 有条件执行:componentWillUnmount


// 执行一次:constructor,componentDidMount
// 执行多次:render,shouldComponentUpdate,componentDidUpdate
// 有条件执行:componentWillUnmount

// 1.完成前的顺序是从根部到子部，完成时是从子部到根部。（类似于事件机制）
// 2.子组件setState是不能触发其父组件的生命周期更新函数，只能触发更低一级别的生命周期更新函数。


// 2、子组件props或state更新都会触发shouldComponentUpdate生命钩子。该生命周期有两个参数nextProps，nextState 表示更新后的props和更新后的state， 该生命周期是整提高组件性能的一个重要函数，它通过判断当前状态与之前状态来返回一个布尔值并决定是否更新视图，如果返回false视图始终不会更新。返回true就会更新视图

constructor(props){
  super(props);
  this.state = {
    params:props.params
  }
}
// 在constructor中通过props获取params赋值给当前组件的state

componentWillReceiveProps = (nextProps) => {
  this.setState({
    params:nextProps.params
  })
}

// 必须用此生命周期setState,以便render中为新


// 1.大部分情况下 componentWillReceiveProps 生命周期函数是没用的，即可以略去不写，

// 2.但是在constructor函数中初始化了某个state，必须用 componentWillReceiveProps 来更新state，不可省去，否则render中的state将得不到更新。
// 同时如果您想在子组件监听watch值变化做处理，也可以用到componentWillReceiveProps

// 3.使用componentWillReceiveProps的时候，不要去向上分发，调用父组件的相关setState方法，否则会成为死循环。


// componentWillMount 在渲染前调用,在客户端也在服务端。

// componentDidMount : 在第一次渲染后调用，只在客户端。之后组件已经生成了对应的DOM结构，可以通过this.getDOMNode()来进行访问。 如果你想和其他JavaScript框架一起使用,可以在这个方法中调用setTimeout, setInterval或者发送AJAX请求等操作(防止异步操作阻塞UI)。

// componentWillReceiveProps 在组件接收到一个新的 prop (更新后)时被调用。这个方法在初始化render时不会被调用。

// shouldComponentUpdate 返回一个布尔值。在组件接收到新的props或者state时被调用。在初始化时或者使用forceUpdate时不被调用。 
// 可以在你确认不需要更新组件时使用。

// componentWillUpdate在组件接收到新的props或者state但还没有render时被调用。在初始化时不会被调用。

// componentDidUpdate 在组件完成更新后立即调用。在初始化时不会被调用。

// componentWillUnmount在组件从 DOM 中移除的时候立刻被调用。

// forceUpdate强制更新

// forceUpdate强制更新

// created:在模板渲染成html前调用，即通常初始化某些属性值，然后再渲染成视图。
// mounted:在模板渲染成html后调用，通常是初始化页面完成后，再对html的dom节点进行一些需要的操作。
// 其实两者比较好理解，通常created使用的次数多，而mounted通常是在一些插件的使用或者组件的使用中进行操作，比如插件chart.js的使用: var ctx = document.getElementById(ID); 通常会有这一步，而如果你写入组件中，你会发现在created中无法对chart进行一些初始化配置，一定要等这个html渲染完后才可以进行，那么mounted就是不二之选。下面看一个例子（用组件）。

// componentWillMount  在渲染前调用,在客户端也在服务端
// componentDidMount 已经挂载了DOM结构,可以在这个方法中调用setTimeout,setInterval或者发送AJAX请求等操作
// componentWillReceiveProps 在组件接收到一个新的 prop (更新后)时被调用。这个方法在初始化render时不会被调用。
// shouldComponentUpdate 返回一个布尔值。在组件接收到新的props或者state时被调用。在初始化时或者使用forceUpdate时不被调用。 
// 可以在你确认不需要更新组件时使用。
// componentWillUpdate在组件接收到新的props或者state但还没有render时被调用。在初始化时不会被调用。
// componentDidUpdate 在组件完成更新后立即调用。在初始化时不会被调用。
// componentWillUnmount在组件从 DOM 中移除的时候立刻被调用。


// DOM节点的替换
// diff算法把虚拟DOM渲染成真实的DOM


function Comp(props){
  return <h2>hi {props.name}</h2>
}


function Comp(props){
  return <h2>{props.name}</h2>

}