import React from 'react'
import image from '/src/assets/banner.png'
import '/src/css/Home.css'

function Home() {
  return (
    <>
      <div className='homesectionbanner'>
        <h1>Hi Welcome to Event Booking Site</h1>
        <img className='home-banner' src={image}/>
      </div>
    </>

  )
}

export default Home