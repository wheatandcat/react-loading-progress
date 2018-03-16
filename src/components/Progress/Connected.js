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

const Root = styled.div``

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
    this.changeRoot()
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
  }

  getIcon = () => {
    if (this.props.update) {
      return <Update />
    }

    return this.context.icon()
  }

  changeRoot = async () => {
    const root = await ReactDOM.findDOMNode(this.root)
    console.log(root)
    console.log(root.offsetHeight)
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
            <div ref={node => (this.main = node)}>{this.props.children}</div>
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

          <div ref={node => (this.main = node)}>{this.props.children}</div>
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
            ref={node => (this.main = node)}
            style={{
              opacity: "0.25",
              zIndex: 1,
            }}
          >
            {this.props.children}
          </div>
        ) : (
          <div style={{}} />
        )}
      </Fragment>
    )
  }

  render() {
    let contents = this.content()

    if (this.props.mask && this.context.isLoad()) {
      contents = (
        <Fade
          width={this.state.width}
          height={this.state.height}
          fadeOut={!this.context.isLoad()}
        >
          {this.content()}
        </Fade>
      )
    }

    return <Root ref={node => (this.root = node)}>{contents}</Root>
  }
}
