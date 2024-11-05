import { useReducer } from 'react'

import './App.css'

type State = {
  count: number
}

type Action = | { type: 'increment' } | { type: 'decrement' } | { type: 'reset' }


const initializeState = { count: 0 }


function reducer(state: State, action: Action) {

  switch (action.type) {

    case 'increment':
      return { count: state.count + 1 }

    case 'decrement':
      if (state.count <= 0) {
        return {count: state.count}
      }
      return { count: state.count - 1 }

    case 'reset':
      return { count: 0 }
  }
}


function App() {

  const [state, dispatch] = useReducer(reducer, initializeState)

  return (
    <>
      <div>
        <h1>Contador</h1>
        <div className='counter'>
          <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
          <span style={{ margin: '40px' }}>{state.count}</span>
          <button onClick={() => dispatch({ type: 'increment' })}>+</button>
        </div>
        <button onClick={() => dispatch({ type: 'reset' })} style={{width: '230px', margin: '20px'}}>Reset</button>
      </div>
    </>
  )
}

export default App
