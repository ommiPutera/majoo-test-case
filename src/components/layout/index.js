import React from 'react'

function Layout({ children }) {
  return (
    <div className='container mx-auto'>
      {children}
    </div>
  )
}

export default Layout