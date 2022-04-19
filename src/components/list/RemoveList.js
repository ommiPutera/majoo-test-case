import {
  TrashIcon
} from "@heroicons/react/solid";
import React from 'react';
import { useDispatch } from 'react-redux';
import { REMOVE_TODO } from '../../constants/reducerCase';

function RemoveList({ status, items, id }) {
  const dispatch = useDispatch();

  const onRemoveList = () => {
    const data = items.filter(item => item.id !== id)
    dispatch({ type: REMOVE_TODO, data })
  }

  return (
    <React.Fragment>
      {
        status === 0
        &&
        <button onClick={() => onRemoveList()} className='group p-1 bg-red-100 rounded hover:bg-red-50'>
          <TrashIcon className='h-4 w-4 text-red-500 group-hover:opacity-70' />
        </button>
      }
    </React.Fragment>
  )
}

export default RemoveList