"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "./ui/button"
import { CheckIcon, CopyIcon } from "lucide-react"

interface CodeBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  expandable?: boolean
  raw?: string
}

export function CodeBlock({
  expandable = false,
  raw,
  className,
  children,
  ...props
}: CodeBlockProps) {
  const [copied, setCopied] = React.useState(false)

  React.useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => setCopied(false), 1000)
      return () => clearTimeout(timer)
    }
  }, [copied])

  const onCopy = () => {
    setCopied(true)
    if (raw) {
      navigator.clipboard.writeText(raw)
    }
  }

  return (
    <div className={cn("relative group", className)} {...props}>
      <div
        className={cn(
          "rounded-md border px-4 bg-zinc-950",
          expandable && "max-h-[350px] overflow-y-auto"
        )}
      >
        {children}
      </div>
      <Button
        size="icon"
        variant="ghost"
        className="absolute right-4 top-4 opacity-0 group-hover:opacity-100 transition"
        onClick={onCopy}
      >
        {copied ? (
          <CheckIcon className="h-4 w-4 text-green-500" />
        ) : (
          <CopyIcon className="h-4 w-4" />
        )}
      </Button>
    </div>
  )
}
