"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface StyleWrapperProps extends React.HTMLAttributes<HTMLDivElement> {}

export function StyleWrapper({
  children,
  className,
  ...props
}: StyleWrapperProps) {
  return (
    <div className={cn("relative w-full overflow-auto", className)} {...props}>
      {children}
    </div>
  )
}
