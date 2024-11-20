"use client"

import * as React from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"
import { CodeBlockWrapper } from "@/components/code-block-wrapper"

interface ComponentExampleProps extends React.HTMLAttributes<HTMLDivElement> {
  extractedCode?: string
  extractedExample?: string
  align?: "center" | "start" | "end"
}

export function ComponentExample({
  extractedCode,
  extractedExample,
  className,
  align = "center",
  ...props
}: ComponentExampleProps) {
  return (
    <div className={cn("group relative my-4 flex flex-col space-y-2", className)} {...props}>
      <Tabs defaultValue="preview" className="relative mr-auto w-full">
        <div className="flex items-center justify-between pb-3">
          <TabsList className="w-full justify-start rounded-none border-b bg-transparent p-0">
            <TabsTrigger
              value="preview"
              className="relative rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
            >
              Preview
            </TabsTrigger>
            <TabsTrigger
              value="code"
              className="relative rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
            >
              Code
            </TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="preview" className="relative rounded-md border">
          <div
            className={cn("preview flex min-h-[350px] w-full justify-center p-10", {
              "items-center": align === "center",
              "items-start": align === "start",
              "items-end": align === "end",
            })}
          >
            {extractedExample ? (
              <div dangerouslySetInnerHTML={{ __html: extractedExample }} />
            ) : null}
          </div>
        </TabsContent>
        <TabsContent value="code">
          <CodeBlockWrapper>
            {extractedCode ? (
              <pre>
                <code className="language-tsx" dangerouslySetInnerHTML={{ __html: extractedCode }} />
              </pre>
            ) : null}
          </CodeBlockWrapper>
        </TabsContent>
      </Tabs>
    </div>
  )
}
