/*
 * @,@Author: ,: your name
 * @,@Date: ,: 2020-12-07 17:06:16
 * @LastEditTime: 2021-04-29 10:47:47
 * @LastEditors: Please set LastEditors
 * @,@Description: ,: In User Settings Edit
 * @,@FilePath: ,: \test\test1.jsx
 */

// 什么是观察者模式？什么是订阅模式？

 class TodoApp extends React.Component {
   constructor(props) {
     super(props);
     this.state = { items: [],text:''};
     this.handleChange = this.handleChange.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);
   }
   render(){
     return(
      <div>
        <h3>TODO</h3>
        <TodoList items={this.state.items}/>
        <form onSubmit={this.handleSubmit}>
        <label htmlFor="new-todo">
          what needs to be done?
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
     )
   }
 }

 handleChange(e) {
   this.setState({text:e.target.value});
 }

 handleSubmit(e) {

  //  阻止事件的冒泡行为
  e.stopPropagation();
   
  //  阻止事件的默认行为
  e.preventDefault();
  
  if(this.state.text.length === 0){
    return;
  }
  const newItem = {
    text:this.state.text,
    id:Date.now()
  };
  this.setState(state =>({
    items:state.items.concat(newItem),
    text:''
  }))
 }

 class TodoList extends React.Component {
   render(){
     return (
       <ul>
        {this.props.items.map(item =>(
          <li key={item.id}>{item.text}</li>
        ))}
       </ul>
     )
   }
 }


 class TodoList extends React.Component {
   render(){
     return (
       <ul>
         {this.props.items.map(item =>(
           <li key={item.id}>{item.text}</li>
         ))}
       </ul>
     )
   }
 }

 ReactDOM.render(
   <TodoApp />,
   document.getElementById('todos-example')
 )
