import React from 'react';
import ListTask from './component/ListTask';
import ListEmpty from './component/ListEmpty';
import Typography from '@material-ui/core/Typography';
import './App.css';



export default function App() {

  return (
    <div className="todo-app">  
    
      <Typography className="todo-title" variant="h2" gutterBottom>Todo</Typography>
      <ListTask /> 
      <div>
        <ListEmpty />
      </div>      
    </div>
  );
}

