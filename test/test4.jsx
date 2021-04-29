/*
 * @,@Author: ,: your name
 * @,@Date: ,: 2020-12-08 09:32:40
 * @LastEditTime: 2021-04-29 14:56:27
 * @LastEditors: Please set LastEditors
 * @,@Description: ,: In User Settings Edit
 * @,@FilePath: ,: \test\test4.js
 */

const { func, number } = require("prop-types");


function formatName(user){
  return user.firstName + '' + user.lastName;
}
const user = {
  firstName:'Harper',
  lastName:'Perez'
}
const element = <h1>Hello,{formatName(user)}!</h1>
ReactDOM.render(
  element,
  document.getElementById('root')
)


function getGreeting(user){
  if(user){
    return <h1>Hello,{formatName(user)}!</h1>;
  }
  return <h1>Hello,Stranger.</h1>;
}

const element = <div tabIndex={0}></div>;
const element = <img src={user.avatarUrl} alt=""/>
const element = (
  <div>
     <h1>Hello!</h1>
     <h2>Good to see you here.</h2>
  </div>
)


// JSX防止注入攻击
const title = response.potentiallyMaliciousInput;
const element = <h1>{title}</h1>;

const element = (
  <h1 className="greeting">
    Hello,world!
  </h1>
)

const element = React.createElement(
  'h1',
  {className:'greeting'},
  'Hello,world!'
)

const element = {
  type:'h1',
  props:{
    className:'greeting',
    children:'Hello,world!'
  }
}

const element = <h1>Hello,world</h1>;
ReactDOM.render(element, document.getElementById('root'));

function tick(){
  const element = (
    <div>
      <h1>Hello,world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  )
  ReactDOM.render(element, document.getElementById('root'));
}
setInterval(tick,1000);

// 函数组件与class组件
function Welcome(props){
  return <h1>Hello,{props.name}</h1>;
}

const element = <Welcome name="Sara"/>
ReactDOM.render(
  element,document.getElementById('root')
)

class Welcome extends React.Component {
  render(){
    return <h1>Hello,{this.props.name}</h1>;
  }
}

// 组合组件

function Welcome(props){
  return <h1>Hello,{props.name}</h1>;
}

function App(){
  return (
    <div>
      <Welcome name="Sara"/>
      <Welcome name="Cahal"/>
      <Welcome name="Edite"/>
    </div>
  );
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
)

// 提取组件
function Comment(props){
  return (
    <div className="Comment">
      <div className="UserInfo">
        <img className="Avatar" src={props.author.avatarUrl} alt={props.author.name}/>
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-data">
        {formatDate(props.date)}
      </div>
    </div>
  );
}

function Avatar(props){
  return (
    <img className="Avatar"
     src={props.user.avatarUrl}
     alt={props.user.name}
    />
  )
}

function Comment(props){
  return (
    <div className="Comment">
      <div className="UserInfo">
        <Avatar user={props.author}/>
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  )
}

function UserInfo(props){
  return(
    <div className="UserInfo">
      <Avatar user={props.user}/>
      <div className="UserInfo-name">
        {props.user.name}
      </div>
    </div>
  )
}


function UserInfo(props){
  return (
    <div className="UserInfo">
      <Avatar user={props.user}/>
      <div className="UserInfo-name">
      {props.user.name}</div>
    </div>
  )
}

function Comment(props){
  return(
    <div className="Comment">
      <UserInfo user={props.author}/>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Commemt-date">
        {formatDate(props.date)}
      </div>
    </div>
  )
}


//纯函数
function sum(a,b){
  return a+b;
}

function withdraw(account,amount){
  account.total -= amount;
}

