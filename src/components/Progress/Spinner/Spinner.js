import React from "react"
import styled from "styled-components"

const Center = styled.div`
  display: flex;
  justify-content: ${props => props.placement};
  align-items: center;
  position: absolute;
  z-index: 2;
`

const Top = styled.div`
  display: flex;
  justify-content: ${props => props.placement};
  padding-top: 0.5rem;
  position: absolute;
  z-index: 2;
`

export default ({
  component,
  iconSize,
  iconHeight,
  iconWidth,
  placement,
  height,
  width,
  maxHeight,
  maxWidth,
  center,
}) => {
  const style = {
    width: `${width < 30 ? 0 : width}px`,
    height: `${height < 30 ? 0 : height}px`,
  }

  const imageStyle = {
    width: `${iconWidth}px`,
    height: `${iconHeight}px`,
  }

  const CenterIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    > * {
      width: ${iconWidth * 0.8 * (iconSize || 1.0)}px;
      height: ${iconHeight * 0.8 * (iconSize || 1.0)}px;
      min-width: 30px;
      min-height: 30px;
      max-width: 150px;
      max-height: 150px;
    }
  `

  const TopIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    > * {
      width: ${iconWidth * 0.8 * (iconSize || 1.0)}px;
      height: ${iconHeight * 0.8 * (iconSize || 1.0)}px;
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
