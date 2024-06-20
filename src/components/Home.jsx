import React from 'react'
import CarouselComp from './CarouselComp'
import MultiCarouselComp from './MultiCarouselComp'
import Box from './Box'
import box from '../constants/boximg'
import MultiBox from './MultiBox'
import multibox from '../constants/multibox'
function Home() {
  return (
    <div className='flex flex-grow flex-col bg-custom-back'>
        <CarouselComp/>
        <div className='flex flex-row justify-evenly flex-wrap'>
          {multibox.map(MultiBox)}
          {box.map(Box)}
        </div>
        <MultiCarouselComp/>
        <div className='flex flex-row justify-evenly flex-wrap'>
          {multibox.map(MultiBox)}
          {box.map(Box)}
        </div>
    </div>
  )
}

export default Home