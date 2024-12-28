import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function AuthorCard() {
  return (
    <div className='bg-white shadow-lg rounded-lg p-6 mt-12'>
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
          <p className='text-slate-500'>UI/UX Designer | Web Developer</p>
        </div>
      </div>
      <p className='mt-4 text-black leading-relaxed'>
        Sheharyar Khan is an 18-year-old UI/UX Designer and Web Developer.
      </p>
      <div className='mt-6 flex flex-wrap justify-start gap-4 sm:justify-start md:justify-center'>
        <Link
          href={'/'}
          className='px-3 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 transition duration-300 text-xs sm:px-4 sm:py-3 sm:text-sm md:px-6 md:py-3 md:text-base w-24 sm:w-32 md:w-auto'
        >
          LinkedIn
        </Link>
        <Link
          href={'/'}
          className='px-3 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 transition duration-300 text-xs sm:px-4 sm:py-3 sm:text-sm md:px-6 md:py-3 md:text-base w-24 sm:w-32 md:w-auto'
        >
          Github
        </Link>
        <Link
          href={'/'}
          className='px-3 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 transition duration-300 text-xs sm:px-4 sm:py-3 sm:text-sm md:px-6 md:py-3 md:text-base w-24 sm:w-32 md:w-auto'
        >
          Instagram
        </Link>
        <Link
          href={'/'}
          className='px-3 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 transition duration-300 text-xs sm:px-4 sm:py-3 sm:text-sm md:px-6 md:py-3 md:text-base w-24 sm:w-32 md:w-auto'
        >
          Facebook
        </Link>
      </div>
    </div>
  )
}
