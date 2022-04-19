import React from 'react'
import { useSelector } from 'react-redux';
import CreateTodo from './CreateTodo';
import DoneList from './DoneList';
import NotDoneList from './NotDoneList';
import Tab from './Tab';

function TodoApp() {
  const { tab, itemsNotDone } = useSelector(state => state.todoList);

  return (
    <div className='my-6 lg:px-14 xl:px-24'>
      <div className='mb-8 space-y-1'>
        <h1 className="text-xl font-semibold">To Do List Application</h1>
        <h1 className="text-base text-gray-500 font-normal">You have {itemsNotDone.length} to-do lists that you haven't done yet</h1>
      </div>
      <div className='mb-6'>
        <CreateTodo />
      </div>
      <div className='mb-1.5'>
        <Tab />
      </div>
      <div>
        {
          tab === "not-done-list"
          &&
          <NotDoneList />
        }
        {
          tab === "done-list"
          &&
          <DoneList />
        }
      </div>
    </div>
  )
}

export default TodoApp