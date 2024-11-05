import React from 'react'
import { useId } from 'react'

function passwordField () {
    const passwordHintId = useId()
}

export default function FirstExample() {
  return (
    <div>
        <input type="text" aria-describedby={passwordHintId}/>
        <p id={passwordHintId}></p>
    </div>
  )
}
