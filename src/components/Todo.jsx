import React, { useState,useEffect } from 'react';
import logo from '../assets/Group 1.png';
import tick from '../assets/tick.png';
import unticked from '../assets/unticked.png';
import del_icon from '../assets/del_icon.png';
// import TodoItems from './TodoItems.jsx'

const Todo = () => {
    const [input, setInput] = useState('');
    const [tasks, setTasks] = useState(() => {
        const savedTasks = localStorage.getItem('tasks');
        return savedTasks ? JSON.parse(savedTasks) : [];
    });





    
    const handleInput = (e) => {
        setInput(e.target.value);
    };


    const addTasks = () => {
        if (input.trim() === '') {
            alert('Please Enter A Task!');
            return;
        }
        const newTask = {
            text: input,
            completed: false, //by default it is false so that later we can make it true to do the tick effect
        };
        setTasks([...tasks, newTask]);
        setInput('');
    };

    const toggleTask = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks[index].completed = !updatedTasks[index].completed;
        setTasks(updatedTasks);
    };
    const deleteTask = (indexToDelete) => {
        const updatedTasks = tasks.filter((_, index) => index !== indexToDelete);
        setTasks(updatedTasks);
    };


    // Load tasks from localStorage when component mounts
useEffect(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
        setTasks(JSON.parse(savedTasks));
    }
}, []);

// Save tasks to localStorage whenever tasks change
useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    console.log(tasks); // Now this will show correctly
}, [tasks]);
  


    return (
        <div className='flex flex-col bg-white w-11/12 max-w-md p-4 sm:p-7
      min-h-[550px] place-self-center rounded-3xl shadow-xl'>

            {/* Title */}
            <div className='flex flex-row gap-4 justify-evenly mb-6 items-center'>
                <img className='w-[7vh]' src={logo} alt='logo' />
                <h1 className='text-3xl sm:text-4xl lg:text-5xl text-transparent bg-clip-text
          bg-gradient-to-b from-yellow-300 via-orange-500 to-red-700
          font-extrabold font-heading'>
                    Mind-Dump!
                </h1>
            </div>




            <div className="relative w-full my-5">
                <input
                    className="w-full h-14 px-5 pr-[7rem] rounded-full border-2 border-slate-50
    outline-none focus:outline-none hover:border-amber-500 active:border-blue-950
    focus:shadow-lg shadow-gray-400 transition-all duration-200 ease-in-out"
                    type="text"
                    placeholder="Add Task"
                    value={input}
                    onChange={handleInput}
                />
                <button
                    onClick={addTasks}
                    className="absolute top-1 right-1 h-12 px-8 bg-amber-400 text-sm sm:text-base
    rounded-full font-bold font-body hover:shadow-xl shadow-amber-300
    active:translate-y-[2px] active:shadow-inner transition-transform cursor-pointer"
                >
                    Add +
                </button>
            </div>

            {/* Task List */}


            <div className='flex flex-col gap-2 my-3'>
                {tasks.map((task, index) => (
                    <div key={index} className='flex items-center gap-5'>
                        <img
                            src={task.completed ? tick : unticked}
                            alt='checkbox'
                            className='w-7 cursor-pointer'
                            onClick={() => toggleTask(index)}
                        />
                        <p className={`text-slate-700 text-[17px] font-body font-semibold flex-1 
                ${task.completed ? 'line-through text-gray-400' : ''}`}>
                            {task.text}
                        </p>
                        <img
                            src={del_icon}
                            alt='delete'
                            className='w-3.5 cursor-pointer'
                            onClick={() => deleteTask(index)}
                        />
                    </div>
                ))}
            </div>




        </div>
    );
};

export default Todo;

// className="bg-gray-100 px-4 py-2 rounded-xl shadow-sm text-base break-words"
