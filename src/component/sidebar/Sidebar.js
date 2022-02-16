import React, { useState } from 'react'
import { BsArrowLeft } from 'react-icons/bs'

const Sidebar = () => {
    const [showSideBar, setShowSidebar] = useState(false);
    const sidebarData = [
        {
            icon: 'las la-border-all',
            title: 'Home'
        },
        {
            icon: 'lar la-chart-bar',
            title: 'Section 1'
        },
        {
            icon: 'las la-chart-line',
            title: 'Section 2'
        },
        {
            icon: 'las la-chart-area',
            title: 'Section 3'
        },
        {
            icon: 'las la-dollar-sign',
            title: 'Section 4'
        },
        {
            icon: 'las la-coins',
            title: 'Section 5'
        },
        {
            icon: 'las la-chart-pie',
            title: 'Section 6'
        },
        {
            icon: 'las la-signal',
            title: 'Section 7'
        },
        {
            icon: 'las la-share-alt',
            title: 'Section 8'
        },

        {
            icon: 'las la-file-alt',
            title: 'Documentation'
        },


    ]

    return (
        <div className={showSideBar ? 'w-24 bg-black px-4' : 'w-2/6 py-8 px-6 bg-black h-screen shadow-white shadow-md text-white relative'}>
            <div className='flex items-center justify-center'>
                <div className='flex items-center'>
                    <div className='w-8 h-8 text-md bg-blue-500 rounded-full text-white flex justify-center items-center font-semibold mr-4'>N</div>
                    <h1 className='text-xl font-bold text-white ml-2'>Name</h1>
                </div>
                <div>
                    <BsArrowLeft className='text-white text-2xl ml-20 font-bolder cursor-pointer'
                        onClick={() => setShowSidebar(true)} />
                </div>
            </div>
            <div className='mt-6'>
                {
                    sidebarData.map((el, index) => <div className='flex text-gray-400 items-center py-2 cursor-pointer hover:bg-blue-300 hover:text-white hover:pl-4 rounded-xl' key={index}><i className={`${el.icon} text-2xl`}></i>{showSideBar ? null : <h2 className='text-md ml-4'>{el.title}</h2>}</div>)
                }
            </div>
            <div className='absolute bottom-0'>
                <div className='flex'>
                    <div className='bg-gray-400 rounded-lg p-2 flex'>
                        <div className='w-6 h-6 text-md bg-blue-400 rounded-full text-white flex justify-center items-center font-semibold mr-2'>N</div> $0.90
                    </div>
                    <div className='bg-blue-200 rounded-lg ml-4 flex'>
                        <h2 className='text-md text-blue-500 rounded-full flex justify-center items-center font-medium px-2'>Buy $XYZ</h2>
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default Sidebar