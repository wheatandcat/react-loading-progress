import React, { Component } from "react"
import PropTypes from "prop-types"

export default class extends Component {
  static defaultProps = {
    loading: false,
  }

  static propTypes = {
    loading: PropTypes.bool,
  }

  static childContextTypes = {
    isLoad: PropTypes.func,
  }

  getChildContext() {
    return {
      isLoad: this.isLoad,
    }
  }

  isLoad = () => {
    return this.props.loading
  }

  render() {
    return this.props.children
  }
}
