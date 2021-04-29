/*
 * @,@Author: ,: your name
 * @,@Date: ,: 2020-12-18 11:45:50
 * @LastEditTime: 2021-04-26 14:41:31
 * @LastEditors: Please set LastEditors
 * @,@Description: ,: In User Settings Edit
 * @,@FilePath: ,: \test\test20.jsx
 */
import React, { Component } from 'react'

// 快捷键

// rcc  快速创建一个组件
export default class test20 extends Component {
  render() {
    return (
      <div>
        
      </div>
    )
  }
}

// rconst  快速创建一个 constuctor
// constructor(props) {
//   super(props)

//   this.state = {
     
//   }
// }

import React, { Component } from 'react'

export default class test20 extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  
  render() {
    return (
      <div>
        
      </div>
    )
  }
}



// rcep  快速创建一个组件
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class test20 extends Component {
  static propTypes = {

  }

  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default test20



// rcredux  快速创建一个 redux 格式的类模板
import React, { Component } from 'react'
import { connect } from 'react-redux'

export class test20 extends Component {
  render() {
    return (
      <div>
        
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(test20)


