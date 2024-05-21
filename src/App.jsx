import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'

function App() {
  return (
    <div className='min-h-screen bg-black text-white '>
      <div className='max-w-7xl mx-20 p-5 '>
      <Navbar/>
      <Hero/>
      </div>
    </div>
  )
}

export default App
