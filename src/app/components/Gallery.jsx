import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Gallery() {
  return (
    <div className=' py-16'>

    <div id='gallery' className='py-16s md:py-20 border-b border-gray-500'>
        <h2 className='text-center'>OUR <span className='text-red-700 text-2xl'>GALLERY</span></h2>
        <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 w-[60%] gap-8 py-10 m-auto '>

        <Image src='/gallery5.jpeg' alt='' height={250} width={350} />
        <Image src='/gallery2.jpeg' alt='' height={250} width={350} />
        <Image src='/gallery3.jpeg' alt='' height={250} width={350} />
        
        </div>
        <Link href='/gallery'>
        <div className='text-xs text-center w-[30%] rounded-2xl text-white mb-[-20px] p-3 m-auto bg-red-700'>ALL PHOTOS</div>
        </Link>
    </div>
    </div>
  )
}
