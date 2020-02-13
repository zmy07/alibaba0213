import React from 'react'
import './Search.scss'

function Search() {
  return (
    <div className="search">
      <img
        src="https://img.alicdn.com/tfs/TB14TEEm7CWBuNjy0FaXXXUlXXa-1440-478.png"
        alt=""
      />
      <div className="mask"></div>
      <div className="title">
        <p>If not now,when?</p>
        <p>If not me,who?</p>
        <p id="third">此时此刻，非我莫属！</p>
        <div className="box">
          <div className="backgroundbox"></div>
          <input type="text" placeholder="请输入职位关键词" />
          <button>搜索</button>
        </div>
        <div className="keyword">
          <div className="hotsearch">热门搜索：</div>
          <div className="keys">
            <a href="javascript:void()">JAVA</a>
            <a href="javascript:void()">IOS</a>
            <a href="javascript:void()">数据</a>
            <a href="javascript:void()">安全</a>
            <a href="javascript:void()">搜索</a>
            <a href="javascript:void()">算法</a>
            <a href="javascript:void()">运营</a>
            <a href="javascript:void()">视觉</a>
            <a href="javascript:void()">交互</a>
            <a href="javascript:void()">前端</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search
