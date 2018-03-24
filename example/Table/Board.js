import React from "react"
import styled from "styled-components"

const Paper = styled.div`
  padding: 1rem;
  height: auto;
  min-height: 100%;
`

const Button = styled.button`
  margin: 1rem !important;
`

export default ({
  children,
  onAdd,
  onUpdate,
  onError,
  onUpdateError,
  onRandom,
}) => (
  <Paper>
    <Button variant="raised" onClick={onRandom}>
      data random
    </Button>

    <Button variant="raised" color="secondary" onClick={onAdd}>
      add item
    </Button>

    <Button variant="raised" color="primary" onClick={onUpdate}>
      update status
    </Button>

    <Button variant="raised" onClick={onError}>
      Error!!
    </Button>

    <Button variant="raised" onClick={onUpdateError}>
      update status Error!!
    </Button>
    <hr />
    {children}
  </Paper>
)
