import React, { Component, Fragment } from "react"
import ReactDOM from "react-dom"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"
import Ripple from "../Ripple"
import Fade from "../Fade"
import Err from "../Error"
import Update from "../Update"
import Spinner from "./Spinner/Connected"
import DefaultSpinner from "./DefaultSpinner"

export default class extends Component {
  state = {
    height: 0,
    width: 0,
    ripple: false,
    rootHeight: 0,
    rootWidth: 0,
    isLoad: null,
  }

  static defaultProps = {
    placement: "center",
    mask: true,
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
    center: true,
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
    center: PropTypes.bool,
  }

  static contextTypes = {
    isLoad: PropTypes.func,
    icon: PropTypes.func,
    isError: PropTypes.func,
  }

  componentDidMount() {
    setTimeout(() => this.changeRoot(), 10)
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

    setTimeout(() => this.changeRoot(), 50)
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (
      this.context.isLoad() !== this.state.isLoad ||
      nextProps.children !== this.props.children
    ) {
      this.setState({
        isLoad: this.context.isLoad(),
      })
      return true
    }

    if (
      this.state.height === nextState.height &&
      this.state.width === nextState.width
    ) {
      return false
    }

    this.setState({
      isLoad: this.context.isLoad(),
    })

    return true
  }

  getIcon = () => {
    if (this.props.update) {
      return <Update />
    }

    return this.context.icon()
  }

  changeRoot = async () => {
    if (this.context.isLoad()) {
      setTimeout(() => this.changeRoot(), 50)
    }

    const root = await ReactDOM.findDOMNode(this.root)
    if (!root) {
      return
    }

    if (root.offsetHeight === 0 || root.offsetWidth === 0) {
      return
    }

    this.setState({
      height: root.offsetHeight,
      width: root.offsetWidth,
      rootHeight: root.offsetHeight,
      rootWidth: root.offsetWidth,
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
          center={this.props.center}
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
            {this.props.children}
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

          {this.props.children}
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
          center={this.props.center}
        />
        {!this.props.noChild ? (
          <div
            style={{
              opacity: "0.25",
              zIndex: 1,
            }}
          >
            {this.props.children}
          </div>
        ) : (
          <div />
        )}
      </Fragment>
    )
  }

  render() {
    return (
      <div ref={node => (this.root = node)}>
        <Fade
          mask={this.props.mask}
          width={this.state.width}
          height={this.state.height}
          fadeOut={!this.context.isLoad()}
        >
          {this.content()}
        </Fade>
      </div>
    )
  }
}
