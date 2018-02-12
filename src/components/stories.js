import React from "react"
import styled from "styled-components"
import { storiesOf } from "@storybook/react"
import { withKnobs, boolean, number } from "@storybook/addon-knobs"
import { action } from "@storybook/addon-actions"
import Loading from "./Loading"
import Progress from "./Progress/Connected"
import Ripple from "./Ripple"
import Fade from "./Fade"

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

storiesOf("Fade", module)
  .addDecorator(withKnobs)
  .add("Fade", () => (
    <Fade width={300} height={200} fadeOut={boolean("fadeOut", false)} />
  ))

storiesOf("Ripple", module)
  .addDecorator(withKnobs)
  .add("Ripple", () => <Ripple width={100} height={25} />)

storiesOf("Loading", module)
  .addDecorator(withKnobs)
  .add("Loading", () => (
    <Loading loading={boolean("loading", false)}>
      <Progress>
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
            </tbody>
          </table>
        </CustomTable>
      </Progress>
    </Loading>
  ))
  .add("Loading with mask", () => (
    <Loading loading={boolean("loading", false)}>
      <Progress background="rgba(0, 0, 0, 0.3)">
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
            </tbody>
          </table>
        </CustomTable>
      </Progress>
    </Loading>
  ))
  .add("item Loading", () => (
    <Loading loading={boolean("loading", false)}>
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
              <td>
                <Progress placement="left">foo </Progress>
              </td>
              <td>baz</td>
            </tr>
            <tr>
              <td>2</td>
              <td>
                <Progress placement="left">bar </Progress>
              </td>
              <td>baz</td>
            </tr>
          </tbody>
        </table>
      </CustomTable>
    </Loading>
  ))
  .add("Loading with noChild", () => (
    <Loading loading={boolean("loading", false)}>
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
              <td>
                <Progress placement="left" noChild size={1.5}>
                  foo
                </Progress>
              </td>
              <td>baz</td>
            </tr>
            <tr>
              <td>2</td>
              <td>
                <Progress placement="left" noChild size={1.5}>
                  bar
                </Progress>
              </td>
              <td>baz</td>
            </tr>
          </tbody>
        </table>
      </CustomTable>
    </Loading>
  ))
  .add("Loading with ripple effect", () => (
    <Loading loading={boolean("loading", false)}>
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
              <td>
                <Progress placement="left" noChild size={1.5} ripple>
                  foo
                </Progress>
              </td>
              <td>baz</td>
            </tr>
            <tr>
              <td>2</td>
              <td>
                <Progress placement="left" noChild size={1.5} ripple>
                  bar
                </Progress>
              </td>
              <td>baz</td>
            </tr>
          </tbody>
        </table>
      </CustomTable>
    </Loading>
  ))
