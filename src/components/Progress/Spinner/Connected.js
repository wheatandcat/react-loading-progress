import React, { Component } from "react"
import PropTypes from "prop-types"
import Spinner from "./Spinner"

export default class extends Component {
  static defaultProps = {
    component: null,
    iconSize: 1,
    iconHeightSize: 1,
    iconWidthSize: 1,
    placement: "center",
    height: null,
    width: null,
    maxHeight: 100,
    maxWidth: 100,
  }

  static propTypes = {
    component: PropTypes.any,
    iconSize: PropTypes.number,
    iconHeightSize: PropTypes.number,
    iconWidthSize: PropTypes.number,
    placement: PropTypes.string,
    height: PropTypes.number,
    width: PropTypes.number,
    maxHeight: PropTypes.number,
    maxWidth: PropTypes.number,
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
        component={this.props.component}
        iconHeight={size * this.props.iconSize * this.props.iconHeightSize}
        iconWidth={size * this.props.iconSize * this.props.iconWidthSize}
        placement={this.props.placement}
        height={this.props.height}
        width={this.props.width}
        maxHeight={this.props.maxHeight}
        maxWidth={this.props.maxWidth}
      />
    )
  }
}