function tick(){
  const element = (
    <div>
      <h1>Hello,world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(
    element,
    document.getElementById('root')
  )
}

setInterval(tick,1000);


function Clock(props){
  return (
    <div>
      <h1>Hello,world!</h1>
      <h2>It is {props.date.toLocaleTimeString()}.</h2>
    </div>
  )
}

function tick(){
  ReactDOM.render(
    <Clock date={new Date()}/>,
    document.getElementById('root')
  )
}
setInterval(tick,1000)

class Clock extends React.Component {
  render(){
    return (
      <div>
        <h1>Hello,world!</h1>
        <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
      </div>
    )
  }
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount(){

  }

  componentWillUnmount(){
    
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}


// componentDidMount()方法会在组件已经被渲染到DOM中后台运行，所以，最好在这里设置计时器
componentDidMount() {
  this.timerID = setInterval(
    () => this.tick(),
  )
}

componentWillUnmount(){
  clearInterval(this.timerID);
}

class Clock extends React.Component {
  constructor(props){
    super(props);
    this.state = {date:new Date()};
  }
  componentDidMount(){
    this.timerID = setInterval(
      () => this.tick(),1000
    )
  }
}

class Clock extends React.Component {
  constructor(props){
    super(props);
    this.state = {date:new Date()};
  }
  componentDidMount(){
    this.timerID = setInterval(
      () => this.tick(),1000
    )
  }
  componentWillUnmount(){
    clearInterval(this.timerID);
  }
  tick(){
    this.setState({
      date:new Date()
    })
  }
  render(){
    return (
      <div>
        <h1>Hello,world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    )
  }
}
ReactDOM.render(
  <Clock/>,
  document.getElementById('root')
)

// 正确地使用State,错误示例
this.state.comment = 'Hello';
// 采用这种方法赋值
this.setState({comment:'Hello'});

this.setState({
  counter: this.state.counter + this.props.increment
})

this.setState((state, props) =>({
  counter:state.counter + props.increment
}))

this.setState(function(state, props){
  return{
    counter:state.counter + props.increment
  }
})

this.setState(function(state, props){
  return {
    counter:state.counter + props.increment
  }
})

constructor(props) {
  super(props);
  this.state = {
    posts:[],
    comments:[]
  }
}

componentDidMount() {
  fetchPosts().then(response => {
    this.setState({
      posts:response.posts
    });
  });
  fetchComments().then(response =>{
    this.setState({
      comments:response.comments
    })
  })
}

function App(){
  return (
    <div>
      <Clock/>
      <Clock/>
      <Clock/>
    </div>
  )
}
ReactDOM.render(
  <App/>,
  document.getElementById('root')
)

// <button onclick="activateLasers()">
//    Activate Lasers
// </button>

// <button onclick={activateLasers}>
// Activate Lasers
// </button>

// <a href="#" onclick="console.log('The link was clicked.');return false">
//   Click me
// </a>

function ActionLink() {
  function handleClick(e){
    e.preventDefault();
    console.log('The link was clicked.');
  }

  return(
    <a href="#" onclick={handleClick}>
      Click me
    </a>
  )
}

class Toggle extends React.Component {
  constructor(props){
    super(props);
    this.state = {isToggleOn:true};
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    this.setState(state =>({
      isToggleOn:!state.isToggleOn
    }));
  }
  render(){
    return(
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON':'OFF'}
      </button>
    )
  }
}
ReactDOM.render(
  <Toggle/>,
  document.getElementById('root')
)

class LoggingButton extends React.Component {
  handleClick = () => {
    console.log('this is:',this)
  }
  render(){
    return(
      <button onClick={this.handleClick}>
        Click me
      </button>
    )
  }
}

// <button onClick={(e) =>this.deleteRow(id,e)}>Delete Row</button>
// <button onClick={this.deleteRow.bind(this,id)}>Delete Row</button>

function Greeting(props){
  const isLoggedIn = props.isLoggedIn;
  if(isLoggedIn){
    return <UserGreeting/>;
  }
  return <UserGreeting/>
}
ReactDOM.render(
  <Greeting isLoggedIn={false} />,
  document.getElementById('root')
)

function LoggingButton(props){
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  )
}
function LogoutButton(props){
  return(
    <button onClick={props.onClick}>
      Logout
    </button>
  )
}

// LoginControl
class LoginControl extends React.Component {
  constructor(props){
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn:false};
  }
  handleLoginClick(){
    this.setState({isLoggedIn:true});
  }
  handleLogoutClick(){
    this.setState({isLoggedIn:false});
  }
  render(){
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if(isLoggedIn){
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    }else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }
    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn}/>
      </div>
    )
  }
}
ReactDOM.render(
  <LoginControl />,
  document.getElementById('root')
)

