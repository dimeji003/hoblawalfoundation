import React from 'react'

export default function page() {
  return (
    <div className='py-20 pb-48 flex flex-col gap-3'>
        <h1 className='text-center text-3xl'>Be The <span className='text-red-700'>Change</span></h1>
        <p className='text-xs text-gray-500 text-center w-[70%] m-auto'>Lead by example and inspire others to join you. Stay persistent and celebrate progress, knowing even small actions make a difference. Together, we can create positive change.</p>
        <h1 className='text-center mt-14 text-2xl font-bold'>Bank Details</h1>
        <div className='md:w-[50%] w-[80%] py-11 px-6 gap-5 m-auto  items-center place-content-center flex flex-row text-sm md:gap-28  bg-blue-100 border border-blue-700 rounded-xl md:p-6 md:py-10'>

            <div className='flex flex-col gap-5'>
                <p>Account Number:</p>
                <p>Beneficiary Name:</p>
                <p>Bank Name:</p>
                
            </div>
            <div className='flex flex-col gap-5'>
                <p>0586944234</p>
                <p>HOB Lawal Foundation</p>
                <p>Guarantee Trust Bank</p>
            </div>

            
            
        </div>
        <button className='text-center bg-blue-900 w-60 m-auto text-white text-xs p-2 mt-5 rounded-2xl'>COPY ACCOUNT NUMBER</button>
    </div>
  )
}
