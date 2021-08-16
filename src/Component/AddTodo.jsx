import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../actions';

const AddTodo = () => {
   const [title, setTitle] = useState('');

   const dispatch = useDispatch();

   const handleSubmit = (e)=> {
        e.preventDefault();
        const error="you entered an empty task";
        title.trim() ? dispatch(addTodo(title)):alert(error);
       setTitle('');

    }

    return (
      <form className="add-div" onSubmit= {handleSubmit}>
        <input type="text" value={title} required 
            onChange={(e) => {
            setTitle(e.target.value);
          } }   
        /> 
           <button>Add Task</button>
      </form>
    )
}

export default AddTodo
