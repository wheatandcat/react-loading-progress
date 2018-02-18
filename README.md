# react-loading-progress

[![npm version](https://badge.fury.io/js/react-loading-progress.svg)](https://badge.fury.io/js/react-loading-progress)

Loading display components

## Installation
```js
npm i react-loading-progress
```

## Usage

### src
```js
import React from "react"
import Button from "material-ui/Button"
import Loading, { Progress } from "react-loading-progress"

export default () => (
  <Loading loading={true} error={false}>
    <Progress>
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
    </Progress>
  </Loading>
)
```

### Props

#### Loading
```js
import Loading from "react-loading-progress"

render ( <Loading loading={true} error={false} icon={<div>foo</div>} >...)
```

|name|Type|default|Description|
|:---|:---|:---|:---|
|loading|boolean|false|loading display|
|error|boolean|false|error display|
|icon|node|(default loading icon)|Use when you want to customize loading display|

#### Progress
```js
import { Progress } from "react-loading-progress"

render ( <Progress isCheckRow>...)
```

|name|Type|default|Description|
|:---|:---|:---|:---|
|placement|center,left.right|center|Display position|
|mask|boolean|false|Display mask|
|noChild|boolean|false|Do not display children while loading|
|errorNoChild|boolean|false|Do not display children while error|
|errorText|string|null|Text to display on error|
|size|number|1|Loading display size|
|heightSize|number|1|Loading display height size|
|widthSize|number|1|Loading display width size|
|maxHeight|number|100|Maximum height in loading (px)|
|maxWidth|number|100|Maximum width in loading (px)|
|ripple|boolean|false|on ripple effect|
|update|boolean|false|display updating|


## DEMOS
* examples
  * https://wheatandcat.github.io/examples-pages/react-loading-progress/index.html?v1

* storybook
  * https://wheatandcat.github.io/react-loading-progress
