/*
 * @,@Author: ,: your name
 * @,@Date: ,: 2020-12-18 15:49:25
 * @,@LastEditTime: ,: 2020-12-18 17:42:04
 * @,@LastEditors: ,: Please set LastEditors
 * @,@Description: ,: In User Settings Edit
 * @,@FilePath: ,: \test\test22.js
 */

// 畅谈BFC
// 我们常说的文档流其实分为定位流,浮动流,普通流三种
// BFC(Block Formatting Context)  格式化上下文
// 特点是防止margin发生重叠
// 给盒子设置overflow:hidden形成BFC
// BFC的作用就是解决边距重叠问题,清除浮动


// IE盒模型,标准盒模型
// IE盒模型:content宽高 = border + padding + 内容宽高
// 标准盒模型:content宽高 = 内容宽高
// 盒模型的边距发生重叠,去最大值,如果有负数则由两数相加


// CSS各种动画练习
// https://segmentfault.com/a/1190000015439611?utm_source=sf-related
