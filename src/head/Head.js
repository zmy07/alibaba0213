import React from 'react'
import './head.scss'

function Head() {
  return (
    <div className="top">
      <div className="content">
        <div className="lefttitle">
          <a href="javascript:void()">
            <img
              src="https://img.alicdn.com/tfs/TB1Zv8_lxSYBuNjSspjXXX73VXa-390-63.png"
              alt=""
              style={{ height: 20, marginRight: 10 }}
            />
          </a>
          <span>|</span>
          <span style={{ marginLeft: 10, color: '#fff', opacity: 0.8 }}>
            社招官网
          </span>
          <ul className="left">
            <li>
              <a href="javascript:void()">首页</a>
            </li>
            <li>
              <a href="javascript:void()">社会招聘</a>
            </li>
            <li>
              <a href="javascript:void()">校园招聘</a>
            </li>
            <li>
              <a href="javascript:void()">了解阿里</a>
            </li>
            <li>
              <a href="javascript:void()">个人中心</a>
            </li>
          </ul>
        </div>
        <div className="right">
          <div>欢迎来到阿里巴巴集团招聘！</div>
          <a href="javascript:void()">登录</a>｜
          <a href="javascript:void()">注册</a>
        </div>
      </div>
    </div>
  )
}

export default Head
