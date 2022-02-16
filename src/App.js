import React, { useState, useEffect } from 'react'
import Notification from './views/notification/Notification';
import Sidebar from './component/sidebar/Sidebar';
import Modal from './component/modal/Modal';
import Card from './component/card/Card';
import Rewards from './component/Rewards';
import TabsRender from './component/tabs/Tabs';
// import { getData } from './utils/api';gita 

function App() {
  const [show, setShow] = useState(true)
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      await fetch('https://raw.githubusercontent.com/akshita151199/APIs/main/data').then((res) => res.json()).then((data) => setData(data))
        .catch(err => console.err(err));
    }
    getData();
  }, [data])

  return (
    <div>
      <div className='w-full h-12 bg-blue-600 flex justify-center items-center text-white font-bold'>Lorem Ipsum is simply dummy text of the printing
      </div>
      <div className="w-full h-screen flex justify-center bg-black">
        <Sidebar />
        <div className='px-8 w-full'>
          <div className='flex pt-8 justify-between'>
            <h2 className='text-white text-2xl'>Section</h2>
            <button className='flex justify-between items-center bg-gray-600 rounded-xl text-white px-2 py-1 ml-4'><i class="las la-wallet text-blue-500 text-2xl"></i><p className='font-medium text-lg ml-2'>0.2 $XYZ</p><div className='bg-blue-100 rounded-md px-2 ml-6 text-blue-400'>Tier 1</div></button>
          </div>
          <Modal show={show} setShow={() => setShow(false)} />
          <Rewards />
          <div className='flex mt-8'>
            <div className='w-full mr-8'>
              <Card />
            </div>
            <div className='w-full'>
              <Card />
            </div>
          </div>
          <TabsRender />
        </div>
        <Notification />
      </div>
    </div>
  );
}

export default App;