function Mailbox(props){
  const unreadMessages = props.unreadMessages;
  return (
    <div>
    <h1>Hello!</h1>
    {unreadMessages.length > 0 &&
      <h2>
        You have {unreadMessages.length} unread messages.
      </h2>
    }
    </div>
  )
}
const message = ['React', 'Re: React', 'Re:Re: React'];
ReactDOM.render(
  <Mailbox unreadMessages={messages} />,
  document.getElementById('root')
);

render() {
  const isLoggedIn = this.state.isLoggedIn;
  return (
    <div>
      The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.
    </div>
  )
}

render(){
  const isLoggedIn = this.state.isLoggedIn;
  return (
    <div>
      {isLoggedIn ? <LogoutButton onClick={this.handleLogoutClick} /> : <LoginButton onClick={this.handleLoginClick} />}
    </div>
  )
}

// 阻止组件渲染
function WarningBanner(props){
  if(!props.warn){
    return null;
  }
  return (
    <div className="warning">
      warning!
    </div>
  )
}

class Page extends React.Component{
  constructor(props){
    super(props);
    this.state = {showWarning:true};
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }
  handleToggleClick(){
    this.setState(state =>({
      showWarning:!state.showWarning
    }))
  }
  render(){
    return(
      <div>
        <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? 'Hide' : 'Show'}
        </button>
      </div>
    )
  }
}
ReactDOM.render(
  <Page/>,
  document.getElementById('root')
)

const numbers = [1,2,3,4,5];
const doubled = numbers.map((number) => number*2);
console.log(doubled);

const numbers = [1,2,3,4,5];
const listItems = numbers.map((number) =>
 <li>{number}</li>
)

ReactDOM.render(
  <ul>{listItems}</ul>,
  document.getElementById('root')
)

function NumberList(props){
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li>{number}</li>
  )
  return (
    <ul>{listItems}</ul>
  );
}
const numbers = [1,2,3,4,5];
ReactDOM.render(
  <NumberList numbers={numbers}/>,
  document.getElementById('root')
)

function NumberList(props){
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>{
    <li key={number.toString()}>{number}</li>
  })
  return (
    <ul>{listItems}</ul>
  )
}
const numbers = [1,2,3,4,5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('root')
)

const numbers = [1,2,3,4,5];
const listItems = numbers.map((number) => 
  <li key={number.toString()}>{number}</li>
)

const todoItems = todos.map((todo) =>{
  <li key={todo.id}>{todo.text}</li>
})

const todoItems = todo.map((todo,index) => {
  <li key={index}>{todo.text}</li>
})

function ListItem(props){
  const value = props.value;
  return (
    <li key={value.toString()}>{value}</li>
  )
}

function NumberList(props){
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>{
    <listItems value={number}/>
  })
  return (
    <ul>
      {listItems}
    </ul>
  )
}
const numbers = [1,2,3,4,5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('root')
)

function ListItem(props){
  return <li>{props.value}</li>;
}

function NumberList(){
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>{
    <ListItem  key={number.toString()} value={number}/>
  })
  return (
    <ul>{listItems}</ul>
  )
}
const numbers = [1,2,3,4,5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  Document.getElementById('root')
)

function Blog(props){
  const sidebar = (
    <ul>
      {
        props.posts.map((post) =>{
          <li key={post.id}>{post.title}</li>
        })
      }
    </ul>
  )
  const content = props.posts.map((post) =>{
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  })
  return (
    <div>
      {sidebar}
      <hr/>
      {content}
    </div>
  )
}
const posts = [
  {id:1,title:'Hello World',content:'Welcome to learning React!'},
  {id:2,title:'Installation',content:'You can install React from npm.'}
]
ReactDOM.render(
  <Blog posts={posts} />,
  document.getElementById('root')
)

const content = posts.map((post)=>{
  <Post
    key={post.id}
    id={post.id}
    title={post.title} />
})

