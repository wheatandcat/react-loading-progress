import React from "react"
import styled from "styled-components"
import Loading from "../Loading"
import Progress from "../Progress/Connected"

const Default = styled.div`
  padding: 1rem;
`

export default ({ children, loading, ...props }) => {
  if (!children) {
    return (
      <Loading loading={loading} {...props}>
        <Progress {...props}>
          <Default>{"　"}</Default>
        </Progress>
      </Loading>
    )
  }

  return (
    <Loading loading={loading} {...props}>
      <Progress {...props}>{children}</Progress>
    </Loading>
  )
}
