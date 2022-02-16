import React from 'react'
import bitImg from '../../assets/11.png'

const Modal = ({ show, setShow }) => {
    return (<>
        {show && (<div className='w-full flex justify-between relative bg-sky-500 pt-4 mt-8 pb-8 px-8 rounded-xl'>
            <i className='las la-times w-8  h-8 border-black bg-white text-black flex justify-center items-center font-bold 
            cursor-pointer
            rounded-full absolute text-xl -top-3 -right-1'
            onClick={setShow}
            ></i>
            <div>
                <h2 className='pt-4'>Lorem ipsum is simply dummy text of printing and typesetting industry</h2>
                <button className='bg-white rounded-md px-4 pt-0.5 mt-2'>Tutorial</button>
            </div>
            <img src={bitImg} alt="" className='absolute right-8 top-6 w-36' />

        </div>)}
    </>
    )
}

export default Modal