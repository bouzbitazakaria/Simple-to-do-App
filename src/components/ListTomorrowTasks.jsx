import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FaCheck } from "react-icons/fa";
import { addtomorrowTask, modifytomorrowTask, removetomorrowTask } from '../redux/TodoReducer';
import { RiDeleteBin3Line } from "react-icons/ri";

const ListTomorrowTasks = () => {
  const listtasks = useSelector((state)=> state.tomorrow)
  const dispatch = useDispatch()
  const [newtask,setnewtask] = useState('')
  return (
    <div className='Daily_tasks'>
      <h3>Tomorrow</h3>
      <div className='add_new_task'>
      <input className='inp_task' type="text" placeholder='' onChange={(e)=>{setnewtask(e.target.value)}}/>
      <button className='btn_add' onClick={()=>dispatch(addtomorrowTask(newtask))}>+Add</button>
    </div>
      {listtasks.map((e)=>{
        return(
          <div className='List_tasks'>
            <div className='task'>
              <input type="checkbox" id={e.name} onChange={()=>dispatch(modifytomorrowTask(e.id))} />
            <label htmlFor={e.name}>{e.name}</label>
            </div>
            <div className='state_of_task'>
              {e.completed ?<FaCheck /> : <AiOutlineLoading3Quarters /> }
              <RiDeleteBin3Line onClick={()=>dispatch(removetomorrowTask(e.id))} />
            </div>
          </div>
        )
      })}
    </div>
  );
}

export default ListTomorrowTasks;
