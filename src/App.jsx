import logo from './logo.svg'
import './App.css'
import { HighCode } from '../dist/react-highlight-code.es.js'
import '../dist/style.css'
function App() {
  const height = '200px'
  const value = `import { HighCode } from 'vue-highlight-code';
import 'vue-highlight-code/dist/style.css';
export default {
    components: {
      HighCode
    },
    data(){
  
    }
}`
  return (
    <div className="wrapper">
      <HighCode className="code" height={height} codeValue={value}></HighCode>
    </div>
  )
}

export default App
