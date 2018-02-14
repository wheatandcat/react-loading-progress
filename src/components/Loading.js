import React, { Component } from "react"
import PropTypes from "prop-types"
import SpinnerSvg from "./Spinner.svg"

export default class extends Component {
  static defaultProps = {
    loading: false,
    icon: null,
    error: false,
  }

  static propTypes = {
    loading: PropTypes.bool,
    icon: PropTypes.any,
    error: PropTypes.bool,
  }

  static childContextTypes = {
    isLoad: PropTypes.func,
    icon: PropTypes.func,
    isError: PropTypes.func,
  }

  getChildContext() {
    return {
      isLoad: this.isLoad,
      icon: this.getIcon,
      isError: this.isError,
    }
  }

  isLoad = () => {
    return this.props.loading
  }

  isError = () => {
    return this.props.error
  }

  getIcon = () => {
    if (this.props.icon === null) {
      return <img src={SpinnerSvg} alt="loading" />
    }

    return this.props.icon
  }

  render() {
    return this.props.children
  }
}
