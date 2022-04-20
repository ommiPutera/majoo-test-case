import React from 'react'
import { useDispatch } from 'react-redux';
import { UPDATE_TODO } from '../../constants/reducerCase';
import Popup from '../popup';
import FormTodo from './FormTodo';
import RemoveList from './RemoveList';

function OpenDetail({
  title,
  desc,
  id,
  status,
  date,
  itemsNotDone,
  itemsDone,
  isOpen,
  setIsOpen
}) {
  const dispatch = useDispatch();

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
      <Popup
        headText='Update your to-do'
        isOpen={isOpen}
        openModal={openModal}
        closeModal={closeModal}
        Button={
          <></>
        }
      >
        <FormTodo
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          inputs={inputs}
          bottomButton="Update"
          rightButton={
            <RemoveList
              id={id}
              status={status}
              items={itemsNotDone}
              customComponent={
                <h1 className='bg-red-300 text-red-900 py-2 px-4 text-sm font-semibold rounded'>Delete</h1>
              }
            />
          }
        />
      </Popup>
    </React.Fragment>
  )
}

export default OpenDetail