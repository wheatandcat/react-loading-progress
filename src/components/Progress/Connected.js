import React, { Component, Fragment } from "react"
import ReactDOM from "react-dom"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"
import Ripple from "../Ripple"
import SpinnerSvg from "./Spinner.svg"
import Spinner from "./Spinner/Connected"

const Main = styled.div`
  opacity: 0.25;
  z-index: 1;
`

export default class extends Component {
  state = {
    height: 24,
    width: 24,
    ripple: false,
  }

  static defaultProps = {
    placement: "center",
    background: "none",
    noChild: false,
    size: 1,
    ripple: false,
  }

  static propTypes = {
    background: PropTypes.string,
    noChild: PropTypes.bool,
    size: PropTypes.number,
    ripple: PropTypes.bool,
  }

  static contextTypes = {
    isLoad: PropTypes.func,
  }

  componentDidMount() {
    this.changeState()
  }

  componentWillReceiveProps() {
    if (this.context.isLoad()) {
      this.setState({
        ripple: this.props.ripple,
      })
    }

    if (this.context.isLoad() && this.props.noChild) {
      return
    }

    this.changeState()
  }

  changeState = async () => {
    const main = await ReactDOM.findDOMNode(this.refs.main)
    if (!main) {
      return
    }

    if (main.offsetHeight === 0 || main.offsetWidth === 0) {
      return
    }

    this.setState({
      height: main.offsetHeight,
      width: main.offsetWidth,
    })
  }

  getPlacement = placement => {
    if (placement === "left") {
      return "flex-start"
    }

    if (placement === "right") {
      return "flex-end"
    }

    return "center"
  }

  render() {
    if (!this.context.isLoad()) {
      return (
        <Fragment>
          {this.state.ripple ? (
            <Ripple
              width={this.state.width}
              height={this.state.height}
              placement={this.getPlacement(this.props.placement)}
            />
          ) : null}

          <div ref="main">{this.props.children}</div>
        </Fragment>
      )
    }

    return (
      <Fragment>
        <Spinner
          src={SpinnerSvg}
          srcSize={this.props.size}
          placement={this.getPlacement(this.props.placement)}
          height={this.state.height}
          width={this.state.width}
        />
        {!this.props.noChild ? (
          <Main ref="main">{this.props.children}</Main>
        ) : (
          <div
            style={{
              width: "0px",
              height: `${this.state.height}px`,
            }}
          />
        )}
      </Fragment>
    )
  }
}
