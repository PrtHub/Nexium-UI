import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
  return (
    <section className='h-full flex flex-col gap-y-5 items-start '>
        <section className='flex flex-col gap-y-2'>
            <h3 className='font-semibold text-lg text-white'>Getting Started</h3>
            <ul className='text-base'>
                <Link href={'/docs'} className='cursor-pointer text-gray-200 font-medium hover:text-white transition-colors duration-200'>Introduction</Link>
            </ul>
        </section>
    </section>
  )
}

export default Sidebar