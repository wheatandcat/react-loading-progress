import React from "react"
import { render } from "react-dom"
import Table from "./Table/Connected"

render(
  <div>
    <h1>react-loading-progress demos</h1>
    <div>
      github:{" "}
      <a href="https://github.com/wheatandcat/react-loading-progress">
        https://github.com/wheatandcat/react-loading-progress
      </a>
    </div>
    <br />
    <div>
      <a href="https://github.com/wheatandcat/react-loading-progress/tree/master/example">
        src
      </a>
    </div>
    <br />

    <Table />
  </div>,
  document.getElementById("root")
)
