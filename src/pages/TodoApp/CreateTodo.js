import { Dialog, Transition } from '@headlessui/react'
import { format } from 'date-fns'
import React, { Fragment } from 'react'
import { useDispatch } from 'react-redux';
import Popup from '../../components/popup';
import FormTodo from '../../components/list/FormTodo';
import { CHANGE_TAB, CREATE_TODO } from '../../constants/reducerCase';

function CreateTodo() {
  const dispatch = useDispatch();
  let [isOpen, setIsOpen] = React.useState(false)
  const [inputs, setInputs] = React.useState({
    title: "",
    desc: "",
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
    const date = new Date()
    const data = {
      id: Math.random(),
      title: inputs.title,
      description: inputs.desc,
      status: 0,
      createdAt: format(date, 'yyyy-MM-dd HH:mm')
    }

    dispatch({ type: CREATE_TODO, data })
    setInputs({
      title: "",
      desc: "",
    })
    closeModal()
    dispatch({ type: CHANGE_TAB, tabName: 'not-done-list' })
  }

  return (
    <div>
      <Popup
        buttonText='Create Todo'
        headText='Create your to-do'
        isOpen={isOpen}
        openModal={openModal}
        closeModal={closeModal}
      >
        <FormTodo
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          inputs={inputs}
          bottomButton="Create"
        />
      </Popup>
    </div>
  )
}

export default CreateTodo;