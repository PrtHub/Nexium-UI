"use client"

import React, { useState } from 'react'
import Wrapper from './wrapper'
import Link from 'next/link'
import { Search } from 'lucide-react'

const NavigationBar = () => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  return (
    <section className='sticky top-0 w-full flex-1 border-b border-gray-300/10 backdrop-blur-md z-50'>
      <Wrapper>
        <nav className='flex flex-1 items-center justify-between py-3'>
          <section className='flex items-center justify-center gap-x-10'>
            <Link href="/" className='group flex items-center gap-2'>
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center">
                <span className='font-bold text-lg text-white group-hover:scale-110 transition-transform duration-200'>N</span>
              </div>
              <h1 className='font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300/80 group-hover:to-white transition-colors duration-200'>
                Nexium UI
              </h1>
            </Link>
            <ul className='flex items-center justify-center gap-x-5'>
            <Link 
                href='/docs' 
                className='relative cursor-pointer font-medium capitalize text-gray-300 hover:text-white transition-colors duration-200 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-indigo-500 after:transition-transform after:duration-300 hover:after:scale-x-100'
              >
                Docs
              </Link>
              <Link 
                href='/docs/components' 
                className='relative cursor-pointer font-medium capitalize text-gray-300 hover:text-white transition-colors duration-200 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-indigo-500 after:transition-transform after:duration-300 hover:after:scale-x-100'
              >
                Components
              </Link>
            </ul>
          </section>
          <section className='flex items-center gap-4'>
            <div className={`relative transition-all duration-200 ${isSearchFocused ? 'w-64' : 'w-48'}`}>
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={16} className="text-gray-500" />
              </div>
              <input
                type='text'
                placeholder='Search components...'
                className='w-full border-none outline-none bg-gray-900/50 rounded-lg pl-10 pr-4 py-2 placeholder:text-gray-500/50 focus:outline-none focus:ring-[1px] focus:ring-inset focus:ring-indigo-500 transition-all duration-200'
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
              />
            </div>
            <Link 
              href="https://github.com/PrtHub/Nexium-UI" 
              target="_blank"
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              GitHub
            </Link>
          </section>
        </nav>
      </Wrapper>
    </section>
  )
}

export default NavigationBar