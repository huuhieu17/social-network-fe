import React from 'react'
import { useSelector } from 'react-redux'

const HomeGuest = () => {
  const count = useSelector(state => state.counter.number);
  return (
    <div>{count}</div>
  )
}

export default HomeGuest