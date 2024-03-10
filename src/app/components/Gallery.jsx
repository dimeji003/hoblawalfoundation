import React from 'react'
import Image from 'next/image'

export default function Gallery() {
  return (
    <div className=' md:py-20'>
        <h2 className='text-center'>OUR <span className='text-red-700 text-2xl'>GALLERY</span></h2>
        <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 w-[60%] gap-8 py-6 m-auto'>

        <Image src='/gallery1.jpeg' alt='' height={250} width={250} />
        <Image src='/gallery2.jpeg' alt='' height={250} width={250} />
        <Image src='/gallery3.jpeg' alt='' height={250} width={250} />
        <Image src='/gallery4.jpeg' alt='' height={250} width={250} />
        <Image src='/gallery5.jpeg' alt='' height={250} width={250} />
        
        </div>
    </div>
  )
}