function NumberList(props){
  const numbers = props.numbers;
  const listItems = numbers.map((number) => {
    <ListItem key={number.toString()}
    value={number} />
  })
  return (
    <ul>
      {listItems}
    </ul>
  )
}

function NumberList(props){
  const numbers = props.numbers;
  return (
    <ul>
    {numbers.map((number) => {
      <ListItem key={number.toString()}
      value={number} />
    })}
    </ul>
  )
}

<form>
  <label>
    名字:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="提交" />
</form>

class NameForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {value:''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e){
    this.setState({value: e.target.value});
  }
  handleSubmit(e){
    alert('提交的名字: ' + this.state.value);
    e.preventDefault();
  }
  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <label>
          名字:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="提交" />
      </form>
    )
  }
}

<textarea>你好，这是在text area里的文本</textarea>

class EssayForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value:'请撰写一篇关于你喜欢的 DOM 元素的文章.'
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event){
    this.setState({value:event.target.value});
  }
  handleSubmit(event){
    alert('提交的文章: ' + this.state.value);
    event.preventDefault();
  }
  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          文章:
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="提交" />
      </form>
    )
  }
}

<select>
  <option value="grapefruit">葡萄柚</option>
  <option value="lime">酸橙</option>
  <option selected value="coconut">椰子</option>
  <option value="mango">芒果</option>
</select>

class FlavorForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {value:'coconut'};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event){
    this.setState({value:event.target.value});
  }
  handleSubmit(event){
    alert('你喜欢的风味是: ' + this.state.value);
    event.preventDefault();
  }
  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          选择你喜欢的风味:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">葡萄柚</option>
            <option value="lime">酸橙</option>
            <option value="coconut">椰子</option>
            <option value="mango">芒果</option>
          </select>
        </label>
        <input type="submit" value="提交" />
      </form>
    );
  }
}

function BoilingVerdict(props){
  if(props.celsius >= 100){
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
}

class Calculator extends React.Component{
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {temperature:''};
  }
  handleChange(e){
    this.setState({temperature:e.target.value});
  }
  render(){
    const temperature = this.state.temperature;
    return (
      <fieldset>
        <legend>Enter temperature in Celsius:</legend>
        <input
          value={temperature}
          onChange={this.handleChange} />
        <BoilingVerdict
          celsius={parseFloat(temperature)} />
      </fieldset>
    );
  }
}

const scaleNames = {
  c:'Celsius',
  f:'Fahrenheit'
}

class TemperatureInput extends React.Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {temperature: ''};
  }
  handleChange(e){
    this.setState({temperature: e.target.value})
  }
  render(){
    const temperature = this.state.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input value={temperature}
               onChange={this.handleChange} />
      </fieldset>
    );
  }
}

function tryConvert(temperature, convert){
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {temperature: ''};
  }

  handleChange(e) {
    this.setState({temperature: e.target.value});
  }


  render() {
    const temperature = this.state.temperature;
    // ...  
  }
}

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onTemperatureChange(e.target.value);
  }

  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input value={temperature}
               onChange={this.handleChange} />
      </fieldset>
    );
  }
}

// {
//   temperature: '37',
//   scale: 'c'
// }

// {
//   temperature: '212',
//   scale: 'f'
// }
class Calculator extends React.Component{
  constructor(props){
    super(props);
    this.handleCelsiusChange  = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange  = this.handleFahrenheitChange.bind(this);
  }
  handleCelsiusChange(temperature){
    this.setState({scale: 'c', temperature});
  }
  handleFahrenheitChange(temperature) {
    this.setState({scale: 'f', temperature});
  }
  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
    return (
      <div>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange} />
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange} />
        <BoilingVerdict
          celsius={parseFloat(celsius)} />
      </div>
    );
  }
}


// React有十分强大的组合模式。我们推荐使用组合而非继承来实现组件间的代码重用。
function FancyBorder(props){
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  )
}

function WelcomeDialog(){
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        Welcome
      </h1>
      <p className="Dialog-message">
        Thank you for visiting our spacecraft!
      </p>
    </FancyBorder>
  )
}

