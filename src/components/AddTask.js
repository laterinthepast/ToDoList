import React from 'react';
import "./AddTask.css";

class AddTask extends React.Component {
    minDate = new Date().toISOString().slice(0,10)
    state = { 
        text:"",
        prioritet:false,
        date:this.minDate,
        
    } 

    

    handleTask=(e)=>{
        this.setState({
            text: e.target.value
        })
    }

    handlePrioritet=(e)=>{
        this.setState({
            prioritet: !this.state.prioritet
        })
    }

    handleDate=(e)=>{
        this.setState({
            date: e.target.value
        })
    }
    handleClick=()=>{
        const {text,prioritet,date}= this.state;
        if(this.state.text){
        const add =this.props.add(text, prioritet, date)
        if(add){
            this.setState({
                text:"",
                prioritet:false,
                date:this.minDate,
            })

        }}else {
           alert  ("write something")
        }
    }
     
    render() { 
        let maxDate = this.minDate.slice(0,4)*1 +1;
         maxDate = maxDate + "-01-01";

        return (<div className='AddTask'>
            
            <label htmlFor="task" className='Text'>
                <input type="text" id="task" value={this.state.text} onChange={this.handleTask} placeholder="Add task..." className='Text'/>
                {/* <button onClick={this.handleClick} className="Add">Add</button> */}
            </label>
            {/* <button onClick={this.handleClick} className="Add">Add</button> */}
            <br />
           
            <label htmlFor="date" className="Date" >
                 <input type="date" id="date" value={this.state.date} onChange={this.handleDate} min={this.minDate} max={maxDate} className="Date"/>
            </label>
            <label htmlFor="prioritet" className='Priority'> Priority
                <input className='control' type="checkbox" checked={this.state.prioritet} id="prioritet" onChange={this.handlePrioritet}/>
            </label>
            
            <button onClick={this.handleClick} className="Add">Add</button>
            
            

        </div>);
    }
}

 
export default AddTask;
