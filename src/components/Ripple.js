import React, { Component } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Root = styled.div`
  display: flex;
  justify-content: ${props => props.placement};
  align-items: center;
  overflow: hidden;
  position: absolute;
`

const Curled = styled.div`
  border-radius: 50%;
  transition: all 700ms 0s ease;
`

class Ripple extends Component {
  state = {
    size: 0,
    opacity: 1,
    timeout: null,
  }

  static defaultProps = {
    placement: "center",
    width: null,
    height: null,
    error: false,
  }

  static propTypes = {
    placement: PropTypes.string,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    error: PropTypes.bool,
  }

  componentDidMount() {
    const timeout = setTimeout(this.changeSize, 10)

    this.setState({
      timeout,
    })
  }

  componentWillUnmount() {
    if (this.state.timeout !== null) {
      clearTimeout(this.state.timeout)
    }
  }

  changeSize = () => {
    const size =
      this.props.width > this.props.height
        ? this.props.width
        : this.props.height

    this.setState({
      size,
      opacity: 0,
    })
  }

  render() {
    const rootStyle = {
      height: `${this.props.height}px`,
      width: `${this.props.width}px`,
    }

    const style = {
      height: `${this.state.size}px`,
      width: `${this.state.size}px`,
      opacity: this.state.opacity,
      backgroundColor: this.props.error
        ? "rgba(255, 0, 0, 0.3)"
        : "rgba(0, 0, 0, 0.3)",
    }

    return (
      <Root style={rootStyle} placement={this.props.placement}>
        <Curled style={style} />
      </Root>
    )
  }
}

export default Ripple
