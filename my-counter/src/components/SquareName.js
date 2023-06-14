import React, { useState } from "react"

const SquareBox = () =>
{
  const [ boxColor, setBoxColor ] = useState( 'white' )
  const [ textColor, setTextColor ] = useState( 'black' )

  const boxStyle = {
    width: '200px',
    height: '200px',
    border: '2px solid black',
    background: boxColor,
    color: textColor,
  }
  const handleClick = () =>
  {
    const colors = [ 'red', 'yellow', 'green', 'blue', 'purple', 'pink' ]
    const randomColor = colors[ Math.floor( Math.random() * colors.length ) ];
    setBoxColor( randomColor );

    if ( randomColor === 'yellow' ) {
      setTextColor( 'black' )
    }
    else {
      setTextColor( 'white' )
    }
  }

  return (

    <div className="square-box" style={ boxStyle } onClick={ handleClick }>
      <span>{ boxColor }</span>
    </div>

  )
}


export default SquareBox