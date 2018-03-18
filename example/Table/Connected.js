import React, { Component } from "react"
import styled from "styled-components"
import Loading from "../../dist/"
import Table from "./Table"
import Board from "./Board"

const Root = styled.div`
  width: 100%;
`

export default class extends Component {
  state = {
    items: null,
    loading: true,
    updateState: false,
    error: false,
    errorUpdateState: false,
  }
  componentDidMount() {
    setTimeout(this.setItem, 2000)
  }

  onAdd = () => {
    this.setState({
      error: false,
      loading: true,
    })

    setTimeout(this.addItem, 2000)
  }

  addItem = () => {
    const items = this.state.items

    this.setState({
      loading: false,
      items: [
        ...items,
        {
          id: items.length + 1,
          name: "add item",
          status: true,
        },
      ],
    })
  }

  onError = () => {
    this.setState({
      error: false,
      loading: true,
    })

    setTimeout(this.errorItem, 2000)
  }

  errorItem = () => {
    const items = this.state.items

    this.setState({
      error: true,
      loading: false,
    })
  }

  setItem = () => {
    const items = [
      {
        id: 1,
        name: "foo",
        status: true,
      },
      {
        id: 2,
        name: "bar",
        status: true,
      },
    ]

    this.setState({
      loading: false,
      items,
    })
  }

  onUpdate = () => {
    this.setState({
      errorUpdateState: false,
      updateState: true,
    })

    setTimeout(this.updateItem, 2000)
  }

  updateItem = () => {
    const items = this.state.items

    this.setState({
      updateState: false,
      items: items.map(item => ({
        ...item,
        status: !item.status,
      })),
    })
  }

  onUpdateError = () => {
    this.setState({
      updateState: true,
    })

    setTimeout(this.errorUpdateItem, 2000)
  }

  errorUpdateItem = () => {
    const items = this.state.items

    this.setState({
      errorUpdateState: true,
      updateState: false,
    })
  }

  render() {
    return (
      <Root>
        <Board
          onAdd={this.onAdd}
          onUpdate={this.onUpdate}
          onError={this.onError}
          onUpdateError={this.onUpdateError}
        >
          <Loading loading={this.state.loading} error={this.state.error}>
            {this.state.items !== null ? (
              <Table
                items={this.state.items}
                updateState={this.state.updateState}
                errorUpdateState={this.state.errorUpdateState}
              />
            ) : null}
          </Loading>
        </Board>
      </Root>
    )
  }
}
