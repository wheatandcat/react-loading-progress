import React, { Component } from "react"
import PropTypes from "prop-types"
import SpinnerSvg from "./Spinner.svg"

export default class extends Component {
  static defaultProps = {
    loading: false,
    icon: null,
  }

  static propTypes = {
    loading: PropTypes.bool,
    icon: PropTypes.any,
  }

  static childContextTypes = {
    isLoad: PropTypes.func,
    icon: PropTypes.func,
  }

  getChildContext() {
    return {
      isLoad: this.isLoad,
      icon: this.getIcon,
    }
  }

  isLoad = () => {
    return this.props.loading
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
