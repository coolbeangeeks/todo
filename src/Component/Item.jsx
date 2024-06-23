import React from 'react';
import tick from './../assets/tick.png';
import untick from './../assets/not_tick.png';
import deleteicon from './../assets/delete.png';

const Item = ({ text, deleteTodo, id, iscomplete, toggle }) => {
  return (
    <div className='flex items-center my-3 gap-3'>
      <div 
        onClick={() => toggle(id)} 
        className='flex flex-1 items-center cursor-pointer'
      >
        <img 
          src={iscomplete ? tick : untick} 
          alt="" 
          className='w-7' 
        />
        <p className={`text-slate-700 ml-4 text-[17px] ${iscomplete ? 'line-through' : ''}`}>
          {text}
        </p>
      </div>
      <img 
        src={deleteicon} 
        alt="" 
        className='w-3.5' 
        onClick={() => deleteTodo(id)}
      />
    </div>
  );
};

export default Item;
