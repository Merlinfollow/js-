/*
 * @,@Author: ,: your name
 * @,@Date: ,: 2020-11-27 10:15:11
 * @LastEditTime: 2021-04-29 10:41:04
 * @LastEditors: Please set LastEditors
 * @,@Description: ,: In User Settings Edit
 * @,@FilePath: ,: \test\test.js
 */
var obj = (
  function () {
    var a = 1;
    var sum = 0;
    return {
      fn1:function (x) {
        sum = a + x;
        return sum;
      },
      fn2:function (y) {
        return sum + y;
      }
    }
  }
)()

function Vue(options) {
  if(process.env.NODE_ENV !== 'production' && !(this instanceof Vue)){
    warn('Vue is a constructor and should be called with the new keyword');
  }
  this._init(options);
}

var uid$3 = 0;
vm._uid = uid$3++;
vm.$options = mergeOptions(
  resolveConstructorOptions(vm.constructor),
  options || {},
  vm
)
initLifecycle();
Object.create(null);
initEvents();
initRender();
callHook(vm,'beforeCreate');
initState();
callHook(vm,'created');

callHook(vm,'beforeMount');
vm._render()  vm.$vnode;
vm._update(vm._render(),hydrating);
vm>_path_();
createElm();

if(createComponent(vnode,insertedVnodeQueue,parentElm,refElm)){
  return
}
if(isDef(tag)){
  createChildren(vnode,children,insertedVnodeQueue);
  if(isDef(data)){
    invokeCreatedHooks(vnode,insertedVnodeQueue);
  }
  insert(parentElm,vnode.elm,refElm);
}

function initState(vm){
  vm._watchers = [];
  var opts = vm.$options;
  if(opts.props){ initProps(vm,opts.props);}
  if(opts.methods){ initMethods(vm,opts.methods);}
  if(opts.data){
    initData(vm);
  }else{
    observe(vm._data = {},true);
  }
  if(opts.computed){ initComputed(vm,opts.computed);}
  if(opts.watch && opts.watch !== nativeWatch){
    initWatch(vm,opts.watch);
  }
}


// 判断数据类型的方法有typeof, instanceof, Object.prototype.toString.call()

function gettype(obj) {
  var type = typeof obj;

  if (type !== 'object') {
    return type;
  }
  //如果不是object类型的数据，直接用typeof就能判断出来

  //如果是object类型数据，准确判断类型必须使用Object.prototype.toString.call(obj)的方式才能判断
  return Object.prototype.toString.call(obj).replace(/^\[object (\S+)\]$/, '$1');
}
