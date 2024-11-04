import { useEffect, useState } from 'react'
import './App.css'

interface Irepository {
  name: string;
  id: number;
}

function App() {

  const [repository, setRepository] = useState<Irepository[]>([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch('https://api.github.com/users/7alexandree7/repos')
      .then(repo => repo.json())
      .then(data => setRepository(data))
  }, [])

  const filteredRepository = search.length > 0 ?
    repository.filter(repo => repo.name.includes(search)) :
    [];

  return (
    <>
      <input
        type="text"
        name="Search"
        id="Search"
        value={search}
        onChange={(e: any) => setSearch(e.target.value)} />


      {search.length > 0 ? (
        <ul>
          {filteredRepository.map((item) => {
            return (
              <li key={item.id}>{item.name}</li>
            )
          })}
        </ul>
      ) : (
        <ul>
          {repository.map((item) => {
            return (
              <li key={item.id}>{item.name}</li>
            )
          })}
        </ul>
      )}
    </>

  )
}


export default App 
