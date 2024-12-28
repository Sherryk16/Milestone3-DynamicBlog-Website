import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function AuthorCard() {
  return (
    <div className='bg-white shadow-lg rounded-lg p-6 mt-12'>
      <div className='flex items-center animation-fadeIn'>
     <Image className='rounded-full mr-4 object-cover border-2 border-black' src={'/sheharyar.jpg'} width={64} height={64} alt='author'/>
     <div>
        <h3 className='text-xl font-bold'>Sheharyar Khan</h3>
        <p className='text-slate-500'>UI/UX Designer|Web Developer{""}</p>
     </div>

      </div>
      <p className='mt-4 text-black leading-relaxed'>Shehayar Khan Is 18 Year Old UI/UX Designer and Web Develepor</p>
      <div className='mt-4 flex space-x-3'>
      <Link href={'/'} className='px-4 py-2 text-white bg-blue-500 rounded-md hover:scale-105 transition duration-300'>
      LinkedIn
      </Link>
      <Link href={'/'} className='px-4 py-2 text-white bg-blue-500 rounded-md hover:scale-105 transition duration-300'>
      Github
      </Link>
      <Link href={'/'} className='px-4 py-2 text-white bg-blue-500 rounded-md hover:scale-105 transition duration-300'>
      Instagram
      </Link>
      <Link href={'/'} className='px-4 py-2 text-white bg-blue-500 rounded-md hover:scale-105 transition duration-300'>
      Facebook
      </Link>
      </div>
    </div>
  )
}
