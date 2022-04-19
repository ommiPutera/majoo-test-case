import {
  PencilAltIcon
} from "@heroicons/react/outline";
import React from 'react';
import { useDispatch } from 'react-redux';
import { UPDATE_TODO } from '../../constants/reducerCase';
import Popup from '../popup';
import FormTodo from './FormTodo';

function EditList({ title,
  desc,
  id,
  status,
  date,
  itemsNotDone,
  itemsDone
}) {
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = React.useState(false)
  const [inputs, setInputs] = React.useState({
    title,
    desc,
  })

  function closeModal() {
    setIsOpen(false)
  }
  function openModal() {
    setIsOpen(true)
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
    <React.Fragment>
      {
        <Popup
          headText='Update your to-do'
          isOpen={isOpen}
          openModal={openModal}
          closeModal={closeModal}
          Button={
            <button onClick={() => openModal()} className='group p-1 bg-blue-100 rounded hover:bg-blue-50'>
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
    </React.Fragment>
  )
}

export default EditList