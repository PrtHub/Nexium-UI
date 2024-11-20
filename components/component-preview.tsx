import * as React from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import { CodeBlock } from "./code-block"
import { cn } from "@/lib/utils"

interface ComponentPreviewProps extends React.HTMLAttributes<HTMLDivElement> {
  code?: string
  example?: React.ReactNode
}

export default function ComponentPreview({
  code,
  example,
  className,
  ...props
}: ComponentPreviewProps) {
  return (
    <div className={cn("group relative my-4 flex flex-col space-y-2", className)} {...props}>
      <Tabs defaultValue="preview" className="relative mr-auto w-full">
        <div className="flex items-center justify-between pb-3">
          <TabsList className="w-full justify-start rounded-none border-b bg-transparent p-0">
            <TabsTrigger
              value="preview"
              className="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
            >
              Preview
            </TabsTrigger>
            <TabsTrigger
              value="code"
              className="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
            >
              Code
            </TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="preview" className="relative rounded-md border">
          <div className="preview flex min-h-[350px] w-full justify-center p-10">
            {example}
          </div>
        </TabsContent>
        <TabsContent value="code">
          <CodeBlock raw={code}>{code}</CodeBlock>
        </TabsContent>
      </Tabs>
    </div>
  )
}
