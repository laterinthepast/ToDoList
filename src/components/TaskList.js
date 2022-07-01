
import React from 'react';
import "./TaskList.css";
import Task from "./Task"

const TaskList = (props) => {
    const active = props.tasks.filter(task=>task.active===true);
    const done = props.tasks.filter(task=>task.active===false);
      if(done.length>1){
    done.sort((a,b)=>{
        if(a.finishDate < b.finishDate){
            return 1
        }
        if(a.finishDate > b.finishDate){
            return -1
        }
        return 0
    })
}
// if(active.length>2){
//     console.log(active)
//     active.sort((a,b)=>{
//         a = a.name.toLowerCase();
//         b = b.name.toLowerCase();

//         if(a < b){
//             return -1
//         }
//         if(a>b){
//             return 1
//         }
//         return 0
// })
// }
    const activeTasks = active.map(task=><Task id={task.id} key={task.id} task={task} delete={props.delete} changeStatus={props.changeStatus}/>);
    const doneTasks = done.map(task=><Task id={task.id} key={task.id} task={task} delete={props.delete} changeStatus={props.changeStatus}/>)
    return ( <div className='TaskList'>
        <div className='activeTask'>
            <h3>Pending tasks: ({active.length})</h3>

            {active.length >=1 ? activeTasks : ""}
            
        </div>

        <div className='doneTask'>
            <h3>Completed: ({done.length})</h3>
            {done.length >=1 ? doneTasks : ""}
        </div>
    </div> );
}
 
export default TaskList;


