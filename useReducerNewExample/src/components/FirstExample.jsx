import React from 'react'
import { useReducer } from 'react'


const initial = { age: 22 };

function reducer(state, action) {

    if (action.type === 'incremented_age') {
        return {
            age: state.age + 1
        }
    }
    throw new Error('Unknown action');

}


export default function FirstExample() {

    const [state, dispatch] = useReducer(reducer, initial)
    
    return (
        <div>
            <div>
                <h1>My Age {initial.age} </h1>

                <div>
                    <button onClick={() => dispatch({ type: 'incremented_age' })}>Increment</button>
                    <p>{`Hello! You Are ${state.age}`}</p>
                </div>
            </div>
        </div>
    )
}
