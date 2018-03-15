import React from "react"
import ReactDOM from "react-dom"
import styled from "styled-components"

const Center = styled.div`
  display: flex;
  justify-content: ${props => props.placement};
  align-items: center;
  z-index: 2;
`

const Top = styled.div`
  display: flex;
  justify-content: ${props => props.placement};
  padding-top: 1rem;
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
  center,
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

  const CenterIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    > * {
      width: ${size * iconSize * 0.8 * iconWidthSize}px;
      height: ${size * iconSize * 0.8 * iconHeightSize}px;
      max-width: 50px;
      max-height: 50px;
    }
  `

  const TopIcon = styled.div`
    display: flex;
    justify-content: center;

    > * {
      width: ${size * iconSize * 0.8 * iconWidthSize}px;
      height: ${size * iconSize * 0.8 * iconHeightSize}px;
      max-width: 50px;
      max-height: 50px;
    }
  `

  const Load = center ? Center : Top
  const Icon = center ? CenterIcon : TopIcon

  return (
    <Load style={style} placement={placement}>
      <Icon style={imageStyle}>{component}</Icon>
    </Load>
  )
}
