"use client"

import * as React from "react"

interface CodeBlockWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  expandable?: boolean
}

export function CodeBlockWrapper({
  expandable = false,
  className,
  children,
  ...props
}: CodeBlockWrapperProps) {
  const [isExpanded, setIsExpanded] = React.useState(false)

  return (
    <div
      className={className}
      {...props}
    >
      <div
        className={`relative ${
          expandable ? "max-h-[650px] overflow-hidden" : ""
        }`}
      >
        {children}
      </div>
    </div>
  )
}
