import React from "react"
import styled from "styled-components"
import MuiButton from "material-ui/Button"
import MuiPaper from "material-ui/Paper"
import Divider from "material-ui/Divider"

const Paper = styled(MuiPaper)`
  padding: 1rem;
`

const Button = styled(MuiButton)`
  margin: 1rem !important;
`

export default ({ children, onAdd, onUpdate, onError, onUpdateError }) => (
  <Paper>
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
    <Divider />
    {children}
  </Paper>
)
