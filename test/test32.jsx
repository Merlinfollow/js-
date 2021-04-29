/*
 * @Author: your name
 * @Date: 2021-04-22 14:45:00
 * @LastEditTime: 2021-04-22 15:41:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test\test\test32.js
 */
function NumberList(props){
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>{
        <ListItem key = {number.toString()} value= {number}/>
    })
    return (
        <ul>
          <li>{listItems}</li>
        </ul>
    )
}

function NumberList(props){
    const numbers = props.numbers;
    return (
        <ul>
          {numbers.map((number) =>{
              <ListItem value={number} key={number.toString()}/>
          })}
        </ul>
    )
}



function Blog(props){
    const sidebar = (
        <ul>
          {props.posts.map((post) =>{
              <li key={post.id}>
                {post.title}
              </li>
          })}
        </ul>
    )

    const content = props.posts.map((post)=>{
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

    const posts = [
      {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
      {id: 2, title: 'Installation', content: 'You can install React from npm.'}
    ]

    ReactDOM.render(
      <Blog posts={posts}/>,
      document.getElementById('root')
    )
}