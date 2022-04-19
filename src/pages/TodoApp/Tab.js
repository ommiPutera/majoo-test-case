import clsx from 'clsx';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CHANGE_TAB } from '../../constants/reducerCase';

function Tab() {
  const dispatch = useDispatch();
  const { tab } = useSelector(state => state.todoList);

  return (
    <div className='grid grid-cols-2 p-[5px] bg-white rounded-xl space-x-1.5'>
      <button
        onClick={() => dispatch({ type: CHANGE_TAB, tabName: 'not-done-list' })}
        className={clsx(
          "col-span-1 py-1.5 rounded-lg font-semibold text-base",
          `${tab === "not-done-list" ? "bg-blue-600 text-white" : "bg-transparent text-gray-500"}`
        )}
      >
        Not Done List
      </button>
      <button
        onClick={() => dispatch({ type: CHANGE_TAB, tabName: 'done-list' })}
        className={clsx(
          "col-span-1 py-1.5 rounded-lg font-semibold text-base",
          `${tab === "done-list" ? "bg-blue-600 text-white" : "bg-transparent text-gray-500"}`
        )}
      >
        Done List
      </button>
    </div>
  )
}

export default Tab