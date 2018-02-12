import React, { Component } from "react"
import PropTypes from "prop-types"
import Spinner from "./Spinner"

export default class extends Component {
  static defaultProps = {
    src: null,
    srcSize: 1,
    placement: "center",
    height: null,
    width: null,
  }

  static propTypes = {
    src: PropTypes.any,
    srcSize: PropTypes.number,
    placement: PropTypes.string,
    height: PropTypes.number,
    width: PropTypes.number,
  }

  render() {
    if (this.props.height === null || this.props.width === null) {
      return null
    }

    const size =
      this.props.width > this.props.height
        ? this.props.height
        : this.props.width

    return (
      <Spinner
        src={this.props.src}
        srcSize={size * this.props.srcSize}
        placement={this.props.placement}
        height={this.props.height}
        width={this.props.width}
      />
    )
  }
}
