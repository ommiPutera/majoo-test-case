import React from 'react'

function FormTodo({ handleChange, handleSubmit, inputs, bottomButton }) {
  return (
    <form className="mt-8">
      <div className='space-y-4'>
        <div className="space-y-2">
          <h1 className='text-sm font-semibold'>Title</h1>
          <div className="my-6 bg-gray-100 px-3 py-2 rounded">
            <input
              className="form-control w-full outline-none bg-transparent"
              placeholder="Lorem ipsum"
              name="title"
              value={inputs.title}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="space-y-2">
          <h1 className='text-sm font-semibold'>Description</h1>
          <div className="my-6 bg-gray-100 px-3 py-2 rounded">
            <input
              className="form-control w-full outline-none bg-transparent"
              placeholder="Lorem ipsum"
              name="desc"
              value={inputs.desc}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <div className="mt-8">
        <button
          type="submit"
          className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
          onClick={handleSubmit}
        >
          {bottomButton}
        </button>
      </div>
    </form>
  )
}

export default FormTodo