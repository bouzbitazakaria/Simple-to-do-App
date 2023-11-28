import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddTask from './AddTask';
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FaCheck } from "react-icons/fa";
import { modifytodayTask, removetodayTask } from '../redux/TodoReducer';
import { RiDeleteBin3Line } from "react-icons/ri";

const ListTasks = () => {
  const listtasks = useSelector((state)=> state.today)
  const dispatch = useDispatch()
  return (
    <div className='Daily_tasks'>
      <h3>Today</h3>
      <AddTask />
      {listtasks.map((e)=>{
        return(
          <div className='List_tasks'>
            <div className='task'>
              <input type="checkbox" id={e.name} onChange={()=>dispatch(modifytodayTask(e.id))} />
            <label htmlFor={e.name}>{e.name}</label>
            </div>
            <div className='state_of_task'> 
              {e.completed ?<FaCheck /> : <AiOutlineLoading3Quarters /> }
              <RiDeleteBin3Line onClick={()=>dispatch(removetodayTask(e.id))}/>
            </div>
          </div>
        )
      })}
    </div>
  );
}

export default ListTasks;
