import { useState } from 'react'
import './style/CopyCode.scss'
export default function CopyCode(props) {
  // const { codeValue } = props
  const copy = (event) => {
    setText('copied')
    // event.target.focus()
    setTimeout(() => {
      setText('copy')
    }, 1000)
    getContent()
  }
  const [text, setText] = useState('copy')

  const getContent = () => {
    navigator.clipboard.writeText(props.codeValue)
  }
  const resetMessage = (event) => {
    console.log(111)
    setText('copy')
    // event.target.unfocus()
  }
  return (
    <div className="cb" onClick={copy}>
      <div className="cb_copy">{text}</div>
    </div>
  )
}
