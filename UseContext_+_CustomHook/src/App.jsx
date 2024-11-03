import './App.css'
import FirstComponent from './Components/FirstComponent'
import SecondComponent from './Components/SecondComponent'
import ContextProvider from './Context/ContextProvider'

function App() {

  return (
    <>
      <ContextProvider>
        <FirstComponent />
        <SecondComponent />
      </ContextProvider>
    </>
  )
}

export default App
