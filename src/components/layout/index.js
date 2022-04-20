import React from 'react'

function Layout({ children }) {
  return (
    <div className='container px-3 md:px-32 lg:px-64 xl:px-96'>
      {children}
    </div>
  )
}

export default Layout