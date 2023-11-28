import React from 'react';
import { useSelector } from 'react-redux';
import { GrTasks } from "react-icons/gr";
import { FaTasks } from "react-icons/fa";
import { FcParallelTasks } from "react-icons/fc";
import { LiaTasksSolid } from "react-icons/lia";


const SideBarre = () => {
  const TodayTasks = useSelector((state)=>state.today)
  const TomorrowTasks = useSelector((state)=>state.tomorrow)
  const WeekTasks = useSelector((state)=>state.week)
  const allTasks = TodayTasks.length+TomorrowTasks.length+WeekTasks.length
  return (
    <div className='Side_Barre'>
      <div className='Barretasks'>
          <div className='Task_State'>
          <GrTasks className='iconBarre' />
            <p>All Tasks : </p>
          </div>
          <div>
            {allTasks}
          </div>
      </div>
      <div className='Barretasks'>
          <div className='Task_State'>
          <FaTasks className='iconBarre' />
            <p>Today Tasks : </p>
          </div>
          <div>
            {TodayTasks.length}
          </div>
      </div>
      <div className='Barretasks'>
          <div className='Task_State'>
          <LiaTasksSolid  className='iconBarre'/>
            <p>Tomorrow Tasks : </p>
          </div>
          <div>
            {TomorrowTasks.length}
          </div>
      </div>
      <div className='Barretasks'>
          <div className='Task_State'>
          <FcParallelTasks  className='iconBarre'/>
            <p>This week Tasks : </p>
          </div>
          <div>
            {WeekTasks.length}
          </div>
      </div>
    </div>
  );
}

export default SideBarre;
