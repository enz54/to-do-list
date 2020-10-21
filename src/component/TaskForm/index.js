import React, {useState} from 'react'
import {editTask, deleteTask } from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import './style.css';


function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();
  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
    root: { '& > *': { margin: theme.spacing(1),}, },
    paper: {
        position: 'absolute',
        width: 350,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
      },
  }));

function index() {

  const [show, setShow] = useState(false);
  const [modalStyle] = useState(getModalStyle);
  const task = useSelector(state => state.task);
  const dispatch = useDispatch();
  const classes = useStyles();
  const taskKeys = Object.keys(task)
  const taskValues = Object.values(task)
  


  const handleClose = () => { setShow(false); }
  const handleShow = () => { setShow(true); }
  return (
    <>
      { taskKeys.map(key => (
                                <form className="task-list-form" key={`taskItem_${key}`} >
                                    <ul>
                                    
                                    <div className="todo">
                                            <input type="checkbox" 
                                            className="chck"
                                                checked={task[key].complete}
                                                onChange={e => { dispatch(editTask({ key, complete:e.target.checked}))}} />
                                        <div className="task-todo-text">{task[key].title}</div>
                                        <div className="task-todo-text">{task[key].dueDate}</div>
                                            <Modal
                                                open={show}
                                                onClose={handleClose}
                                                aria-labelledby="simple-modal-title"
                                                aria-describedby="simple-modal-description"
                                            >
                                               
                                                <div style={modalStyle} className={classes.paper}>
                                                <h2 id="simple-modal-title">Tasks Summary</h2>
                                                                <table>
                                                                <thead>
                                                                    <tr>
                                                                        <th>title</th>
                                                                        <th>Description</th>
                                                                        <th>Due Date</th>
                                                                    </tr>
                                                                </thead>
                                                    {taskValues.map((key,idx) => (
                                                                <tbody key={idx}>
                                                                    <tr>
                                                                        <td>{key.title}</td>
                                                                        <td>{key.description}</td>
                                                                        <td>{key.dueDate}</td>
                                                                    </tr>
                                                                </tbody>
                                                                    ))
                                                                }  
                                                            </table>
                                                    </div>
                                            </Modal>

                                        <Tooltip title="View" placement="top"><Button className={classes.root} onMouseDown={handleShow}><Icon>search</Icon> </Button></Tooltip> 
                                        <Tooltip title="Edit" placement="top"><Button className={classes.root} onClick={() => dispatch(editTask(key))}><Icon>edit</Icon></Button></Tooltip>
                                        <Tooltip title="Delete" placement="top"><Button className={classes.root} onClick={() => dispatch(deleteTask(key))}><Icon>delete</Icon></Button></Tooltip>
                                    </div>
                                    </ul>
                                </form>
                            ))
                }
    </>
  )
}

export default index
