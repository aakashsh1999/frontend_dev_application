import React from 'react'
import Dropdown from '../../component/Dropdown'

const Notification = () => {
  return (
    <div className='w-4/12 py-8 text-white'>
      <div className='flex justify-between'>
        <Dropdown name="Avalanche" />
        <Dropdown name="0xF6...1353" />
      </div>
      <div className='mt-6'>
        <div className='flex items-center'><i class="las la-arrow-left mr-2 text-xl"></i><h2 className='text-lg'>Custom link</h2></div>
        <h1 className='text-md font-normal mt-8 ml-4'>https://testnet.xyz.xyz/trade?ref=</h1>
        <input type={'text'} placeholder="ENTER" className='mt-4 px-4 py-3 w-96 rounded-xl bg-gray-600 focus:outline-none placeholder:text-sm' />
      </div>
      <div className='flex items-center justify-center mt-8'>
        <button className='flex justify-center items-center bg-blue-500 rounded-xl px-5 py-1'><i class="las la-external-link-square-alt text-2xl "></i><p className='font-bold ml-1'>Custom link</p></button>
        <button className='flex justify-center items-center bg-gray-600 rounded-xl px-5 py-1 ml-4'><i class="las la-share text-2xl "></i><p className='font-bold ml-1'>Cancel</p></button>
      </div>
    </div >
  )
}

export default Notification