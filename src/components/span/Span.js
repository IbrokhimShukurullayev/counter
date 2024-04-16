import React from 'react'
import { useSelector } from 'react-redux'

function Counter() {
  let count = useSelector (state => state.counter.value)
  return (
    <div>
        <h2>Counter <span>{count}</span></h2>
    </div>
  )
}

export default Counter