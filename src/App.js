import React, { useState, useEffect } from 'react'
import Notification from './views/notification/Notification';
import Sidebar from './component/sidebar/Sidebar';
import Modal from './component/modal/Modal';
import Card from './component/card/Card';
import Rewards from './component/Rewards';
import TabsRender from './component/tabs/Tabs';
// import { getData } from './utils/api';

function App() {
  const [show, setShow] = useState(true)
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch('https://raw.githubusercontent.com/akshita151199/APIs/main/data').then((res) => res.json()).then(data=> setData(data))
        .catch(err => console.err(err));
    }
    getData();
  }, [])
  return (
    <div>
      <div className="w-full h-screen flex justify-center bg-black">
        <Sidebar />
        <div className='px-8 w-full py-8'>
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
