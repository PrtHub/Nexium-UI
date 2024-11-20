import React, { useEffect } from 'react'
import Prism from 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-jsx'
import 'prismjs/components/prism-tsx'
import 'prismjs/plugins/line-numbers/prism-line-numbers'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'

interface Props {
  code: string
  language: string
  showLineNumbers?: boolean
}

export function SyntaxHighlighter({ code, language, showLineNumbers = true }: Props) {
  useEffect(() => {
    Prism.highlightAll()
  }, [code])

  return (
    <pre className={`language-${language} ${showLineNumbers ? 'line-numbers' : ''}`}>
      <code className={`language-${language}`}>{code}</code>
    </pre>
  )
}
