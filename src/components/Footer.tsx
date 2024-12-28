import React from 'react'

export default function Footer() {
  return (
    <footer className='bg-gray-800 text-white py-8'>
      <div className='container mx-auto text-center'>
        <p className='text-sm'>
          &copy; {new Date().getFullYear()} Sheharyar Khan. All rights reserved.
        </p>
        <div className='mt-4'>
          <a href='/privacy-policy' className='text-white hover:text-blue-500'>
            Privacy Policy
          </a>
          <span className='mx-2'>|</span>
          <a href='/terms-of-service' className='text-white hover:text-blue-500'>
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  )
}
