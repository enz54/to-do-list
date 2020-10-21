import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import {addTask} from '../../redux/actions';
import {useDispatch} from 'react-redux'
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

const ListEmpty = () => {
  const [inputValues,setInputValues] = useState({title:'', description:'', dueDate:'', complete:false,image:''});
  
  const dispatch = useDispatch(); 
  const classes = useStyles();

  const updateChange = event =>
          setInputValues({
                ...inputValues,
                [event.target.name]: event.target.value
              });

  const handleClick = (e) => {
      e.preventDefault(); 
      const errs = validate();
      if(Object.keys(errs).length === 0){
        setInputValues()
      if(!inputValues) return;
      dispatch(addTask(inputValues));
      setInputValues({title:'', description:'', dueDate:''})
    } else {
      showError(errs)
    }
  }

  const validate = () => { 
    let err = {};

    if(!inputValues.title){
      err.title = 'title required ';
    }
    if(!inputValues.description){
      err.description = ' description required';
    }
    return err;
  }

 const showError = (erroObj) => {
   let errMsg = '';
   for(let err in erroObj){
     errMsg += `${erroObj[err]}`;
   }
   alert(`Errors: ${errMsg}`);
 }

        return (
            <>
                <form className="task-list-form">                    
                        <div className={classes.root}>
                            <TextField onChange={updateChange}
                                        helperText="Add a title" 
                                        placeholder="title"
                                        margin="normal" 
                                        value={inputValues.title}
                                        name="title" />
                            <TextField onChange={updateChange}
                                        helperText="Add a description"
                                        multiline
                                        placeholder="description" 
                                        margin="normal" 
                                        value={inputValues.description}
                                        name="description" />
                            <TextField onChange={updateChange}
                                        helperText="Select a date"
                                        margin="normal" 
                                        className={classes.textField}
                                        type="date"
                                        value={inputValues.dueDate}
                                        name="dueDate" />
                                <input
                                  onChange={updateChange}
                                  accept="image/*"
                                  className={classes.inputImage}
                                  name="image"
                                  value={inputValues.image}
                                  id="contained-button-file"
                                  multiple
                                  type="file"
                                />
                                <label htmlFor="contained-button-file">
                                <IconButton color="default" aria-label="upload picture" component="span">
                                  <PhotoCamera fontSize="large" />
                                </IconButton>
                                </label>
                            <Button onClick={handleClick}
                                    variant="contained">create task
                            </Button>
                        </div>
                </form>
            </>
           
        )
}

export default ListEmpty;