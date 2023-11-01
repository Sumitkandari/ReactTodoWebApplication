import React, { useState } from 'react';
import "./updatetodo.css";
import { connect } from 'react-redux';
import { updateTodo } from '../redux/actions/todo';

const UpdateTodo = ({todos,updateToReducer,title,description,id}) => {
    const [update,setUpdate]=useState({
        title:title,
        description:description
    })
    const handleSubmit=(event)=>{
        event.preventDefault();
        updateToReducer(update,id)
       

    };
   
    
    
  return (
    <form onSubmit={handleSubmit}>
    <span className='upt-title' >Todo title</span>
    <input type="text" value={update.title} onChange={(event)=>{
        setUpdate({...update,title:event.target.value})
    }} className="upt-text" />
    <span className='upt-title' >Todo Description</span>
    <input type="text" onChange={(event)=>{
        setUpdate({...update,description:event.target.value})
    }} value={update.description} className="upt-text desc" />
    <button className="upt-btn">Add</button>
  </form>
  )
}
const mapStateToProps=(state)=>{
    return {
        todos:state.todos
    }

}
const mapDispatchToProps=(dispatch)=>({
    updateToReducer:(todo,id)=>{
        dispatch(updateTodo(todo,id))
    }
})

export default connect(mapStateToProps,mapDispatchToProps) (UpdateTodo);