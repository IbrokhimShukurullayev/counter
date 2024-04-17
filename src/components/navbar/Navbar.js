import React , { useState} from 'react'
import "./navbar.scss"

import { inc } from '../../context/counter'
import { useDispatch } from 'react-redux'

function Navbar() {
  const [username , setUsername] = useState("")
  const handleSubmit = (e) => {
      e.preventDefault()
    }
  const dispatch = useDispatch()
  return (
    <form onSubmit={handleSubmit}>
      <input value={username} onChange={(e) => setUsername(e.target.value)} type="text"  />
      <button onClick={() => dispatch(inc(+username))}>Decrement</button>
    </form>
  )
}

export default Navbar