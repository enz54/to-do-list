import React from 'react';
import {editTask, deleteTask } from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
//import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: { '& > *': { margin: theme.spacing(1),}, },
  }));


  export default function ListTask() {
    const task = useSelector(state => state.task);
    const dispatch = useDispatch();
    const classes = useStyles();
    const taskKeys = Object.keys(task)
    
        return(
            <>
            { taskKeys.map(key => (
                    <form className="task-list-form" key={`taskItem_${key}`} >
                        <ul>
                        
                        <div className="todo">
                            <input type="checkbox" 
                                    checked={task[key].complete}
                                    onChange={e => { dispatch(editTask({ key, complete:e.target.checked}))}} />
                            <div className="task-todo-text">{task[key].title}</div>
                            <div className="task-todo-text">{task[key].dueDate}</div>
                            
                            <Button className={classes.root}><Icon>search</Icon></Button> 
                            <Button className={classes.root} onClick={() => dispatch(deleteTask(key))}><Icon>delete</Icon></Button>
                        </div>
                        </ul>
                    </form>

            ))
            }
      </>
        )
    
}

