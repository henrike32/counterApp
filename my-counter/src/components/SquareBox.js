import React, { useState } from "react"

const SquareBox = () =>
{
  const [ boxColor, setBoxColor ] = useState( 'white' )

  const boxStyle = {
    width: '200px',
    height: '200px',
    border: '2px solid black',
    background: boxColor,
  }
  const handleClick = () =>
  {
    const randomColor = '#' + Math.floor( Math.random() * 16777215 ).toString( 15 )
    setBoxColor( randomColor )
  }
  return (
    <>
      <div className="square-box" style={ boxStyle } onClick={ handleClick }>  </div>
    </>
  )
}


export default SquareBox