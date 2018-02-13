import React from "react"
import styled from "styled-components"
import MuiButton from "material-ui/Button"
import MuiPaper from "material-ui/Paper"
import Divider from "material-ui/Divider"

const Paper = styled(MuiPaper)`
  padding: 1rem;
`

const Button = styled(MuiButton)`
  margin: 1rem 0 !important;
`

export default ({ children, onAdd }) => (
  <Paper>
    <Button variant="raised" color="secondary" onClick={onAdd}>
      add item
    </Button>
    <Divider />
    {children}
  </Paper>
)
