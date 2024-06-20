import React from 'react'

function Box(props) {
  return (
    <div className='flex flex-col bg-white items-center justify-center h-96 w-96 my-7 '>
      <img className=' w-80 ' src={props.img} alt=''/>
      <span className=' font-semibold text-black'>{props.name}</span>
    </div>
  )
}

export default Box