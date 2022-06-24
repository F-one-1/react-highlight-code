import React, { useEffect, useRef } from 'react'
import './style/HighCode.scss'
import classNames from 'classnames'
import CopyCode from './CopyCode'
import TypeShow from './TypeShow'
import hljs from 'highlight.js'
import '../theme/atom_one_dark.scss'
import '../theme/atom_one_light.scss'
export default function HighCode(props) {
  let {
    copy = true,
    nameShow = true,
    langName,
    lang = 'javascript',
    theme = 'dark',
    width = '520px',
    height = '',
    maxWidth = '',
    maxHeight = '200px',
    scrollStyleBool = true,
    codeValue = '',
    fontSize = 16,
    codeLines = false,
  } = props
  const border_radius = '12px'
  const withoutHeader = true
  // const codeArea = useRef(null)
  // console.log(codeArea, 'test')
  const code_hljs = classNames({
    code: true,
    hljs: true,
    atom_one_dark: theme === 'dark',
    atom_one_light: theme === 'light',
  })
  const code_area = classNames({
    code_area: true,
    srollbar_style: scrollStyleBool === true,
  })
  const code_lc = classNames({
    hljs: true,
    [`language-${lang}`]: true,
  })
  const codeHighlight = useRef(null)
  console.log(langName, props.langName, 'langName')
  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    if (codeHighlight && codeHighlight.current) {
      codeHighlight.current.textContent = props.codeValue
      hljs.highlightElement(codeHighlight.current)
    }
  })
  // useEffect(() => {
  //   highlightCode()
  // })
  // // console.dir(codeHighlight)
  // const highlightCode = () => {
  //   const nodes = this.el.querySelectorAll('pre code')

  //   for (let i = 0; i < nodes.length; i++) {
  //     hljs.highlightBlock(nodes[i])
  //   }
  // }

  return (
    <div
      className={code_hljs}
      style={{
        width: width,
        height: height,
        borderRadius: '10px',
        zIndex: '700',
        maxWidth: props.maxwidth,
        // minWidth: '540px',
        maxHeight: props.maxHeight,
      }}
    >
      <div className="code_header">
        {nameShow && <TypeShow TL={langName || props.langName}></TypeShow>}
        {copy && <CopyCode codeValue={props.codeValue}></CopyCode>}
      </div>
      <div
        className={code_area}
        style={{
          borderBottomLeftRadius: border_radius,
          borderBottomRightRadius: border_radius,
          borderTopLeftRadius: withoutHeader === true ? border_radius : 0,
          borderTopRightRadius: withoutHeader === true ? border_radius : 0,
        }}
      >
        <pre>
          <code
            ref={codeHighlight}
            className={code_lc}
            style={{
              fontSize: fontSize,
            }}
          ></code>
        </pre>
      </div>
    </div>
  )
}
