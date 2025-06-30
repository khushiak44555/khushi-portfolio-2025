import React, { useState } from 'react'
import Navbar from './Navbar'
import Content from './Content'
import Footer from './Footer'
import ReachOutDrawer from './ReachOutDrawer'

const Herosection = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className='w-full bg-[#0A0A0A] h-auto flex flex-col'>
      <div className="flex h-auto flex-1 justify-center">
        <div className="w-[100vw] h-auto">
          <Content />
        </div>
      </div>
    </div>
  )
}

export default Herosection