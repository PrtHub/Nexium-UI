import { getHighlighter } from 'shiki'

let highlighter: Awaited<ReturnType<typeof getHighlighter>>

export async function highlight(code: string, lang: string) {
  if (!highlighter) {
    highlighter = await getHighlighter({
      themes: ['dark-plus', 'light-plus'],
      langs: ['typescript', 'javascript', 'tsx', 'jsx', 'bash', 'json'],
    })
  }

  return highlighter.codeToHtml(code, { 
    lang, 
    themes: {
      light: 'light-plus',
      dark: 'dark-plus'
    } 
  })
}
