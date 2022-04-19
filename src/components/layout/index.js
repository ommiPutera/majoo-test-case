import React from 'react'

function Layout({ children }) {
  return (
    <div className='container mx-auto lg:px-64 xl:px-96'>
      {children}
    </div>
  )
}

export default Layout