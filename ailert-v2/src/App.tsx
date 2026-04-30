import Header from './components/header'
import Hero from './components/Hero'
import Search from './components/Search'
import ResourceList from './components/ResourceList'
import { useState } from 'react'



function App() {

  const [search, setSearch] = useState('')

  return(
    <div className='app'>
      <Header />
      <Hero />
      <Search search ={search} setSearch={setSearch} />
      <ResourceList search={search} />
    </div>
  )

}

export default App