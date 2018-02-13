import React from "react"
import ReactDOM from "react-dom"
import styled from "styled-components"

const Load = styled.div`
  display: flex;
  justify-content: ${props => props.placement};
  align-items: center;
  z-index: 2;
`

export default ({
  width,
  height,
  iconSize,
  iconHeightSize,
  iconWidthSize,
  component,
  placement,
}) => {
  if (width === null || height === null) {
    return null
  }

  const style = {
    width: "100%",
    height: "100%",
  }

  const imageStyle = {
    width: "100%",
    height: "100%",
  }

  const size = width > height ? height : width

  const Icon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    > * {
      width: ${size * iconSize * 0.8 * iconWidthSize}px;
      height: ${size * iconSize * 0.8 * iconHeightSize}px;
      max-width: 100px;
      max-height: 100px;
    }
  `

  return (
    <Load style={style} placement={placement}>
      <Icon style={imageStyle}>{component}</Icon>
    </Load>
  )
}
