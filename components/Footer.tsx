import React from 'react'


function Footer() {
  return (
    <section className=''>
        <div className='hidden md:block w-3/4 mx-auto p-5 bg-gradient-to-l from-cyan-500 to-blue-500 rounded-lg'>
            <div className='flex flex-col gap-5 items-center justify-center'>
                <span className='font-bold text-white  text-3xl capitalize'>Get Listed your assets as owner</span>
                <span className='text-white font-semibold'>Put your email address and get listed</span>
                <div className='relative w-2/5 mx-auto'>
                    <input 
                        className='w-full rounded-lg indent-5 bg-gray-200 py-4'
                        placeholder='Enter your email address'
                    />
                    <button className='absolute lg:w-1/5 md:w-2/6 text-xs text-center py-2  rounded-lg top-3 right-4 bg-black text-white'>Get started</button>
                </div>
            </div>
        </div>

        <div className=''>

        </div>
    </section>  
  )
}

export default Footer