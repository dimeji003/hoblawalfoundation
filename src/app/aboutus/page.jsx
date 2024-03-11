import React from 'react'
import Image from 'next/image';

const teamMembers = [
  {
    id: 1,
    name: 'Engr HOB Lawal',
    image: 'hoblawal',
    position: '(Chairman)',
    socialLink: 'https://example.com/johndoe'
  },
  {
    id: 2,
    name: 'Mr Kola Oyekanmi',
    image: 'kola',
    position: '(Vice Chairman)',
    socialLink: 'https://example.com/janesmith'
  },
  {
    id: 3,
    name: 'Mr Abiodun Adesina',
    image: 'hoblawal',
    position: '(Member)',
    socialLink: 'https://example.com/davidjohnson'
  },
  {
    id: 4,
    name: 'Engr Niyi Lawal',
    image: 'niyi',
    position: '(Member)',
    socialLink: 'https://example.com/emilybrown'
  },
  {
    id: 5,
    name: 'Barrister Bimbo Ojedokun',
    image: 'abimbola',
    position: '(Member)',
    socialLink: 'https://example.com/michaelwilson'
  }
];




export default function page() {

  const team = teamMembers.map(member =>(
    <section key={member.id} className='flex flex-col gap-1 items-center'>
      <Image src={`/${member.image}.jpg`} alt={member.name} height={300} width={250} className='rounded-2xl' />
      <h1 className='text-center font-bold text-xl'>{member.name}</h1>
      <em className='text-sm text-red-700'>{member.position}</em>


    </section>

  ) )
  return (
    <div className='w-[90%] m-auto py-12'>
      <h2 className='text-xs text-red-700 font-extrabold pb-3 text-center'>ABOUT US</h2>
      <h1 className='text-2xl font-bold text-center'>We are here to support <span className='text-red-700'>vulnerable</span> communities.</h1>
      <p className='text-xs text-gray-500 mt-2 border-b border-gray-300 pb-10 text-center'>Through collaborative efforts, we provide essential resources like education and healthcare, empowering individuals to thrive. Together, we&apos;re building a brighter future for all, driven by compassion and collective action.</p>
      <h2 className='py-5 font-bold '>Our goal</h2>
      <p className='text-xs text-gray-500'>Our foundation is dedicated to addressing social challenges and making a positive impact within communities. Our goals encompass alleviating suffering, promoting equality, and fostering empowerment among those in need. We strive to create sustainable change by tackling root causes such as poverty and lack of access to essential services like education and healthcare. Through our efforts, we aim to inspire compassion and solidarity, fostering a more inclusive society where everyone has the opportunity to thrive.</p>

      <h1 className='mt-16 font-bold text-2xl'>Our <span className='text-red-700'>Selfless</span> Team</h1>
     <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 py-7 gap-14'>
      {team}
     </div>

    </div>
  )
}
