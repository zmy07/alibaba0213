import React from 'react'
import Head from './head/Head'
import Search from './search/Search'
import News from './news/News'

class Page extends React.Component {
  render() {
    return (
      <>
        {/* 头部 */}
        <Head />
        {/* 搜索区域 */}
        <Search />
        {/* 区域 */}
        <News />
      </>
    )
  }
}
export default Page
