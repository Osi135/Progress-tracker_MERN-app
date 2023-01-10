import React, { useState, useEffect } from 'react';
import './Tasks.scss';
import { images } from '../../constants';
import { NavbarWrap } from '../../wrapper';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState({
    title: ''
  });
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get('http://localhost:8082/api/tasks')
      .then((res) => {
        setTasks(res.data);
      })
      .catch((err) => {
        console.log('Error from ShowBookList');
      });
  }, [])
  

  const taskList = tasks.length === 0
    ? 'There is no tasks'
    : tasks.map((task) => <h2>{task.title}</h2>);
  
  const onChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:8082/api/tasks', task)
      .then((res) => {
        setTask({
          title: ''
        });
      })
      .catch((err) => {
        console.log('Error in CreateTask!');
      });
  };

  return (
    <div>
      <p>Tasks</p>
      <img src={images.react} alt="react logo" />
      <div>{taskList}</div>
      <form  noValidate onSubmit={onSubmit}>
        <input
          type='text'
          placeholder='Title of the Task'
          name='title'
          value={task.title}
          onChange={onChange}
        />
        <input
          type='submit'
        />
      </form>
    </div>
    

  )
}

export default NavbarWrap(Tasks)