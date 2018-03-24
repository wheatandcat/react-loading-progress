/* eslint-disable flowtype/require-valid-file-annotation */
import React from "react"

export const provider = story => (
  <div
    style={{
      height: "100%",
      width: "100%",
      padding: "10px",
    }}
  >
    {story()}
  </div>
)

export const center = story => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100%",
    }}
  >
    {story()}
  </div>
)
