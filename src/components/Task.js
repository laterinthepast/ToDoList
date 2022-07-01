import React from 'react';
import "./Task.css";
const Task = (props) => {
    const {id, name, date, priority, active, finishDate} = props.task;
    const style= {
        fontWeight:"bold",
        fontSize:17,
    }
    if(active)
    {
        return ( <div className='active'>
            <div style={priority ? style : null} className="act">{name}</div>
       
         <div className='date'> until: {date}  </div> 
         <button onClick={()=>props.changeStatus(id)} className="btn">Complete</button>
          <button onClick={()=>props.delete(id)} className="btn2">X</button>
    </div> );  
    }
    else {
        const finish = new Date(finishDate).toLocaleString().slice(0,10);
        return(
            <div className='done'>
                <div className='don'>{name}</div>
                <div className='date'>done on {finish}</div>
                <button onClick={()=>props.delete(id)} className="btn2">X</button>
            </div>
        )
    }
}
 
export default Task;

