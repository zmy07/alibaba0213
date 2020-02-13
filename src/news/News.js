import React from 'react'
import Scroll from '../component/Scroll'
import './News.scss'

class News extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        {
          id: 1,
          text: '1口碑-O2O业务发展专家/高级',
          city: '杭州',
          time: '7分钟前'
        },
        {
          id: 2,
          text: '2口碑-O2O业务发展专家/高级=aa',
          city: '杭州s',
          time: '7分钟'
        },
        {
          id: 3,
          text: '3口碑-O2O业务发展专家/高级qw',
          city: '杭州aa',
          time: '7分钟前'
        },
        {
          id: 4,
          text: '4口碑-O2O业务发展专家',
          city: '杭州a',
          time: '7分钟aaa'
        },
        {
          id: 5,
          text: '5口碑-O2O业务发展专家/高',
          city: '杭州aa',
          time: '7分钟1'
        },
        {
          id: 6,
          text: '6口碑-O2O业务发展专家/高级klsl',
          city: '杭州sss',
          time: '7分钟前aa'
        },
        {
          id: 7,
          text: '口碑-O2O业务发展专家/高级ass',
          city: '杭州a',
          time: '7分钟前11'
        },
        { id: 8, text: '口碑-O2O业务发展专家/高', city: '杭州11', time: '7' },
        {
          id: 9,
          text: '口碑-O2O业务发展专家/高级qq',
          city: '杭州q',
          time: '7分钟'
        },
        {
          id: 10,
          text: '口碑-O2O业务发展专家/高级aaaaa',
          city: '杭州1',
          time: '7分钟前11'
        },
        {
          id: 11,
          text: '口碑-O2O业务发展专家/高级qq',
          city: '杭州1',
          time: '7分钟前11'
        }
        // {
        //   id: 12,
        //   text: '口碑-O2O业务发展专家/高级',
        //   city: '杭州',
        //   time: '7分钟前'
        // },
        // {
        //   id: 13,
        //   text: '口碑-O2O业务发展专家/高级=aa',
        //   city: '杭州s',
        //   time: '7分钟'
        // }
        // {
        //   id: 14,
        //   text: '口碑-O2O业务发展专家/高级qw',
        //   city: '杭州aa',
        //   time: '7分钟前'
        // },
        // {
        //   id: 15,
        //   text: '口碑-O2O业务发展专家',
        //   city: '杭州a',
        //   time: '7分钟aaa'
        // },
        // { text: '口碑-O2O业务发展专家/高', city: '杭州aa', time: '7分钟1' },
        // {
        //   id: 16,
        //   text: '口碑-O2O业务发展专家/高级klsl',
        //   city: '杭州sss',
        //   time: '7分钟前aa'
        // },
        // {
        //   id: 17,
        //   text: '口碑-O2O业务发展专家/高级ass',
        //   city: '杭州a',
        //   time: '7分钟前11'
        // },
        // { id: 18, text: '口碑-O2O业务发展专家/高', city: '杭州11', time: '7' },
        // {
        //   id: 19,
        //   text: '口碑-O2O业务发展专家/高级qq',
        //   city: '杭州q',
        //   time: '7分钟'
        // },
        // {
        //   id: 20,
        //   text: '口碑-O2O业务发展专家/高级aaaaa',
        //   city: '杭州1',
        //   time: '7分钟前11'
        // },
        // {
        //   id: 21,
        //   text: '口碑-O2O业务发展专家/高级qq',
        //   city: '杭州1',
        //   time: '7分钟前11'
        // },
        // {
        //   id: 22,
        //   text: '口碑-O2O业务发展专家/高级',
        //   city: '杭州',
        //   time: '7分钟前'
        // },
        // {
        //   id: 23,
        //   text: '口碑-O2O业务发展专家/高级=aa',
        //   city: '杭州s',
        //   time: '7分钟'
        // },
        // {
        //   id: 24,
        //   text: '口碑-O2O业务发展专家/高级qw',
        //   city: '杭州aa',
        //   time: '7分钟前'
        // },
        // {
        //   id: 25,
        //   text: '口碑-O2O业务发展专家',
        //   city: '杭州a',
        //   time: '7分钟aaa'
        // },
        // {
        //   id: 26,
        //   text: '口碑-O2O业务发展专家/高',
        //   city: '杭州aa',
        //   time: '7分钟1'
        // },
        // {
        //   id: 27,
        //   text: '口碑-O2O业务发展专家/高级klsl',
        //   city: '杭州sss',
        //   time: '7分钟前aa'
        // },
        // {
        //   id: 28,
        //   text: '口碑-O2O业务发展专家/高级ass',
        //   city: '杭州a',
        //   time: '7分钟前11'
        // },
        // { id: 29, text: '口碑-O2O业务发展专家/高', city: '杭州11', time: '7' },
        // {
        //   id: 30,
        //   text: '口碑-O2O业务发展专家/高级qq',
        //   city: '杭州q',
        //   time: '7分钟'
        // }
      ]
    }
  }
  render() {
    return (
      <div className="news">
        <Scroll data={this.state.data} totalHeight={300} lineh={30} />
      </div>
    )
  }
}

export default News
