"use client"

import { MDXContent } from "@/components/mdx-provider"
import Content from "@/content/docs/getting-started/installation.mdx"


const InstallationPage = () => {
  return (
    <section className="flex-1 pt-7 px-20 prose prose-invert max-w-none">
      <MDXContent>
        <Content />
      </MDXContent>
    </section>
  )
}

export default InstallationPage