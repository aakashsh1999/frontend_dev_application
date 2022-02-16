import React from 'react'

const Card = () => {
    return (
        <div className='bg-gray-700 rounded-xl p-6'>
            <div className='text-white flex items-center'><i class="lab la-monero text-2xl"></i><h2 className='font-extrabold text-2xl ml-2'>12.5 %</h2 ><h2 className='font-medium text-2xl ml-2'>of fee</h2></div>
            <h2 className='py-4 text-gray-400 text-md'>Your Referrel Link for xyz</h2>
            <div className='bg-gray-400 flex rounded-xl justify-between items-center p-4 text-white font-bold'>
                <h3>https://unitylexchange.design</h3>
                <div><i class="las la-copy text-2xl text-white cursor-pointer"></i></div>
            </div>
        </div>
    )
}
export default Card
