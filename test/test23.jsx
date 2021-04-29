/*
 * @Email: xxxx
 * @Author: xxxx
 * @Github: xxxx
 * @Date: 2021-04-26 15:04:31
 * @Description: 
 */
// react的快捷键
rcc,rconst,rcep,rcredux


// rcc和rconst
import React, { Component } from 'react'

export default class test23 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             value: 123
        }
    }
    
    render() {
        return (
            <div>
                
            </div>
        )
    }
}


import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class test23 extends Component {
    static propTypes = {

    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default test23


rcredux
import React, { Component } from 'react'
import { connect } from 'react-redux'

export class test23 extends Component {
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

export default connect(mapStateToProps, mapDispatchToProps)(test23)


// rcreduxp
// rcreduxp

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class test23 extends Component {
    static propTypes = {
        prop: PropTypes
    }

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

export default connect(mapStateToProps, mapDispatchToProps)(test23)
