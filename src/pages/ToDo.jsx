import React from 'react';
import ListTodayTasks from '../components/listTodayTasks';
import ListTomorrowTasks from '../components/ListTomorrowTasks';
import ListWeekTasks from '../components/ListWeekTasks';
import SideBarre from '../components/SideBarre';



const ToDo = () => {

  return (
    <main>
      <div>
        <SideBarre/>
      </div>
      <div className='Today_tomorrow'>
        <ListTodayTasks />
        <ListTomorrowTasks />
      </div>
      <ListWeekTasks />
    </main>
  );
}

export default ToDo;
