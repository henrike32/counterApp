import React, { useState } from "react"

const Counter = () =>
{
  const [ count, setCount ] = useState( 0 )
  const handleClick = () =>
  {
    setCount( count + 1 )
  }
  return (
    <>
      <h1> Counter App </h1>
      <p> Counter: { count } </p>
      <button onClick={ handleClick }>Increment</button>
    </>
  )
}


export default Counter