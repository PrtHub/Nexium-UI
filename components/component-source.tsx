"use client"

import { CodeBlockWrapper } from "@/components/code-block-wrapper"

interface ComponentSourceProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string
}

export function ComponentSource({ children, className }: ComponentSourceProps) {
  return (
    <CodeBlockWrapper className={className}>
      {children}
    </CodeBlockWrapper>
  )
}
