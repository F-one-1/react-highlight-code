## Highlight Code for React

 only one prop to show highlightCode using highlight.js



<p>
  <a href="https://npm-stat.com/charts.html?package=react-highlight-code">
    <img alt="Downloads" src="https://img.shields.io/npm/dm/react-highlight-code.svg">
  </a>
  <a href="https://npmjs.com/package/react-highlight-code">
    <img alt="Version" src="https://img.shields.io/npm/v/react-highlight-code.svg"/>
  </a>
  <a href="http://packagequality.com/#?package=react-highlight-code">
    <img alt="Quality" src="https://npm.packagequality.com/shield/react-highlight-code.svg">
  </a>
</p>


```
yarn add highlight.js react-highlight-code
```

## live demo

[stackblitz highlight demo](https://stackblitz.com/github/F-one-1/react-highlight-code?file=src%2FApp.jsx)



### 1. use in react

Install the `react-highlight-code` and `highlight.js`:

import the component and style

```js
import { HighCode } from 'react-highlight-code'
import 'react-highlight-code/dist/style.css'
const value = 'only one prop to show highlightCode using highlight.js'
<HighCode codeValue={value}></HighCode>
```

![BC ~P}8(~@476~S4DTVM99V](https://user-images.githubusercontent.com/68687740/175461527-acad549a-b44d-4a00-9c3a-3642b0f01fc5.png)

![VY~~5VUAX 5IGNCE)$ZZ43H](https://user-images.githubusercontent.com/68687740/175461537-e482fa19-21dc-43d3-a617-3cab870d5bf9.png)



### Component Props

| prop            | description                                     | type      | default                                                |
| :-------------- | :---------------------------------------------- | :-------- | :----------------------------------------------------- |
| codeValue       | Highlight Code Source                           | `String`  | `''`                                                   |
| lang            | Highlight Code Type                             | `String`  | `javascript` (such as 'javascript','vue','html','css') |
| theme           | Component Highlight Code theme                  | `String`  | default: `dark`(only ['dark','light'])                 |
| codeLines       | Show Code lines                                 | `Boolean` | `false`                                                |
| langName        | Highlight Code Name (Upper left corner display) | `String`  | ``                                                     |
| width           | component style width                           | `String`  | `620px`                                                |
| height          | component style height                          | `String`  | ``                                                     |
| maxWidth        | component style max-width                       | `String`  | ``                                                     |
| maxHight        | component style max-height`String`              | `String`  | `200px`                                                |
| fontSize        | highlight code font-size                        | `Number`  | -                                                      |
| scrollStyleBool | component scroll bar style                      | `Boolean` | `true`                                                 |
| copy            | whether the code can copy and show              | `Boolean` | `true`                                                 |
