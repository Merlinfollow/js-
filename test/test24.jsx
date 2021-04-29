/*
 * @Email: xxxx
 * @Author: xxxx
 * @Github: xxxx
 * @Date: 2021-04-28 11:50:10
 * @Description: 
 */
import React, { Component } from 'react';

class CounterButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 1};
        this.handleClick = this.handleClick.bind(this);
    }
    shouldComponentUpdate(nextProps, nextState) {
        if(this.props.color !== nextProps.color){
            return true;
        }
        if(this.state.count !== nextProps.state){
            return true;
        }
        return false;
    }
    handleClick() {
        this.setState(state => {
            count: this.props.count + 1;
        })
    }
    render() {
        <button color={this.props.color} onClick={handleClick}>
          Count: {this.state.count}
        </button>
    }
}


import PropTypes from 'prop-types';

MyComponent.propTypes = {
    optionArray: propTypes.array,
    optionalBool: propTypes.bool,
    optionalFunc: PropTypes.func,
    optionalNumber: PropTypes.number,
    optionalObject: PropTypes.object,
    optionalString: PropTypes.string,
    optionalSymbol: PropTypes.symbol
}


// render, shouldComponentUpdate, reducer, 高阶组件, PureComponent都是纯函数？

// 四种方式绑定this, bind方式上下两种, 箭头函数上下两种。