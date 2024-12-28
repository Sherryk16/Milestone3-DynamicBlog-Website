import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function AuthorCard() {
  return (
    <div className='bg-white shadow-lg rounded-lg p-6 mt-12 mb-5' >
      <div className='flex items-center animation-fadeIn'>
        <Image
          className='rounded-full mr-4 object-cover border-2 border-black'
          src={'/sheharyar.jpg'}
          width={64}
          height={64}
          alt='author'
        />
        <div>
          <h3 className='text-xl font-bold'>Sheharyar Khan</h3>
          <p className='text-slate-500'>UI/UX Designer|Web Developer</p>
        </div>
      </div>
      <p className='mt-4 text-black leading-relaxed'>
        Shehayar Khan is an 18-year-old UI/UX Designer and Web Developer.
      </p>
      <div className='mt-4 flex flex-wrap space-x-3 justify-center'>
        <Link
          href={'/'}
          className='px-4 py-2 text-white bg-blue-500 rounded-md hover:scale-105 transition duration-300 text-sm sm:px-4 sm:text-base'
        >
          LinkedIn
        </Link>
        <Link
          href={'/'}
          className='px-4 py-2 text-white bg-blue-500 rounded-md hover:scale-105 transition duration-300 text-sm sm:px-4 sm:text-base'
        >
          Github
        </Link>
        <Link
          href={'/'}
          className='px-4 py-2 text-white bg-blue-500 rounded-md hover:scale-105 transition duration-300 text-sm sm:px-4 sm:text-base'
        >
          Instagram
        </Link>
        <Link
          href={'/'}
          className='px-4 py-2 text-white bg-blue-500 rounded-md hover:scale-105 transition duration-300 text-sm sm:px-4 sm:text-base'
        >
          Facebook
        </Link>
      </div>
    </div>
  )
}
