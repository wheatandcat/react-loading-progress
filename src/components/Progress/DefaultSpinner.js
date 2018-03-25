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

  const style = {}

  const imageStyle = {}

  const size = width > height ? height : width

  const CenterIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    > * {
      width: ${size * iconSize * 0.8 * iconWidthSize}px;
      height: ${size * iconSize * 0.8 * iconHeightSize}px;
      min-width: 30x;
      min-height: 30px;
      max-width: 150px;
      max-height: 150px;
    }
  `

  const TopIcon = styled.div`
    display: flex;
    justify-content: center;

    > * {
      width: ${size * iconSize * 0.8 * iconWidthSize}px;
      height: ${size * iconSize * 0.8 * iconHeightSize}px;
      min-width: 30px;
      min-height: 30px;
      max-width: 150px;
      max-height: 150px;
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
