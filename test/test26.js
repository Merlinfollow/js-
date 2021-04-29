import store from "./store";

/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2021-01-29 14:52:52
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-04-29 16:13:26
 */
const defaultState = { count: 1}; //默认数据
export default (state = defaultState, action) =>{
  return state;
}

// 写出高标准的代码, 格式一定要注意

// export defaultState = {}

export default (state = defaultState, action) =>{
  return state;
}

// 组件中取出state
this.state = store.getState();
console.log(this.state);

this.state = store.getState();
console.log(this.state);

export default (state = defaultState,action) =>{
  if(action.type === 'changeInput'){
    let newState = JSON.parse(JSON.stringify(state)); //深度拷贝state
    newState.inputValue = action.value;
    return newState;
  }
  if(action.type === 'addItem'){
    let newState = JSON.parse(JSON.stringify(state));
    newState.list.push(newState.inputValue);
    newState.inputValue = '';
    return newState;
  }
  if(action.type === 'deleteItem'){
    //复制一份state然后再进行修改
    let newState = JSON.parse(JSON.stringify(state));
    // let newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.index,1);
    return newState;
  }
  return state;
}


export default (state = defaultState, action) =>{
  if(action.type === 'changeInput'){
    let newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  }
  if(action.type === 'addItem'){
    let newState = JSON.parse(JSON.stringify(state));
    newState.list.push(newState.inputValue);
    newState.inputValue = '';
    return newState;
  }
  if(action.type === 'deleteItem'){
    let newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.index,1);
    return newState;
  }
  return state;
}


// reducer
export default (state = defaultState, action) =>{
  if(action.type === 'changeInput'){
    let newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  }
  if(action.type === 'addItem'){
    let newState = JSON.parse(JSON.stringify(state));
    newState.list.push(newState.inputValue);
    newState.inputValue = '';
    return newState;
  }
  if(action.type === 'deleteItem'){
    let newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.index,1);
    return newState;
  }
  return state;
}

// store.subscribe(this.storeChange);

// storeChange() {
//   this.setState(store.getState());
// }

deleteItem(index){
  const action = {
    type:'deleteItem',
    index
  }
  store.dispatch(action);
}


deleteItem(index){
  const action = {
    type:'deleteItem',
    index
  }
  store.dispatch(action)
}


deleteItems(index) {
  const action = {
    type: 'deleteItem',
    index
  }
  store.dispatch(action)
}

// {
//   test:/\.(jsx|js)$/,
//   use:{
//       loader:'babel-loader',
//       options:{
//           presets:[
//               "es2015","react"
//           ]
//       }
//   },
//   exclude:/node_modules/
// }

// 压缩js代码



