import React, { Component, Fragment } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Plain = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  transition: all 700ms 0s ease;
  position: absolute;
`

class Fade extends Component {
  state = {
    opacity: 0,
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

  componentWillReceiveProps(nextProps) {
    if (nextProps.fadeOut) {
      this.fadeOut()
    } else {
      this.fadeIn()
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
    const style = {
      height: `${this.props.height}px`,
      width: `${this.props.width}px`,
      opacity: this.state.opacity,
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
