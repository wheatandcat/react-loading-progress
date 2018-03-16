import React from "react"
import styled from "styled-components"
import { storiesOf } from "@storybook/react"
import { withKnobs, boolean, number } from "@storybook/addon-knobs"
import { action } from "@storybook/addon-actions"
import Loading from "./Loading"

const CustomTable = styled.div`
  table {
    width: 100%;
    border-collapse: collapse;

    tr {
      border-bottom: 1px solid #ddd;
    }

    tr.tr-body:hover {
      background-color: #f5f5f5;
    }

    tr.tr-checked {
      background-color: #f5f5f5;
    }

    th {
      padding: 0.5rem;
      text-align: left;
      color: #9a9a9a;
    }

    td {
      padding: 0.5rem;
      text-align: left;
    }
  }
`
storiesOf("Loading2", module)
  .addDecorator(withKnobs)
  .add("Loading", () => (
    <Loading loading={boolean("loading", true)}>
      <CustomTable>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>foo</td>
              <td>baz</td>
            </tr>
            <tr>
              <td>2</td>
              <td>bar</td>
              <td>baz</td>
            </tr>
            <tr>
              <td>3</td>
              <td>bar</td>
              <td>baz</td>
            </tr>
            <tr>
              <td>4</td>
              <td>bar</td>
              <td>baz</td>
            </tr>
            <tr>
              <td>5</td>
              <td>bar</td>
              <td>baz</td>
            </tr>
          </tbody>
        </table>
      </CustomTable>
    </Loading>
  ))
  .add("no Child", () => <Loading loading={boolean("loading", true)} />)
