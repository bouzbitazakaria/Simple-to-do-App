import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addtodayTask } from '../redux/TodoReducer';

const AddTask = () => {
  const dispatch = useDispatch()
  const [newtask,setnewtask] = useState('')


  return (
    <div className='add_new_task'>
      <input className='inp_task' type="text" placeholder='' onChange={(e)=>{setnewtask(e.target.value)}}/>
      <button className='btn_add' onClick={()=>dispatch(addtodayTask(newtask))}>+Add</button>
    </div>
  );
}
export default AddTask;
 