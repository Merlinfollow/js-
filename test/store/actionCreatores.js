/*
 * @,@Author: ,: your name
 * @,@Date: ,: 2020-12-15 11:24:05
 * @LastEditTime: 2021-02-03 13:39:29
 * @LastEditors: sueRimn
 * @,@Description: ,: In User Settings Edit
 * @,@FilePath: ,: \test\store\actionCreatores.js
 */
import {CHANGE_INPUT, ADD_ITEM,DELETE_ITEM}  from './actionTypes'

export const changeInputAction = (value)=>({
    type:CHANGE_INPUT,
    value
})

export const addItemAction = ()=>({
    type:ADD_ITEM
})

export const deleteItemAction = (index)=>({
    type:DELETE_ITEM,
    index
})

export const getListAction = (index)=>({
  type:GET_LIST,
  index
})
