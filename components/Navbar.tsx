import React from 'react'

import Image from 'next/image'


const Navbar = () => {
  return (
    <header className='w-full absolute z-10' >
      <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4'>
       
        <div className='flex justify-center items-center'>
          <Image src="/logo.png" alt="Car Hub Logo" width={240} height={18} className='object-contain' />
        </div>
      </nav>
    </header>
  )
}

export default Navbar