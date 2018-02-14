import React from "react"
import styled from "styled-components"
import Button from "material-ui/Button"
import Table, { Thead, Tbody, Tr, Th, Td } from "react-row-select-table"
import Loading, { Progress } from "../../src/"

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
export default ({ items, updateState, errorUpdateState }) => (
  <Loading loading={updateState} error={errorUpdateState}>
    <CustomTable>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>status</th>
          </tr>
        </thead>
        <tbody>
          {items.map(({ id, name, status }) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{name}</td>
              <td>
                <Progress noChild update ripple placement="left" errorNoChild>
                  {status ? "on" : "off"}
                </Progress>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </CustomTable>
  </Loading>
)