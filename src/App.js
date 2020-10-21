import React, { useState } from 'react';
import ListTask from './component/ListTask';
import ListEmpty from './component/ListEmpty';
import Typography from '@material-ui/core/Typography';
import EditForm from './component/EditForm'
import './App.css';



export default function App() {
  const [show,setShow] = useState(true);
  const goBack = () => setShow(true);
  return (
    <>
    <div className="todo-app">  
    
      <Typography className="todo-title" variant="h2" gutterBottom>Todo</Typography>
    {  show ?
      <>
        <ListTask />       
        <ListEmpty />
      </> 
      :  <EditForm goBack={goBack()}/> } 
    </div>
    </>
  );
}

