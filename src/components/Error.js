import React, { Component, Fragment } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Err = styled.div`
  color: #ef8f8a;
  font-size: 0.75rem;
  border-bottom: 1px solid #e8c5cb;
`

const Root = styled.div``

export default class extends Component {
  render() {
    return (
      <Root>
        {this.props.ripple}
        <Err>{this.props.errorText ? this.props.errorText : "Error"}</Err>
        {!this.props.errorNoChild ? this.props.children : null}
      </Root>
    )
  }
}
