import React from "react"
import styled from "styled-components"
import { storiesOf } from "@storybook/react"
import { withKnobs, boolean, number } from "@storybook/addon-knobs"
import { action } from "@storybook/addon-actions"
import Loading2 from "./Loading/Loading"
import Loading from "./Loading"
import Progress from "./Progress/Connected"
import Ripple from "./Ripple"
import Fade from "./Fade"
import Rolling from "./Rolling.svg"
import Bubble from "./Bubble.svg"
import Fountain from "./Fountain.svg"
import Spinner from "./Spinner"
import { ProgressItem, ProgressUpdateItem, DefaultProgress } from "./Customize"

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

storiesOf("Customize", module)
  .addDecorator(withKnobs)
  .add("DefaultProgress", () => <DefaultProgress />)

storiesOf("Icon", module)
  .addDecorator(withKnobs)
  .add("Spinner", () => <Spinner />)

storiesOf("Fade", module)
  .addDecorator(withKnobs)
  .add("Fade", () => (
    <Fade width={300} height={200} fadeOut={boolean("fadeOut", true)} />
  ))

storiesOf("Ripple", module)
  .addDecorator(withKnobs)
  .add("Ripple", () => <Ripple width={100} height={25} />)

storiesOf("Loading", module)
  .addDecorator(withKnobs)
  .add("Loading", () => (
    <Loading loading={boolean("loading", true)}>
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
    <Loading loading={boolean("loading", true)}>
      <Progress mask>
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
  .add("Loading with error", () => (
    <Loading
      loading={boolean("loading", false)}
      error={boolean("error", false)}
    >
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
  .add("item Loading", () => (
    <Loading
      loading={boolean("loading", false)}
      error={boolean("error", false)}
    >
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
                <Progress
                  placement="left"
                  errorNoChild
                  errorText="Error!! update"
                  center
                >
                  foo
                </Progress>
              </td>
              <td>baz</td>
            </tr>
            <tr>
              <td>2</td>
              <td>
                <Progress
                  placement="left"
                  errorNoChild
                  errorText="Error!! update"
                  center
                >
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
  .add("Loading with noChild", () => (
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
              <td>
                <ProgressItem>foo</ProgressItem>
              </td>
              <td>baz</td>
            </tr>
            <tr>
              <td>2</td>
              <td>
                <ProgressItem>bar</ProgressItem>
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
                <ProgressItem ripple>foo</ProgressItem>
              </td>
              <td>baz</td>
            </tr>
            <tr>
              <td>2</td>
              <td>
                <ProgressItem ripple>bar</ProgressItem>
              </td>
              <td>baz</td>
            </tr>
          </tbody>
        </table>
      </CustomTable>
    </Loading>
  ))
  .add("Update", () => (
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
                <ProgressUpdateItem ripple>foo</ProgressUpdateItem>
              </td>
              <td>baz</td>
            </tr>
            <tr>
              <td>2</td>
              <td>
                <ProgressUpdateItem ripple>bar</ProgressUpdateItem>
              </td>
              <td>baz</td>
            </tr>
          </tbody>
        </table>
      </CustomTable>
    </Loading>
  ))
  .add("Default loading", () => (
    <div
      style={{
        width: "600px",
        height: "1200px",
        border: "medium solid #eee",
      }}
    >
      <Loading loading={boolean("loading", true)}>
        <Progress size={0.75} />
      </Loading>
    </div>
  ))

storiesOf("Example customize icon", module)
  .addDecorator(withKnobs)
  .add("Rolling", () => (
    <Loading
      icon={<img src={Rolling} alt="loading" />}
      loading={boolean("loading", true)}
    >
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
  .add("Bubble", () => (
    <Loading
      icon={<img src={Bubble} alt="loading" />}
      loading={boolean("loading", true)}
    >
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
                <Progress placement="left" noChild size={1}>
                  foo
                </Progress>
              </td>
              <td>baz</td>
            </tr>
            <tr>
              <td>2</td>
              <td>
                <Progress placement="left" noChild size={1}>
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
  .add("Fountain", () => (
    <Loading
      icon={<img src={Fountain} alt="loading" />}
      loading={boolean("loading", true)}
    >
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
                <Progress placement="left" noChild size={0.75} widthSize={6}>
                  foo
                </Progress>
              </td>
              <td>baz</td>
            </tr>
            <tr>
              <td>2</td>
              <td>
                <Progress placement="left" noChild size={0.75} widthSize={6}>
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
  .add("Default Fountain", () => (
    <div
      style={{
        width: "600px",
        height: "200px",
        border: "medium solid #eee",
      }}
    >
      <Loading
        icon={<img src={Fountain} alt="loading" />}
        loading={boolean("loading", true)}
      >
        <Progress size={0.5} heightSize={0.2} widthSize={3.5} />
      </Loading>
    </div>
  ))