function SplitPane(props){
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">
        {props.left}
      </div>
      <div className="SplitPane-right">
        {props.right}
      </div>
    </div>
  );
}


function App() {
  return (
    <SplitPane
      left={
        <Contacts />
      }
      right={
        <Chat />
      } />
  );
}

function Dialog(props) {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        {props.title}
      </h1>
      <p className="Dialog-message">
        {props.message}
      </p>
    </FancyBorder>
  );
}

function WelcomeDialog() {
  return (
    <Dialog
      title="Welcome"
      message="Thank you for visiting our spacecraft!" />
  );
}


function Dialog(props){
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        {props.title}
      </h1>
      <p className="Dialog-message">
        {props.message}
      </p>
      {props.children}
    </FancyBorder>
  )
}
class SignUpDialog extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.state = {login: ''};
  }
  render() {
    return (
      <Dialog title="Mars Exploration Program"
              message="How should we refer to you?">
        <input value={this.state.login}
               onChange={this.handleChange} />
        <button onClick={this.handleSignUp}>
          Sign Me Up!
        </button>
      </Dialog>
    );
  }

  handleChange(e){
    this.setState({login: e.target.value});
  }

  handleSignUp() {
    alert(`Welcome aboard, ${this.state.login}!`);
  }
}


class OuterClickExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.toggleContainer = React.createRef();
    this.onClickHandler = this.onClickHandler.bind(this);
    this.onClickOutsideHandler = this.onClickOutsideHandler.bind(this);
  }

  componentDidMount() {
    window.addEventListener('click', this.onClickOutsideHandler);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.onClickOutsideHandler);
  }

  onClickHandler() {
    this.setState(currentState => ({
      isOpen: !currentState.isOpen
    }));
  }

  onClickOutsideHandler(event) {
    if (this.state.isOpen && !this.toggleContainer.current.contains(event.target)) {
      this.setState({ isOpen: false });
    }
  }

  render() {
    return (
      <div ref={this.toggleContainer}>
        <button onClick={this.onClickHandler}>Select an option</button>
        {this.state.isOpen && (
          <ul>
            <li>Option 1</li>
            <li>Option 2</li>
            <li>Option 3</li>
          </ul>
        )}
      </div>
    );
  }
}

class BlurExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false };
    this.timeOutId = null;

    this.onClickHandler = this.onClickHandler.bind(this);
    this.onBlurHandler = this.onBlurHandler.bind(this);
    this.onFocusHandler = this.onFocusHandler.bind(this);
  }

  onClickHandler() {
    this.setState(currentState => ({
      isOpen: !currentState.isOpen
    }));
  }

  // 我们在下一个时间点使用 setTimeout 关闭弹窗。
  // 这是必要的，因为失去焦点事件会在新的焦点事件前被触发，
  // 我们需要通过这个步骤确认这个元素的一个子节点
  // 是否得到了焦点。
  onBlurHandler() {
    this.timeOutId = setTimeout(() => {
      this.setState({
        isOpen: false
      });
    });
  }

  // 如果一个子节点获得了焦点，不要关闭弹窗。
  onFocusHandler() {
    clearTimeout(this.timeOutId);
  }

  render() {
    // React 通过把失去焦点和获得焦点事件传输给父节点
    // 来帮助我们。
    return (
      <div onBlur={this.onBlurHandler}
           onFocus={this.onFocusHandler}>
        <button onClick={this.onClickHandler}
                aria-haspopup="true"
                aria-expanded={this.state.isOpen}>
          Select an option
        </button>
        {this.state.isOpen && (
          <ul>
            <li>Option 1</li>
            <li>Option 2</li>
            <li>Option 3</li>
          </ul>
        )}
      </div>
    );
  }
}


// 代码分割，按需加载，赖加载，显著提高应用性能

import()

React.lazy

const OtherComponent = React.lazy(() => import('./OtherComponent'))

// Context 提供了一个无需为每层组件手动添加props,就能在组件树间进行数据传递的方法

// Context设计目的是为了共享那些对于一个组件树而言是全局的数据,例如当前认证的用户