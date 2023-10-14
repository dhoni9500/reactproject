import React, { useContext } from 'react'
import MyContext from './context'

function Header() {
    const {selectedUser}=useContext(MyContext)
  return (
    <div>selecteduser: {selectedUser}</div>
  )
}

export default Header