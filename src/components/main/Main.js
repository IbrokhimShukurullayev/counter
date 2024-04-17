import React , { useState} from 'react'
import "./main.scss"

import { dnc } from '../../context/counter'
import { useDispatch } from 'react-redux'

function Main() {
  const [username , setUsername] = useState("")
  console.log(username);
  const handleSubmit = (e) => {
      e.preventDefault()
    }
  const dispatch = useDispatch()
  return (
    <form onSubmit={handleSubmit}>
      <input value={username} onChange={(e) => setUsername(e.target.value)} required type="text" name="" id="" />
      <button  onClick={() => dispatch(dnc(username))}>Increment</button>
    </form>
  )
}

export default Main