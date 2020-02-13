import React from 'react'
import './Scroll.scss'

class Scroll extends React.Component {
  timeId
  constructor(props) {
    super(props)
    this.containerRef = React.createRef()
  }

  updateData = arr => {
    return arr.concat(
      arr.slice(0, Math.ceil((this.props.totalHeight - 50) / this.props.lineh))
    )
  }

  componentDidMount() {
    // this.setState({ data: this.updateData(this.state.data) })
    this.timeId = setInterval(this.scroll, 1000 / 15)
  }

  componentWillUnmount() {
    window.clearInterval(this.timeId)
  }

  scroll = () => {
    let top = parseInt(this.containerRef.current.style.top)
    this.containerRef.current.style.top = top - 1 + 'px'
    if (Math.abs(top) >= this.props.lineh * this.props.data.length) {
      this.containerRef.current.style.top = 0 + 'px'
    }
  }

  move = () => {
    window.clearInterval(this.timeId)
  }

  out = () => {
    this.timeId = setInterval(this.scroll, 1000 / 15)
  }

  render() {
    const { data, totalHeight, lineh } = this.props
    let dataArr = this.updateData(data)
    return (
      <div className="scroll" style={{ height: totalHeight }}>
        <div className="head">
          <div>最新职位</div>
          <a href="javascript:void()">更多</a>
        </div>
        <div
          className="scrollbox"
          style={{ height: totalHeight - 50 }}
          onMouseOver={this.move}
          onMouseOut={this.out}
        >
          <ul id="container" ref={this.containerRef} style={{ top: 0 }}>
            {dataArr.map((item, index) => (
              <li
                key={index + item.id}
                style={{ height: lineh, lineHeight: lineh + 'px' }}
              >
                <a href="javascript:void()">{item.text}</a>
                <div className="city">{item.city}</div>
                <div className="time">{item.time}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Scroll
