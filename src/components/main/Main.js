import React from 'react'
import "./main.scss"

import { dnc } from '../../context/counter'
import { useDispatch } from 'react-redux'

function Main() {
  const dispatch = useDispatch()
  return (
    <div>
      <input type="text" name="" id="" />
      <button onClick={() => dispatch(dnc(1))}>Increment</button>

    </div>
  )
}

export default Main