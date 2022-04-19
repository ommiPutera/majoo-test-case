import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { COUNTING } from '../../constants/reducerCase';
import DoneList from './DoneList';
import NotDoneList from './NotDoneList';

function TodoApp() {
  const dispatch = useDispatch();
  const [Tab, setTab] = React.useState('not-done-list')

  const { count } = useSelector(state => state.counter);

  return (
    <div className='mx-64 my-12 space-y-7'>
      <h1 className="text-2xl font-semibold mb-24">To Do Application (Majoo Test Case)</h1>

      <div className='grid grid-cols-2 p-1 bg-gray-100 rounded space-x-1'>
        <button onClick={() => setTab('not-done-list')} className='col-span-1 bg-red-400 py-2 rounded'>
          Not Done List
        </button>
        <button onClick={() => setTab('done-list')} className='col-span-1 bg-gray-400 py-2 rounded'>
          Done List
        </button>
      </div>

      <div>
        {
          Tab === "not-done-list"
          &&
          <NotDoneList />
        }
        {
          Tab === "done-list"
          &&
          <DoneList />
        }
      </div>
    </div>
  )
}

export default TodoApp