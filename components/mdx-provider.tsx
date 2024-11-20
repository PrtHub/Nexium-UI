import { MDXProvider } from '@mdx-js/react'
import { components as mdxComponents } from './mdx-components'
import { Button } from './ui/button'

const components = {
  ...mdxComponents,
  Button,
}

export function MDXContent({ children }: { children: React.ReactNode }) {
  return <MDXProvider components={components}>{children}</MDXProvider>
}
