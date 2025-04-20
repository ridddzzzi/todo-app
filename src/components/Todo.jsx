import React, { useState } from 'react';
import logo from '../assets/Group 1.png';

const Todo = () => {
    const [input, setInput] = useState('');
    const [tasks, setTasks] = useState([]);

    const handleInput = (e) => {
        setInput(e.target.value);
    };

    const addTasks = () => {
        if (input.trim() === '') {
            alert('Please Enter A Task!');
            return;
        }
        setTasks([...tasks, input]);
        setInput('');
    };

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

            {/* Input + Button */}
            {/*<div className='flex flex-col sm:flex-row gap-4 items-center justify-center my-5 w-full'>*/}
          {/*  <div className='relative w-full max-w-md mx-auto my-5'>*/}
          {/*      <input*/}
          {/*          className='border border-slate-300 rounded-xl h-14 px-5 py-2 w-full sm:w-auto flex-1 mx-2*/}
          {/*hover:border-amber-500 outline-none active:border-blue-950*/}
          {/*focus:outline-none focus:shadow-lg shadow-gray-500*/}
          {/*focus:scale-105 transition-all duration-200 ease-in-out'*/}
          {/*          type='text'*/}
          {/*          placeholder='Add Task'*/}
          {/*          value={input}*/}
          {/*          onChange={handleInput}*/}
          {/*      />*/}
          {/*      <button*/}
          {/*          className='bg-amber-400 rounded-xl font-body font-bold cursor-pointer*/}
          {/*px-6 py-2 mx-2 w-full sm:w-[36vh] hover:shadow-2xl shadow-amber-500*/}
          {/*active:translate-y-1 active:shadow-inner transition-transform text-xl'*/}
          {/*          onClick={addTasks}*/}
          {/*      >*/}
          {/*          Add +*/}
          {/*      </button>*/}
          {/*  </div>*/}

    {/*        <div className="relative w-full my-5">*/}
    {/*            <input*/}
    {/*                className="w-full h-14 px-5 pr-[6.5rem] border border-slate-100 rounded-full*/}
    {/*outline-none hover:border-amber-500 active:border-blue-950*/}
    {/*focus:shadow-lg shadow-gray-500 focus:scale-105 transition-all duration-200 ease-in-out"*/}
    {/*                type="text"*/}
    {/*                placeholder="Add Task"*/}
    {/*                value={input}*/}
    {/*                onChange={handleInput}*/}
    {/*            />*/}
    {/*            <button*/}
    {/*                onClick={addTasks}*/}
    {/*                className="absolute top-1.5 right-2 h-11 px-4 bg-amber-400 text-sm sm:text-base*/}
    {/*rounded-full font-bold font-body hover:shadow-2xl shadow-amber-500*/}
    {/*active:translate-y-1 active:shadow-inner transition-transform "*/}
    {/*            >*/}
    {/*                Add +*/}
    {/*            </button>*/}
    {/*        </div>*/}



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
    active:translate-y-[2px] active:shadow-inner transition-transform"
                >
                    Add +
                </button>
            </div>

            {/* Task List */}
            <div className="flex flex-col gap-2 overflow-y-auto max-h-[300px] px-2">
                {tasks.map((task, index) => (
                    <div key={index} className="bg-gray-100 px-4 py-2 rounded-xl shadow-sm text-base break-words">
                        {task}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Todo;
