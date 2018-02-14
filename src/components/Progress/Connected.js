import React, { Component, Fragment } from "react"
import ReactDOM from "react-dom"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"
import Ripple from "../Ripple"
import Fade from "../Fade"
import Err from "../Error"
import Update from "../Update.svg"
import Spinner from "./Spinner/Connected"
import DefaultSpinner from "./DefaultSpinner"

const Root = styled.div`
  height: 100%;
  height: 100%;
`

const Main = styled.div`
  opacity: 0.25;
  z-index: 1;
`

var teget = null

export default class extends Component {
  state = {
    height: 24,
    width: 24,
    ripple: false,
    rootHeight: null,
    rootWidth: null,
  }

  static defaultProps = {
    placement: "center",
    mask: false,
    noChild: false,
    errorNoChild: false,
    errorText: "",
    size: 1,
    heightSize: 1,
    widthSize: 1,
    maxHeight: 100,
    maxWidth: 100,
    ripple: false,
    update: false,
  }

  static propTypes = {
    placement: PropTypes.string,
    mask: PropTypes.bool,
    noChild: PropTypes.bool,
    errorNoChild: PropTypes.bool,
    errorText: PropTypes.any,
    size: PropTypes.number,
    heightSize: PropTypes.number,
    widthSize: PropTypes.number,
    maxHeight: PropTypes.number,
    maxWidth: PropTypes.number,
    ripple: PropTypes.bool,
    update: PropTypes.bool,
  }

  static contextTypes = {
    isLoad: PropTypes.func,
    icon: PropTypes.func,
    isError: PropTypes.func,
  }

  componentDidMount() {
    this.changeRoot()
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

    this.changeRoot()
    this.changeState()
  }

  getIcon = () => {
    if (this.props.update) {
      return <img src={Update} alt="update" />
    }

    return this.context.icon()
  }

  changeRoot = async () => {
    const root = await ReactDOM.findDOMNode(this.refs.root)
    if (!root) {
      return
    }

    if (root.offsetHeight === 0 || root.offsetWidth === 0) {
      return
    }

    this.setState({
      rootHeight: root.offsetHeight,
      rootWidth: root.offsetWidth,
    })
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

  content = () => {
    if (this.context.isLoad() && !this.props.children) {
      return (
        <DefaultSpinner
          component={this.getIcon()}
          placement={this.getPlacement(this.props.placement)}
          width={this.state.rootWidth}
          height={this.state.rootHeight}
          iconSize={this.props.size}
          iconHeightSize={this.props.heightSize}
          iconWidthSize={this.props.widthSize}
          maxHeight={this.props.maxHeight}
          maxWidth={this.props.maxWidth}
        />
      )
    }

    if (!this.context.isLoad()) {
      if (this.context.isError()) {
        return (
          <Err
            errorNoChild={this.props.errorNoChild}
            errorText={this.props.errorText}
            ripple={
              this.state.ripple ? (
                <Ripple
                  width={this.state.width}
                  height={this.state.height}
                  placement={this.getPlacement(this.props.placement)}
                  error
                />
              ) : null
            }
          >
            <div ref="main">{this.props.children}</div>
          </Err>
        )
      }

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
          component={this.getIcon()}
          iconSize={this.props.size}
          iconHeightSize={this.props.heightSize}
          iconWidthSize={this.props.widthSize}
          placement={this.getPlacement(this.props.placement)}
          height={this.state.height}
          width={this.state.width}
          maxHeight={this.props.maxHeight}
          maxWidth={this.props.maxWidth}
        />
        {!this.props.noChild ? (
          <div
            ref="main"
            style={{
              opacity: "0.25",
              zIndex: 1,
            }}
          >
            {this.props.children}
          </div>
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

  render() {
    if (this.props.mask) {
      return (
        <Root ref="root">
          <Fade
            width={this.state.width}
            height={this.state.height}
            fadeOut={!this.context.isLoad()}
          >
            {this.content()}
          </Fade>
        </Root>
      )
    }

    return <Root ref="root">{this.content()}</Root>
  }
}
