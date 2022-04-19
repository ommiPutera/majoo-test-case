import React from 'react'

function List({ title, desc, date }) {
  return (
    <div className='my-3 px-6 py-3 bg-gray-100'>
      <h1>{title}</h1>
      <h1>{desc}</h1>
      <h1>{date}</h1>
    </div>
  )
}

export default List