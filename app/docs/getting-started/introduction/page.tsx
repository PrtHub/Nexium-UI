"use client"

import Content from '@/content/docs/getting-started/introduction.mdx'
import { MDXContent } from '@/components/mdx-provider'

// export const metadata = {
//   title: 'Introduction - Nexium UI',
//   description: 'Introduction to Nexium UI component library'
// }

export default function IntroductionPage() {
  return (
    <section className="flex-1 pt-7 px-20 prose prose-invert max-w-none">
      <MDXContent>
        <Content />
      </MDXContent>
    </section>
  )
}