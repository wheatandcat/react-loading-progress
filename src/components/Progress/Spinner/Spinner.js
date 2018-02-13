import React from "react"
import styled from "styled-components"

const Load = styled.div`
  display: flex;
  justify-content: ${props => props.placement};
  align-items: center;
  position: absolute;
  z-index: 2;
`

export default ({
  component,
  iconHeight,
  iconWidth,
  placement,
  height,
  width,
}) => {
  const style = {
    width: `${width}px`,
    height: `${height}px`,
  }

  const imageStyle = {
    width: `${iconWidth}px`,
    height: `${iconHeight}px`,
  }

  const Icon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    > * {
      width: ${iconWidth * 0.8}px;
      height: ${iconHeight * 0.8}px;
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
