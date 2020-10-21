import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from "react-redux";
import {editTask} from '../../redux/actions';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';



const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  inputImage: {
    display: 'none',
  },
}));

export default function EditForm({goBack}) {
  const task = useSelector(state => state.task)
  const dispatch = useDispatch(); 
  const classes = useStyles();
  const taskValues = Object.values(task);
  console.log('Editform', taskValues)
const updateChange = () =>{} 


  return (
    <>
   
    <form className="task-list-form">                    
            { taskValues.map( (value, idx) => (
            <div className={classes.root} key={idx}>
            
                <TextField onChange={updateChange} 
                            placeholder="title"
                            margin="normal" 
                            value={value.title}
                            name="title" />
                           
                <TextField onChange={updateChange}
                            multiline
                            placeholder="description" 
                            margin="normal" 
                            value={value.description}
                            name="description" />
                         
                <TextField onChange={updateChange}
                            margin="normal" 
                            className={classes.textField}
                            type="date"
                            value={value.date}
                            name="dueDate" />
                    {/* <input
                      onChange={updateChange}
                      accept="image/*"
                      className={classes.inputImage}
                      name="image"
                      value={value.image}
                      id="contained-button-file"
                      multiple
                      type="file"
                    />
                    <label htmlFor="contained-button-file">
                    <IconButton color="default" aria-label="upload picture" component="span">
                      <PhotoCamera fontSize="large" />
                    </IconButton>
                    </label> */}
              </div>       
                      ))
                  }
             
                <Button onClick={goBack}
                        variant="contained">save task
                </Button>
            
    </form>
</>
  )
}
