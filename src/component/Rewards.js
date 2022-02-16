import React from 'react'

const Rewards = () => {
let cryptoData = [
    {
        'amt':'40',
        'cur': 'AVAX'
    },
    {
        'amt':'10',
        'cur': 'BNB'
    },
    {
        'amt':'210',
        'cur': 'BTC'
    },

]
  return (
    <div className='bg-gray-500 rounded-xl p-6 mt-8 text-white'>
        <h2 className='text-xl font-medium'>Your rewards</h2>
        <div className='flex justify-between mt-4'>
            <h2 className='text-3xl font-bold'>$ 0.26231428</h2>
            <button className='flex justify-center items-center bg-blue-500 rounded-xl px-4 py-2'><i class="las la-external-link-square-alt text-2xl "></i><p className='font-bold ml-1'>Custom link</p></button>
        </div>
        <div className='flex mt-4'>
            {cryptoData.map((el) => <div className='rounded-full bg-gray-700 mr-4 font-semibold text-md px-2 py-0.5'>{`$ ${el.amt} ${el.cur}`}</div> )}
        </div>
    </div>
  )
}

export default Rewards