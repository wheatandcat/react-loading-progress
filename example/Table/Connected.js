import React, { Component } from "react"
import styled from "styled-components"
import Loading, { Progress } from "../../src/"
import Table from "./Table"
import Board from "./Board"

const Root = styled.div`
  width: 100%;
  height: 100%;
`

export default class extends Component {
  state = {
    items: null,
    loading: true,
  }
  componentDidMount() {
    setTimeout(this.setItem, 2000)
  }

  onAdd = () => {
    this.setState({
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
          status: "on",
        },
      ],
    })
  }

  setItem = () => {
    const items = [
      {
        id: 1,
        name: "foo",
        status: "on",
      },
      {
        id: 2,
        name: "bar",
        status: "on",
      },
    ]

    this.setState({
      loading: false,
      items,
    })
  }

  render() {
    if (this.state.items === null) {
      return (
        <Root>
          <Loading loading={this.state.loading}>
            <Progress size={0.5} />
          </Loading>
        </Root>
      )
    }

    return (
      <Root>
        <Loading loading={this.state.loading}>
          <Board onAdd={this.onAdd}>
            <Progress>
              <Table items={this.state.items} />
            </Progress>
          </Board>
        </Loading>
      </Root>
    )
  }
}
