/*
 * @,@Author: ,: your name
 * @,@Date: ,: 2020-12-22 09:40:25
 * @LastEditTime: 2021-02-22 09:46:45
 * @LastEditors: sueRimn
 * @,@Description: ,: In User Settings Edit
 * @,@FilePath: ,: \test\test22.jsx
 */
class HelloMessage extends React.Component{
  render(){
    return <div>
       Hello{this.props.name}
    </div>
  }
}
ReactDOM.render(
  <HelloMessage name="John"/>,
  document.getElementById('hello-example')
)


// 有状态的组件
class Timer extends React.Component{
  constructor(props){
    super(props)
    this.state = {seconds:0}
  }
  tick(){
    this.setState(state =>{
      seconds:state.seconds+1
    })
  }
  componentDidMount(){
    this.interval = setInterval(() =>this.tick(),1000)
  }
  componentWillUnmount(){
    clearInterval(this.interval)
  }
  render(){
    return(
      <div>
        seconds:{this.state.seconds}
      </div>
    )
  }
}
ReactDOM.render(
  <Timer/>,
  document.getElementById("timer-example")
)

class TodoApp extends React.Component{
  
}

//应用
class TodoApp extends React.Component{
  constructor(props){
    super(props)
  }
  this.state = {item:[],text:''};
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  render(){
    return(
      <div>
      <h3>TODO</h3>
      <TodoList items={this.state.items} />
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="new-todo">
          What needs to be done?
        </label>
        <input
          id="new-todo"
          onChange={this.handleChange}
          value={this.state.text}
        />
        <button>
          Add #{this.state.items.length + 1}
        </button>
      </form>
    </div>
   );
  }

  handleChange(e){
    this.setState({text:e.target.value})
  }

  handleSubmit(){
    
  }
  handleSubmit(e){  
    e.preventDefault();
    if(this.state.text.length == 0){
      return;
    }
    const newItem = {
      text:this.state.text,
      id:Date.now()
    }
    this.setState(state =>{
      items:state.items.concat(newItem),
      text:''
    })
  }
}

class TodoList extends React.Component{
  render(){
    return(
      <ul>
        {this.props.name.map(item =>{
          <li key={item.id}>{item.text}</li>
        })}
      </ul>
    )
  }
}

// class TodoList extends React.Component{
//   render(){
//     return (
//       <ul>
//       {this.props.name.map(item =>{
//         <li key={item.id}>{item.text}</li>
//       })}
//       </ul>
//     )
//   }
// }
ReactDOM.render(
  <TodoApp/>,
  document.getElementById("todos-example")
)



// 在组件中使用外部插件
class MarkdownEditor extends React.Component{
  constructor(props){
    super(props)
    this.md = new Remarkable();
    this.handleChange = this.handleChange.bind(this)
    this.state = {value:'Hello, **world**!' }
  }
  handleChange(e){
    this.setState({value:e.target.value});
  }
  getRawMarkup(){
    return {_html:this.md.render(this.state.value)};
  }
  render() {
    return (
      <div className="MarkdownEditor">
        <h3>Input</h3>
        <label htmlFor="markdown-content">
          Enter some markdown
        </label>
        <textarea
          id="markdown-content"
          onChange={this.handleChange}
          defaultValue={this.state.value}
        />
        <h3>Output</h3>
        <div
          className="content"
          dangerouslySetInnerHTML={this.getRawMarkup()}
        />
      </div>
    );
  }
}
ReactDOM.render(
  <MarkdownEditor />,
  document.getElementById('markdown-example')
);

// React是一个声明式，用于高效且灵活构建用户界面的javaScript库

class ShoppingList extends React.Component{
  render(){
    return(
      <div className="shopping-list">
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    )
  }
}


// class ShoppingList extends React.Component{
//   render(){
//     return (
//       <div className="shopping-list">
//         <h1>Shopping List for {this.props.name}</h1>
//         <ul>
//           <li>Instagram</li>
//           <li>WhatsApp</li>
//           <li>Oculus</li>
//         </ul>
//       </div>
//     )
//   }
// }


// 当数据发生改变时，React 会高效地更新并重新渲染我们的组件。

// 通过Props传递数据
class Board extends React.Component{
  renderSquare(i){
    return <Square value={i}/>
  }
}

class Board extends React.Component{
  renderSquare(i){
    return <Square value={i}/>
  }
}

class Square extends React.Component{
  render(){
    return(
      <button className="square">{this.props.value}</button>
    )
  }
}

class Square extends React.Component{
  render(){
    <button className="square" onClick={() => alert('click')}>
      {this.props.value}
    </button>
  }
}

class Square extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      value:null
    }
  }
  render(){
    return (
      <button className="square" onClick={() => alert("click")}>
        {this.props.value}
      </button>
    )
  }
}

renderSquare(i){
  return (
    <Square value={this.state.squares[i]}
    onClick={() =>this.handleClick(i)}
    />
  )
}

class Square extends React.Component{
  render(){
    <button className="square" onclick={() =>this.props.onClick()}>
      {this.props.value}
    </button>
  }
}
