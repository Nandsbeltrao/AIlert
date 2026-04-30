import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Search from './components/Search'
import ResourceList from './components/ResourceList'
import Footer from './components/Footer'



function App() {

  const [search, setSearch] = useState('')

   const [isCamouflage, setIsCamouflage] = useState(false)

  const handleToggle = () => {
    setIsCamouflage(!isCamouflage)
  }

  return(
    <div className='app'>
      <Header />
      <Hero />
      <Search search ={search} setSearch={setSearch} />
      <ResourceList search={search} />
      <Footer isCamouflage={isCamouflage} onToggle={handleToggle} />
    </div>
  )

}

export default App