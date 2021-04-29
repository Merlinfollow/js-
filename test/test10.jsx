/*
 * @,@Author: ,: your name
 * @,@Date: ,: 2020-12-10 11:04:12
 * @LastEditTime: 2021-02-22 17:08:48
 * @LastEditors: sueRimn
 * @,@Description: ,: In User Settings Edit
 * @,@FilePath: ,: \test\test10.jsx
 */
class Cat extends React.Component {
  render(){
    const mouse = this.props.mouse;
    return (
      <img src="/cat.jpg" style={{ position: 'absolute', left: mouse.x, top: mouse.y }} />
    )
  }
}

class MouseWithCat extends React.Component{
  constructor(props){
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = {x:0,y:0};
  }
  handleMouseMove(event){
    this.setState({
      x:event.clientx,
      y:event.clienty
    })
  }
  render(){
    <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>
      <Cat mouse={this.state} />
    </div>
  }
}

class MouseTracker extends React.Component{
    
}

// react-router-dom

// <Route path="/home" component={Home}/>
// <Route path="/about" component={About}/>
// <Route path="/topics" component={Topics}/>
// <Redirect from="/" to="/home" exact/>

// <Switch>
//   <Route path="/a" component={Demoa}/>
//   <Route path="/b" component={Demob}/>
//   <Route path="/c" component={Democ}/>
// </Switch>

class A extends React.Component{
  render(){
      return (       
      <div>
          <NavLink to="/home">home</NavLink>
          <NavLink to="/about">about</NavLink>
          <NavLink to="/topics">topics</NavLink>
       <Switch>
          <Route path="/home" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/topics" component={Topics}/>
          <Redirect from="/" to="/home" exact/>
       </Switch>
  </div>
      )
  }
}

class A extends React.Component{
  render(){
    return (       
    <div>
        <NavLink to="/home">home</NavLink>
        <NavLink to="/about">about</NavLink>
        <NavLink to="/topics">topics</NavLink>
     <Switch>
        <Route path="/home" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/topics" component={Topics}/>
        <Redirect from="/" to="/home" exact/>
     </Switch>
    </div>
    )
  }
}

// params方式
// <Route path="/home/:name" component={Home}/>
// <NavLink to="/home/我是参数">home</NavLink>
// <p onClick={()=>this.props.history.push("/home/我是push发送的数据")}>点我去home</p>
// this.props.match.params.xxx

// query方式
// <Link to={{ pathname : '/d' , query : { name : 'sunny' }}}>点我去d</Link>
// this.props.location.query.xxx

// state方式
// <Link to={{ pathname : '/d' , state : { name : 'sunny' }}}>点我去d</Link>
// this.props.location.state.xxx


// 理想情况是只移动D，不移动A,B,C。因此，在开发过程中，尽量减少类似将最后一个节点移动到列表首部的操作，当节点数量过大或更新操作过于频繁时，会影响React的渲染性能。

// 当节点数量过大或更新操作过于频繁时，会影响React的渲染性能

// let arr=[
//   <h1 key="1">Hello world!</h1>,
//   <h2 key="2"> React is awesome</h2>
// ];
// ReactDOM.render(
// <div>{arr}</div>, document.getElementById('reactContainer') )

// setState()
// 通知React组件数据发生变化的方法是调用成员函数setState(data,callback)。这个函数会合并data到this.state,并重新渲染组件。渲染完成后，调用可选的callback回调。(大部分情况下不需要调用回调，因为React会负责把界面更新到最新状态)

// <script type="text/babel">
// var  TextBoxComponent = React.createClass({
//     getInitialState:function(){
//         return {enable:false}
//     },
//     handleClick:function(event){
//         this.setState({enable:!this.state.enable})
//     },
//     render:function(){
//         return (
//             <p>
//                 <input type="text" disabled={this.state.enable} />
//                 <button onClick={this.handleClick}>改变textbox状态</button>
//             </p>
//         )
//     }
// });

// ReactDOM.render(<TextBoxComponent/>,document.getElementById("reactContainer"));
// </script>

// props是组件固有属性的集合，其数据由外部传入，一般在整个组件的生命周期中都是只读的。属性的初识值通常由React.createElement函数或者JSX中标签的属性值进行传递，并合并到组件实例对象的this.props中。

// props是固有属性的集合，其数据由外部传入，一般在整个组件的生命周期中都是只读的。属性的初识值通常是由React.createElement函数或者JSX中标签的属性进行传递，并合并到组件实例对象的this.props中。

// props不能被其所在的组件修改，从父组件传递进来的属性不会在组件内部修改;state只能在所在组件内部更改,或在外部调用setState函数对状态进行间接修改。

// render成员函数   首先render是一个函数,它对于组件来说，render成员函数是必须的。render函数主要流程是检测this.props和this.state,再返回一个单一组件实例。

// render函数应该是纯粹的，也就是说，在render函数内不应该修改组件state,不读写DOM信息，也不与浏览器交互。如果需要交互,应该在生命周期中进行交互。

// 一个组件完成的生命周期包含实例化阶段,活动阶段，销毁阶段三个阶段。每个阶段又由相应的方法管理。

// mounting:表示正在挂接虚拟DOM到真实DOM。
// updating：表示正在被重新渲染。
// unmounting:表示正在虚拟DOM移除真实DOM。


// 在react中，只要执行了setState方法，就一定会触发render函数执行；组件的props改变了，不一定触发render函数的执行，除非props的值来自于父组件或者祖先组件的state，在这种情况下，组件的props改变，也就意味着父组件或者祖先组件的state发生了改变，也就是父组件或者祖先组件执行了setState方法；那么可以总结出，render函数的执行时机就是setState方法的执行。

// 另，render函数执行并不一定意味着发生DOM操作，render函数执行只是返回虚拟DOM，需要通过比较新旧虚拟DOM来决定是否发生DOM操作，新旧虚拟DOM的比较，就涉及diff算法了，这又是另一个话题了。

// render()
// react最重要的步骤，创建虚拟dom，进行diff算法，更新dom树都在此进行

// render是react最重要的步骤,创建虚拟dom,进行diff算法,更新dom树都在此进行

// shouldComponentUpdate(nextProps, nextState) { // 组件Props或者state改变时触发，true：更新，false：不更新
//   return true
// }












