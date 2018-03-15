import React from "react"
import styled from "styled-components"
import Progress from "../Progress/Connected"
import Spinner from "../Spinner"

//  noChild + center（Item)
export const ProgressItem = ({ children, ...props }) => (
  <Progress placement="left" noChild center errorNoChild {...props}>
    {children}
  </Progress>
)

//  noChild + center（Item)
export const ProgressUpdateItem = ({ children, ...props }) => (
  <Progress placement="left" noChild center update errorNoChild {...props}>
    {children}
  </Progress>
)

export const DefaultProgress = () => {
  const Center = styled.div`
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;

    > * {
      width: 5rem;
      height: 5rem;
    }
  `

  return (
    <Center>
      <Spinner />
    </Center>
  )
}
