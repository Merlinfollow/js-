/*
 * @Author: your name
 * @Date: 2021-04-23 17:16:02
 * @LastEditTime: 2021-04-29 10:09:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \test\test\testReducer.js
 */

// 1.reducer是个纯函数;

// 2.action是一个带type的属性对象，相当于给快递包裹打上标签;

// 3.reducer可以翻译成折叠器,和reduce的callback原理相似;

let arr = [1,2,3,4,5,6];
let sum = arr.reduce((prev,cur) =>{
    return prev + cur;
})
console.log(sum);

// 4.Reducer接收两个参数：旧的state和Action，返回一个新的state。即(state, action) => newState;

// 5.有两个注意点：一是首次执行Redux时，你需要给state一个初始值。initialState，给state赋一个初始值;
//  二是根据官网的说明，Reducer每次更新状态时需要一个新的state，因此不要直接修改旧的state参数，
//  而是应该先将旧state参数复制一份，在副本上修改值，返回这个副本。如何修改呢，怎么增加副本呢？

let arr1 = [1,2,3];
let arrs = [...arr1,4,5,6];
console.log(arrs,arr1);

// 6.reducers可以看作是一个累加器,就像从山上滚雪球下来一样;reducers是一个纯函数，不能处理异步;

// 7.start,getDefaultProps,getInitialState,componentWillMount,render,componentDidMount
//   props changed --->compomentWillReveiveProps
//   state changed --->shouldComponentUpdate

//   componentWillUpdate
//   render
//   componentDidUpate
//   componentWillUnmount


// pureComponentUpdate,

// shouldComponentUpdate(shallowEqual)   浅比较


// <NavLink to="/detail1?name=why&age=18">详情1</NavLink>

// <NavLink to={{
//     pathname: "/detail2", 
//     query: {name: "kobe", age: 30},
//     state: {height: 1.98, address: "洛杉矶"},
//     search: "?apikey=123"
//   }}>
//   详情2
// </NavLink>

// console.log(this.props.location);

const initialState = {
    counter: 0,
    banners: [],
    recommends: []
};

// 注意代码的格式，特别是空格
function reducer(state = initialState, action){
    switch(action.type){
        case 'INCREMENT':
            return {...state, counter: state.counter + action.num};
        case 'DECERMENT':
            return {...state, counter: state.counter - action.num};
        default:
            return state;
    }
}

// yarn具有如下优势：
// 1.安装速度快
// 2.版本锁定
// 3.缓存机制

// npm install                   yarn
// npm install react --save      yarn add react
// npm uninstall react  --save   yarn remove react

// npm install react --save-dev  yarn add react --dev

// combineReducers

// 熟悉markdown文档的编写

// markdown编写规则
// 1. # <h1> - <h6>
// 2. ***或者---   华丽的分割线
// 3. `` 单行代码
// 4. ``` ``` 多行代码   注意都有空格的
// 5. > 代码块