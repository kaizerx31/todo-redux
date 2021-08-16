import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { filters, toggleTodo } from '../actions';

const TodoList = () => {
  const tasks = useSelector(state => state.todo);
  const filter=useSelector(state => state.filter);
  const dispatch = useDispatch();
    return (
        <ul>
          {
              tasks.map(task =>  {
                   if(filter ===filters.SHOW_ALL || (filter===filters.SHOW_COMPLETED && task.isCompleted===true) || (filter=== filters.SHOW_INCOMPLETE && task.isCompleted === false))
                    return (
                        
                      <li key={task.id} className={task.isCompleted? "completed" : ""} > 
                      
                            <input type="checkbox" key={task.id}
                                   checked={task.isCompleted}
                                  onChange={() => {
                                    dispatch(toggleTodo(task.id));
                                    
                                  }}
                            />

                          {task.title} 
                      </li>
                    
                    )
                    else return null;

                }
             )
           }
        </ul>
     )
 }

export default TodoList
