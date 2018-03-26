import React, { Component, Fragment } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Plain = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
  transition: opacity 800ms 0s ease;
  position: absolute;
  z-index: 3;
`

class Fade extends Component {
  state = {
    opacity: 0,
    block: false,
  }

  static defaultProps = {
    width: null,
    height: null,
    fadeOut: false,
  }

  static propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    fadeOut: PropTypes.bool.isRequired,
  }

  componentDidMount() {
    if (this.props.fadeOut) {
      setTimeout(() => this.setState({ block: false }), 800)
      this.fadeOut()
    } else {
      this.setState({ block: true })
      this.fadeOut()
      setTimeout(() => this.fadeIn(), 10)
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.fadeOut) {
      setTimeout(() => this.setState({ block: false }), 800)
      this.fadeOut()
    } else {
      this.setState({ block: true })
      this.fadeOut()
      setTimeout(() => this.fadeIn(), 10)
    }
  }

  fadeIn = () => {
    this.setState({
      opacity: 1,
    })
  }

  fadeOut = () => {
    this.setState({
      opacity: 0,
    })
  }

  render() {
    if (!this.props.mask) {
      return this.props.children
    }

    if (this.state.height === 0 && this.state.width === 0) {
      return this.props.children
    }

    const style = {
      height: `${this.props.height}px`,
      width: `${this.props.width}px`,
      opacity: this.state.opacity,
      visibility: "hidden",
    }

    if (!this.state.block) {
      return this.props.children
    }

    return (
      <Fragment>
        <Plain style={style} />
        {this.props.children}
      </Fragment>
    )
  }
}

export default Fade
