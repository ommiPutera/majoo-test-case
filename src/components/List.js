import {
  PencilAltIcon
} from "@heroicons/react/outline";
import {
  CheckCircleIcon,
  TrashIcon
} from "@heroicons/react/solid";
import clsx from 'clsx';
import { format } from 'date-fns'
import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { CHECKED_TODO, REMOVE_TODO, UPDATE_TODO } from "../constants/reducerCase";
import FormTodo from "./FormTodo";
import Popup from "./popup";

function List({
  title,
  desc,
  date,
  status,
  id
}) {
  const dispatch = useDispatch();
  const { itemsNotDone, itemsDone } = useSelector(state => state.todoList);

  let [isOpen, setIsOpen] = React.useState(false)
  const [inputs, setInputs] = React.useState({
    title: title,
    desc: desc,
  })

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  const onRemoveList = () => {
    const data = itemsNotDone.filter(item => item.id !== id)
    dispatch({ type: REMOVE_TODO, data })
  }

  const onUpdateList = () => {
    openModal()
  }

  const onChecked = () => {
    const data = itemsNotDone.filter(item => item.id !== id)
    const indexItems = itemsNotDone.findIndex(item => item.id === id)
    itemsNotDone[indexItems].status = 1

    dispatch({ type: REMOVE_TODO, data })
    dispatch({ type: CHECKED_TODO, dataItemsDone: itemsNotDone[indexItems] })
  }

  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const index = status === 0 ? itemsNotDone.findIndex(item => item.id === id) : itemsDone.findIndex(item => item.id === id)
    const data = {
      id: id,
      title: inputs.title,
      description: inputs.desc,
      status: status,
      createdAt: date
    }
    if (status === 0) {
      itemsNotDone[index] = data
    } else {
      itemsDone[index] = data
    }

    const updatedData = status === 0 ? itemsNotDone : itemsDone

    dispatch({ type: UPDATE_TODO, data: updatedData, status })
    closeModal()
  }

  return (
    <button
      className={clsx(
        "relative w-full flex items-center my-2.5 px-4 py-[14px] rounded-lg shadow-sm",
        "bg-white hover:bg-blue-50 border border-transparent hover:border-blue-400",
      )}
    >
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
      <div className='text-left w-2/3'>
        <h1 className="font-semibold leading-5 text-base">{title}</h1>
        <h2 className="text-sm">{desc}</h2>
      </div>
      <div className='flex gap-3 absolute right-4 top-[14px]'>
        {
          <Popup
            headText='Update your to-do'
            isOpen={isOpen}
            openModal={openModal}
            closeModal={closeModal}
            Button={
              <button onClick={() => onUpdateList()} className='group p-1 bg-blue-100 rounded hover:bg-blue-50'>
                <PencilAltIcon className='h-4 w-4 text-blue-500 group-hover:opacity-70' />
              </button>
            }
          >
            <FormTodo
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              inputs={inputs}
              bottomButton="Update"
            />
          </Popup>
        }
        {
          status === 0
          &&
          <button onClick={() => onRemoveList()} className='group p-1 bg-red-100 rounded hover:bg-red-50'>
            <TrashIcon className='h-4 w-4 text-red-500 group-hover:opacity-70' />
          </button>
        }
      </div>
      <div className='absolute right-4 bottom-1'>
        <h4 className='text-xs'>{date}</h4>
      </div>
    </button>
  )
}

export default List