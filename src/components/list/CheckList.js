import { CheckCircleIcon } from "@heroicons/react/solid";
import React from 'react';
import { useDispatch } from 'react-redux';
import { CHECKED_TODO, REMOVE_TODO } from '../../constants/reducerCase';

function CheckList({ status, id, itemsNotDone }) {
  const dispatch = useDispatch();

  const onChecked = () => {
    const data = itemsNotDone.filter(item => item.id !== id)
    const indexItems = itemsNotDone.findIndex(item => item.id === id)
    itemsNotDone[indexItems].status = 1

    dispatch({ type: REMOVE_TODO, data })
    dispatch({ type: CHECKED_TODO, dataItemsDone: itemsNotDone[indexItems] })
  }

  return (
    <div>
      {
        status === 0
        &&
        <button className='pr-4' onClick={onChecked}>
          <CheckCircleIcon className='h-7 w-7 text-gray-500 hover:opacity-50' />
        </button>
      }
      {
        status === 1
        &&
        <div className='pr-4'>
          <CheckCircleIcon className='h-7 w-7 text-green-500' />
        </div>
      }
    </div>
  )
}

export default CheckList