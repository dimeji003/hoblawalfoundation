import React from 'react'
import Image from 'next/image';

const images = [
    { id: 1, image: 'gallery1' },
    { id: 2, image: 'gallery2' },
    { id: 3, image: 'gallery3' },
    { id: 4, image: 'gallery4' },
    { id: 5, image: 'gallery5' },
    { id: 6, image: 'gallery6' },
    { id: 7, image: 'gallery7' },
    { id: 8, image: 'gallery8' },
    { id: 9, image: 'gallery9' },
   
    
    { id: 14, image: 'gallery14' },
    { id: 15, image: 'gallery15' },
    { id: 16, image: 'gallery16' },
    { id: 17, image: 'gallery17' },
    { id: 18, image: 'gallery18' },
    { id: 19, image: 'gallery19' },
    { id: 20, image: 'gallery20' },
    { id: 11, image: 'gallery22' },
    { id: 12, image: 'gallery23' },
    { id: 13, image: 'gallery24' },
    { id: 10, image: 'gallery25' },
  ];
  
  
  


export default function page() {
    const gallery = images.map(image =>(
        <div key={image.id}>

            <Image src={`/${image.image}.jpg`} height={200} width={300} className='shadow-2xl' />
        </div>
    ))
  return (
    <div className='py-16'>
        <h1 className='text-center text-3xl pb-8 text-red-700'>GALLERY</h1>

        <div className='grid grid-cols-2 lg:grid-cols-4 sm:grid-cols-2 gap-3 w-[90%] m-auto '>
            {gallery}
    
        </div>
    </div>
    )
}
