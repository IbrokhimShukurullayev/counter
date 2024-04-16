import React from 'react'
import "./navbar.scss"

import { inc } from '../../context/counter'
import { useDispatch } from 'react-redux'

function Navbar() {
  const dispatch = useDispatch()
  return (
    <div>
      <input type="text"  />
      <button onClick={() => dispatch(inc(1))}>Decrement</button>
    </div>
  )
}

export default Navbar