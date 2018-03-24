import React, { Component } from "react"

export default class extends Component {
  state = {
    value: null,
  }

  componentDidMount() {
    setTimeout(this.setValue, 500)
  }

  componentWillReceiveProps() {
    setTimeout(this.setValue, 500)
  }

  setValue = async () => {
    this.setState({ value: Math.ceil((Math.random() + 1) * 5) })
  }

  render() {
    return this.state.value
  }
}
