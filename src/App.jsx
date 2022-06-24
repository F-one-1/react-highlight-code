import logo from './logo.svg'
import './App.css'
// import { HighCode } from 'react-highlight-code'
// import 'react-highlight-code/dist/style.css'
import HighCode from './component/HighCode'
function App() {
  // const height = '200px'
  const value = `import { HighCode } from 'react-highlight-code';
import 'react-highlight-code/dist/style.css';
const value = 'only one prop to show highlightCode using highlight.js'
return (
  <div className="wrapper">
    <HighCode className="code" langName="jsx" codeValue={value}></HighCode>
    <HighCode
      className="code"
      langName="javascript"
      codeValue={value}
      theme="light"
    ></HighCode>
  </div>
)
`
  return (
    <div className="wrapper">
      <HighCode className="code" langName="jsx" codeValue={value}></HighCode>
      <HighCode
        className="code"
        langName="javascript"
        codeValue={value}
        theme="light"
      ></HighCode>
    </div>
  )
}

export default App
