import React from 'react'
import tick from './../assets/tick.png';
import untick from './../assets/not_tick.png'
import deleteicon from './../assets/delete.png';

const Item = ({text}) => {
  return (
    <div className='flex items-center my-3 gap-3'>
        <div className='flex flex-1 items-center cursor-pointer'>
            <img src={tick} alt="" className='w-7'/>
            <p className='text-slate-700 ml-4 text-[17px]'>{text}</p>
        </div>
        <img src={deleteicon} alt="" className='w-3.5'/>
    </div>
  )
}

export default Item