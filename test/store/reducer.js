/*
 * @,@Author: ,: your name
 * @,@Date: ,: 2020-12-15 11:47:11
 * @LastEditTime: 2021-02-04 10:00:54
 * @LastEditors: sueRimn
 * @,@Description: ,: In User Settings Edit
 * @,@FilePath: ,: \test\store\reducer.js
 */
import {CHANGE_INPUT,ADD_ITEM,DELETE_ITEM} from './actionTypes'

const defaultState = {
    inputValue : 'Write Something',
    list:[
        '早上4点起床，锻炼身体',
        '中午下班游泳一小时'
    ]
}
export default (state = defaultState,action)=>{
    if(action.type === CHANGE_INPUT){
        let newState = JSON.parse(JSON.stringify(state)) //深度拷贝state
        newState.inputValue = action.value
        return newState
    }
    //state值只能传递，不能使用
    if(action.type === ADD_ITEM ){ //根据type值，编写业务逻辑
        let newState = JSON.parse(JSON.stringify(state)) 
        newState.list.push(newState.inputValue)  //push新的内容到列表中去
        newState.inputValue = ''
        return newState
    }
    if(action.type === DELETE_ITEM ){ //根据type值，编写业务逻辑
        let newState = JSON.parse(JSON.stringify(state)) 
        newState.list.splice(action.index,1)  //push新的内容到列表中去
        return newState
    }
    return state
  }

  // 纯函数
  // 函数的返回结果只由传入的参数决定,而不是其它东西决定
  // 无状态组件的改写
  
  export const getTodoList = () =>{
    return (dispatch) =>{
      axios.get('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList').then((res) =>{
        const data = res.data
        const action = getListAction(data)
        dispatch(action)
      })
    }
  }

  export const getTodoList = () =>{
    return (dispatch) =>{
      axios.get('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList').then((res) =>{
        const data = res.data
        const action = getListAction(data)
        dispatch(action)
      })
    }
  }


  export const getTodoList = () =>{
    return (dispatch) =>{
      axios.get('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList').then((res) =>{
        const data = res.data
        const action = getListAction(data)
        dispatch(action)
      })
    }
  }

  // react-redux
  // redux的中间件
  // redux-thunk,redux-saga
  // redux的中间件
  // redux-thunk    把向后台请求数据的程序放到中间件中,这样就形成了一套完整的redux流程,所有的逻辑都是在redux内部完成的
  // Redux-saga

  import createSagaMiddleware from 'redux-saga';
  const sagaMiddleware = createSagaMiddleware();

  // React-redux中的Provider和connect
  // Provider connect
  <Provider></Provider>
  // <Provider>是一个提供器,只要使用了这个组件,组件里边的其它所有组件都可以使用store了,这也是React-redux的核心组件了.

const App = (
  <Provider store={store}>
    <TodoList/>
  </Provider>
)

import {connect} from 'react-redux'
import TodoList from './TodoList'
import { PureComponent } from 'react'
import { getListAction } from './actionCreatores'

const stateToProps = (state) =>{
  return {
    inputValue:state.inputValue
  }
}

export default connect(stateToProps,null)(TodoList)

// 虽然componentWillReceiveProps依然会执行，但是这次组件没有重新render。
// 所以，我们对于无状态组件，我们应该尽量使用PureComponent，需要注意的是PureComponent只关注属性值，也就意味着对象和数组发生了变化是不会触发render的。
// PureComponent
  

// 4、componentDidUpdate生命周期在shouldComponentUpdate返回true后触发。在此生命周期中setState会导致视图再次更新，类似于componentDidMount，因此除非特殊业务需求，否则不建议在此生命周期中使用setState。


// oldProps === newProps ?
// 即本次更新的props（newProps）不等于上次更新的props（oldProps）。
// 注意这里是全等比较。
// 我们知道组件render会返回JSX，JSX是React.createElement的语法糖。
// 所以render的返回结果实际上是React.createElement的执行结果，即一个包含props属性的对象。

// 即使本次更新与上次更新props中每一项参数都没有变化，但是本次更新是React.createElement的执行结果，是一个全新的props引用，所以oldProps !== newProps。
// 如果我们使用了PureComponent或Memo，那么在判断是进入render还是bailout时，不会判断oldProps与newProps是否全等，而是会对props内每个属性进行浅比较。


// 你这个键盘我很难明白啊,是否全等,而是会对props内每个属性进行浅比较
// oldProps === newProps?
// 即本次更新的props(newProps)不等于上次更新的props(oldProps)


// constructor构造函数
// 只执行一次： constructor、componentWillMount、componentDidMount

// 执行多次：render 、子组件的componentWillReceiveProps、componentWillUpdate、componentDidUpdate

// 有条件的执行：componentWillUnmount（页面离开，组件销毁时）

// 不执行的：根组件（ReactDOM.render在DOM上的组件）的componentWillReceiveProps（因为压根没有父组件给传递props）


// 不执行的生命周期有  ReactDOM.render在DOM上的组件的componentWillReceiveProps
// 因为压根没有父组件传递props



// A、开始前首先需要知道componentWillReceiveProps函数有一个参数nextProps，它是一个 { 对象 } ，从单词就可以看出它是update时候（也就是下一次）父组件传递过来的props。

// B、还要知道 "第一条中" 所讲解的有些生命周期函数只执行一次，而有的执行多次，其中componentWillReceiveProps执行多次，而constructor等执行一次。

// C、还需知道在子组件中每次传递过来的this.props对象其实和componentWillReceiveProps的nextProps是一样的，都是最新的。

// D、由"第一条"得知： componentWillReceiveProps生命周期是在更新子组件最先执行的,优先于compoentWillUpdate，更优先于render。

// componentWillReceProps生命周期是在更新子组件最先执行的,优先于componentWillUpdate,更优先于render

// E、render函数里不能使用setState()，否则会造成死循环。


// componentWillReceiveProps =====>   componentWillUpdate ====> render
// render函数里不能使用setState(),否则会造成死循环