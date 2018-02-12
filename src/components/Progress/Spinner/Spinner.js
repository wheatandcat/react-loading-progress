import React from "react"
import styled from "styled-components"

const Load = styled.div`
  display: flex;
  justify-content: ${props => props.placement};
  align-items: center;
  position: absolute;
  z-index: 2;
`

export default ({ src, srcSize, placement, height, width }) => {
  const style = {
    width: `${width}px`,
    height: `${height}px`,
  }

  const imageStyle = {
    width: `${srcSize}px`,
    height: `${srcSize}px`,
  }

  return (
    <Load style={style} placement={placement}>
      <img src={src} alt="loading" style={imageStyle} />
    </Load>
  )
}
