import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { COMPLETE_INFO_TODO } from '../../constants/reducerCase';
import CreateTodo from './CreateTodo';
import DoneList from './DoneList';
import NotDoneList from './NotDoneList';
import Tab from './Tab';

function TodoApp() {
  const dispatch = useDispatch();
  const { tab, itemsNotDone, completeInfo } = useSelector(state => state.todoList);

  const renderCompleteInfo = React.useCallback(() => {
    if (completeInfo) {
      return (
        <div className='fixed bottom-6 right-6 animate__component px-4 py-2 text-sm font-semibold text-white rounded-lg bg-green-500 w-[220px]'>
          Complete!
        </div>
      )
    }
    setTimeout(() => {
      dispatch({ type: COMPLETE_INFO_TODO })
    }, 2800)
  }, [completeInfo, dispatch])

  return (
    <div className='relative my-6 lg:px-14 xl:px-24'>
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
      <div className='relative'>
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
        {renderCompleteInfo()}
      </div>
    </div>
  )
}

export default TodoApp